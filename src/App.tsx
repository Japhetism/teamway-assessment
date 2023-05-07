import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import Background from "./components/background";
import Landing from "./features/landing";
import Test from "./features/test";
import Result from "./features/result";
import './App.css';

export function App(): JSX.Element {
  useEffect(() => {
    switch (localStorage.theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
          document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        break;
    }
  }, []);

  return (
    <Background className="h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/personality/take-test" element={<Test />} />
          <Route path="/personality/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
