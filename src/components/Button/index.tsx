import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import rootStateType from "../../redux/types";

import styles from "./Button.module.scss";

interface ButtonProps {
  content: string;
  height?: string;
  width?: string;
  transparent?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { content, height = "48px", width = "72px", transparent } = props;
  const mode = useSelector((state: rootStateType) => state.app.mode);

  return (
    <button
      className={clsx(
        styles.button,
        mode === "Runtime" && !transparent && styles.active
      )}
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
