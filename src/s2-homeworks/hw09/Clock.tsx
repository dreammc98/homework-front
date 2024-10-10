import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";
import { time } from "console";

/*
 * 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
 * 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
 * 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
 * */

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState("hw9-date", Date.now())));
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    const intervalId = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(intervalId);
  };

  // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
  // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

  const stop = () => {
    clearInterval(timerId);
    setTimerId(undefined);
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const addZero = (number: number) => {
    if (number < 10) {
      return "0" + String(number);
    } else {
      return number;
    }
  };

  const getWeekDay = (day: number) => {
    const daysWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return daysWeek[day - 1];
  };

  const getFullDate = () => {
    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;
  };
  const stringTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(
    date.getSeconds()
  )}` || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = getFullDate() || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = String(getWeekDay(date.getDay())) || <br />; // пишут студенты
  const stringMonth = String(date.toLocaleString("en", { month: "long" })) || <br />; // пишут студенты

  return (
    <div className={s.clock}>
      <div
        id={"hw9-watch"}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={"hw9-month"}>{stringMonth}</span>, <span id={"hw9-date"}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          Start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          Stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
