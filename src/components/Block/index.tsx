import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { changePlace, toggleDragged } from "../../redux/actions/moveComponent";
import rootStateType, {itemNameType, itemType} from "../../redux/types";

import styles from "./Block.module.scss";

interface BlockProps {
  height: string;
  itemName: itemNameType;
  wrapperVisibility?: boolean;
  children?: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({
  height,
  wrapperVisibility = true,
  itemName,
  children,
}) => {
  const dispatch = useDispatch();

  const [mode, item] = useSelector(
      (state: rootStateType) => [state.app.mode, state.items[itemName]]
  ) as ["Runtime" | "Constructor", itemType];

  const handleDragStart = () => {
    dispatch(toggleDragged(itemName));
  };

  const handleDragEnd = () => {
    dispatch(toggleDragged(itemName));
  }

  const handleDoubleClick = () => {
    if ((item.place === 'canvas') && (mode === 'Constructor')) {
      dispatch(changePlace(itemName, 'side'));
    }
  }

  return (
    <div
      draggable={mode === "Constructor"}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDoubleClick={handleDoubleClick}
      style={{ height: height }}
      className={clsx(wrapperVisibility && styles.block)}
      data-name={itemName}
    >
      {children}
    </div>
  );
};

export default Block;
