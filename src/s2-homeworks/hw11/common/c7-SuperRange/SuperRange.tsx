import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={styles}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;

const styles = {
  width: "140px",
  "& .MuiSlider-thumb": {
    //   position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #00CC22",
    "&::before": {
      content: '""',
      // position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: " #01CB22",
    },
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    "&:focus-within": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  },
  "& .MuiSlider-track": {
    backgroundColor: "#00CC22",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#8B8B8B",
  },
};
