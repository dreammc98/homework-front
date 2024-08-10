import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";
import s from "./SuperRadio.module.css";

/*
 * 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
 * 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
 * */

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type SuperRadioPropsType = Omit<DefaultRadioPropsType, "type"> & {
  options?: any[];
  onChangeOption?: (option: number) => void;

  spanProps?: DefaultSpanPropsType; // пропсы для спана
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id,
  name,
  className,
  options,
  value,
  onChange,
  onChangeOption,
  spanProps,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    if (onChangeOption !== undefined) {
      onChangeOption(Number(e.currentTarget.value));
    }
  };

  const finalRadioClassName = s.radio + (className ? " " + className : "");
  const spanClassName = s.span + (spanProps?.className ? " " + spanProps.className : "");

  const mappedOptions: any[] = options
    ? options.map((o) => (
        <label key={name + "-" + o.id} className={s.label}>
          <input
            id={id + "-input-" + o.id}
            className={finalRadioClassName}
            type={"radio"}
            // name, checked, value делают студенты
            checked={o.id === value}
            value={o.id}
            name={name}
            onChange={onChangeCallback}
            {...restProps}
          />
          <span id={id + "-span-" + o.id} {...spanProps} className={spanClassName}>
            {o.value}
          </span>
        </label>
      ))
    : [];

  return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;
