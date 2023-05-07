import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navigation from "./components/navigation";
import Background from "./components/background";
import Landing from "./features/landing/ui";
import Test from "./features/test/ui";
import Result from "./features/result/ui";
import NotFound from "./features/notfound/ui";

export function App(): JSX.Element {
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
