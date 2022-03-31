import React from "react";
import { useSelector } from "react-redux";
import rootStateType from "../../redux/types";

import Display from "../Display";
import Operators from "../Operators";
import Numbers from "../Numbers";
import EqualButton from "../EqualButton";

const Sidebar: React.FC = () => {
  const mode = useSelector((state: rootStateType) => state.app.mode);

  return (
    <div>
      <div style={{ display: mode === 'Runtime' ? 'none' : 'block' }}>
        <Display text="0" position="sidebar" />
        <Operators position="sidebar" />
        <Numbers position="sidebar" />
        <EqualButton position="sidebar" />
      </div>
    </div>
  );
};

export default Sidebar;
