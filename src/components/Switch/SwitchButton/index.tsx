import React from "react";

import styles from "./SwitchButton.module.scss";

interface SwitchButtonProps {
  text: string;
  active: boolean;
  handleClick: () => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  text,
  active,
  handleClick,
}) => {
  return (
    <button
      className={`${styles.switchButton} ${active && styles.active}`}
      style={{ width: text === "Runtime" ? "108px" : "133px" }}
      disabled={active}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default SwitchButton;
