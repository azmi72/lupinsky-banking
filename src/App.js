import React from "react";
import MainContents from "./components/MainContents";
import RightNav from "./components/RightNav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <section className="flex flex-row w-full max-h-screen bg-white">
      <Sidebar />
      <MainContents />
      <RightNav />
    </section>
  );
}

export default App;
