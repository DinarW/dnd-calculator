import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import rootStateType from "../../redux/types";

import styles from "./Block.module.scss";

interface BlockProps {
  height: string;
  wrapperVisibility: boolean;
  children?: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({
  height,
  wrapperVisibility = true,
  children,
}) => {
  const mode = useSelector((state: rootStateType) => state.app.mode);

  return (
    <div
      draggable={mode === "Constructor"}
      style={{ height: height }}
      className={clsx(wrapperVisibility && styles.block)}
    >
      {children}
    </div>
  );
};

export default Block;
