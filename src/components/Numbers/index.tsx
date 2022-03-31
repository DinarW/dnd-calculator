import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Block from "../Block";
import Button from "../Button";

import styles from "./Numbers.module.scss";
import rootStateType from "../../redux/types";

const nums = Array(9)
  .fill(0)
  .map((e, i) => i + 1);

const Numbers: React.FC<{ position: "sidebar" | "canvas" }> = ({
  position,
}) => {
  const onCanvas = useSelector(
    (state: rootStateType) => state.items.numbers.place === "canvas"
  );
  const isTransparentButtons = position === "sidebar" && onCanvas;

  return (
    <Block height="224px" wrapperVisibility={!onCanvas}>
      <div className={clsx(styles.numbersWrapper, onCanvas && styles.onCanvas)}>
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

export default Numbers;
