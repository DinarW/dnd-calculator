import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import Block from "../Block";

import styles from "./EqualButton.module.scss";
import rootStateType from "../../redux/types";
import { pressEqual } from "../../redux/actions/calculate";

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
  const dispatch = useDispatch();

  return (
    <Block height="72px" itemName="equalButton" wrapperVisibility={!onCanvas}>
      <button
        className={buttonClass}
        onClick={() => mode === "Runtime" && dispatch(pressEqual())}
      >
        <span>=</span>
      </button>
    </Block>
  );
};

export default EqualButton;
