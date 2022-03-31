import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../../redux/actions/switchMode";
import SwitchButton from "./SwitchButton";
import rootStateType from "../../redux/types/";

import styles from "./Switch.module.scss";

const Switch: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: rootStateType) => state.app.mode);

  return (
    <div className={styles.switchBlock}>
      <div className={styles.switch}>
        <SwitchButton
          handleClick={() => dispatch(switchMode("Runtime"))}
          active={mode === "Runtime"}
          text={"Runtime"}
        />
        <SwitchButton
          handleClick={() => dispatch(switchMode("Constructor"))}
          active={mode === "Constructor"}
          text={"Constructor"}
        />
      </div>
    </div>
  );
};

export default Switch;
