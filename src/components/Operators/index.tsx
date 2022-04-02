import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import rootStateType from "../../redux/types";
import Block from "../Block";
import Button from "../Button";

import styles from "./Operators.module.scss";

const operators = ["/", "х", "-", "+"];

const Operators: React.FC<{ position: "sidebar" | "canvas" }> = ({
  position,
}) => {
  const onCanvas = useSelector(
    (state: rootStateType) => state.items.operators.place === "canvas"
  );
  const isTransparentButtons = position === "sidebar" && onCanvas;

  return (
    <Block height="56px" itemName="operators" wrapperVisibility={!onCanvas}>
      <div
        className={clsx(styles.operatorsWrapper, onCanvas && styles.dragged)}
      >
        {operators.map((item) => (
          <Button
            key={item}
            content={item}
            width="52px"
            transparent={isTransparentButtons}
          />
        ))}
      </div>
    </Block>
  );
};

export default Operators;
