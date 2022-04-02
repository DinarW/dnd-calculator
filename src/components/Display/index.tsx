import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import rootStateType from "../../redux/types";
import Block from "../Block";

import styles from "./Display.module.scss";

interface DisplayProps {
  text: string;
  position: "sidebar" | "canvas";
}

const Display: React.FC<DisplayProps> = ({ text, position }) => {
  const { onCanvas, displayText } = useSelector((state: rootStateType) => {
    const onCanvas = state.items.display.place === "canvas";
    const displayText = parseFloat(state.calc[state.calc.enter].join(""));

    return { onCanvas, displayText };
  });

  const displayClass = clsx(
    styles.display,
    position === "sidebar" && styles.onSidebar,
    onCanvas && styles.dragged
  );

  return (
    <Block height="60px" itemName="display" wrapperVisibility={!onCanvas}>
      <div className={displayClass}>
        <span>
          {Number.isNaN(displayText) || !Number.isFinite(displayText)
            ? "Не определенно"
            : displayText}
        </span>
      </div>
    </Block>
  );
};

export default Display;
