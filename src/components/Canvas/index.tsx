import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import rootStateType, { itemNameType, itemsStateType } from "../../redux/types";
import useDragCanvas from "./hooks/useDragCanvas";

import Display from "../Display";
import Operators from "../Operators";
import Keyboard from "../Keyboard";
import EqualButton from "../EqualButton";

import styles from "./Canvas.module.scss";

const itemComponents = {
  display: <Display text="0" position="canvas" key="display" />,
  operators: <Operators position="canvas" key="operators" />,
  keyboard: <Keyboard position="canvas" key="keyboard" />,
  equalButton: <EqualButton position="canvas" key="equalButton" />,
};

const Canvas: React.FC = () => {
  const [items, names] = useSelector(
  (state: rootStateType) => [state.items, Object.keys(state.items)]
  ) as [itemsStateType, itemNameType[]];

  const canvasRef = React.useRef() as React.RefObject<HTMLDivElement>;
  const {
    dragOverHandler,
    dragLeaveHandler,
    dropHandler
  } = useDragCanvas(canvasRef.current);
  const itemsOnCanvas = names.filter((name) => items[name].place === 'canvas');

  return (
    <div
      ref={canvasRef}
      className={clsx(styles.canvas, !itemsOnCanvas.length && styles.empty)}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
    >
      {!itemsOnCanvas.length ? (
        <div className={styles.helpText}>
          <h4>Перетащите сюда</h4>
          <span>любой элемент из левой панели</span>
        </div>
      ) : (
        itemsOnCanvas
          .sort((a, b) => (items[a].order || 0) - (items[b].order || 0))
          .map((name) => itemComponents[name])
      )}
    </div>
  );
};

export default Canvas;
