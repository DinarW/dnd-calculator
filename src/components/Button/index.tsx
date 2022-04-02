import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import rootStateType from "../../redux/types";

import styles from "./Button.module.scss";
import { enterNumber, enterOperator } from "../../redux/actions/calculate";

interface ButtonProps {
  content: string;
  height?: string;
  width?: string;
  transparent?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { content, height = "48px", width = "72px", transparent } = props;
  const mode = useSelector((state: rootStateType) => state.app.mode);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (mode === "Runtime") {
      dispatch(
        !Number.isNaN(Number(content)) || content === ","
          ? enterNumber(content)
          : enterOperator(content)
      );
    }
  };

  return (
    <button
      className={clsx(
        styles.button,
        mode === "Runtime" && !transparent && styles.active
      )}
      onClick={handleClick}
      style={{
        height: height,
        width: width,
        opacity: transparent ? "50%" : "1",
      }}
    >
      <span>{content}</span>
    </button>
  );
};

export default Button;
