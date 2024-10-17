import React from "react";
import downI from "../../svg/downIcon.svg";
import upI from "../../svg/upIcon.svg";
import noneI from "../../svg/noneIcon.svg";

const downIcon = downI;
const upIcon = upI;
const noneIcon = noneI;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === "") {
    return down;
  } else if (sort === down) {
    return up;
  } else if (sort !== down && sort !== up) {
    return down;
  } else {
    return "";
  }
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = "hw15" }) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      <img id={id + "-icon-" + sort} src={icon} style={{ cursor: "pointer" }} />
    </span>
  );
};

export default SuperSort;
