import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Block from "../Block";

import styles from "./EqualButton.module.scss";
import rootStateType from "../../redux/types";

const EqualButton: React.FC<{ position: "sidebar" | "canvas" }> = ({
  position,
}) => {
  const [onCanvas, mode] = useSelector((state: rootStateType) => [
    state.items.equalButton.place === "canvas",
    state.app.mode,
  ]);
  const buttonClass = clsx(
    styles.equalButton,
    onCanvas && styles.dragged,
    position === "sidebar" && styles.onSidebar,
    mode === "Runtime" && styles.active
  );

  return (
    <Block height="72px" wrapperVisibility={!onCanvas}>
      <div className={buttonClass}>
        <span>=</span>
      </div>
    </Block>
  );
};

export default EqualButton;
