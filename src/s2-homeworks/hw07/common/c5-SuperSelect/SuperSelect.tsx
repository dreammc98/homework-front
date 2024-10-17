import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from "react";
import s from "./SuperSelect.module.css";

/*
 * 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
 * */

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: number) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o) => (
        <option id={"hw7-option-" + o.id} className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeOption !== undefined) {
      onChangeOption(Number(e.currentTarget.value));
    } else if (onChange !== undefined) {
      onChange(e);
    }
  };

  const finalSelectClassName = s.select + (className ? " " + className : "");

  return (
    <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
