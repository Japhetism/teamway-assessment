import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import Navigation from "./components/navigation";
import Background from "./components/background";
import Landing from "./features/landing/ui";
import Test from "./features/test/ui";
import Result from "./features/result/ui";
import NotFound from "./features/notfound/ui";
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
    <Background className="h-auto w-auto">
      <Navigation>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/personality/take-test" element={<Test />} />
            <Route path="/personality/result" element={<Result />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Navigation>
    </Background>
  );
}

export default App;
