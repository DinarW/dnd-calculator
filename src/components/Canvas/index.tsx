import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import rootStateType, { itemNameType, itemsStateType } from "../../redux/types";

import Display from "../Display";
import Operators from "../Operators";
import Numbers from "../Numbers";
import EqualButton from "../EqualButton";

import styles from "./Canvas.module.scss";

const itemComponents = {
  display: <Display text="0" position="canvas" />,
  operators: <Operators position="canvas" />,
  numbers: <Numbers position="canvas" />,
  equalButton: <EqualButton position="canvas" />,
};

const Canvas: React.FC = () => {
  const [items, names] = useSelector(
  (state: rootStateType) => [state.items, Object.keys(state.items)]
  ) as [itemsStateType, itemNameType[]];

  return (
    <div className={clsx(styles.canvas, !names.length && styles.empty)}>
      {!names.length ? (
        <div className={styles.helpText}>
          <h4>Перетащите сюда</h4>
          <span>любой элемент из левой панели</span>
        </div>
      ) : (
        names
          .filter((name) => items[name].place === 'canvas')
          .sort((a, b) => (items[a].order || 0) - (items[b].order || 0))
          .map((name) => itemComponents[name])
      )}
    </div>
  );
};

export default Canvas;
