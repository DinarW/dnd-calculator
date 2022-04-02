import React from "react";
import { useSelector } from "react-redux";
import Block from "../Block";
import Button from "../Button";

import styles from "./Keyboard.module.scss";
import rootStateType from "../../redux/types";

const nums = Array(9)
  .fill(0)
  .map((e, i) => i + 1);

const Keyboard: React.FC<{ position: "sidebar" | "canvas" }> = ({
  position,
}) => {
  const onCanvas = useSelector(
    (state: rootStateType) => state.items.keyboard.place === "canvas"
  );
  const isTransparentButtons = position === "sidebar" && onCanvas;

  return (
    <Block height="224px" itemName="keyboard" wrapperVisibility={!onCanvas}>
      <div className={styles.keyboardWrapper}>
        <Button content="0" width="152px" transparent={isTransparentButtons} />
        <Button content="," transparent={isTransparentButtons} />
        {nums.map((num) => (
          <Button
            key={num}
            content={`${num}`}
            transparent={isTransparentButtons}
          />
        ))}
      </div>
    </Block>
  );
};

export default Keyboard;
