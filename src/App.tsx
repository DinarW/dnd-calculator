import React from "react";
import Switch from "./components/Switch";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="content">
        <Switch />
        <div className="cols">
          <Sidebar />
          <Canvas />
        </div>
      </div>
    </div>
  );
};

export default App;
