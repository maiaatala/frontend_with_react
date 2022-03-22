import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// ! yarn add react-router-dom@6
// import "./index.css";
import Basics from "./tutorial/1-useState/1-basics";
import UseSA from "./tutorial/1-useState/3-useStateArray";
import UseSO from "./tutorial/1-useState/4-useStateObject";
import Counter from "./tutorial/2-simpleCounter/useStateCounter";
import UseEB from "./tutorial/3-useEffect/1-basics";
import UseEClean from "./tutorial/3-useEffect/2-cleanupFunction";
import UseEData from "./tutorial/3-useEffect/3-fetchData";
import MultiR from "./tutorial/4-conditionalRendering/1-multipleReturns";
import ShortC from "./tutorial/4-conditionalRendering/2-shorCircuit";
import Forms from "./tutorial/5-Forms/1-forms";
import UseRef from "./tutorial/6-useRef/1-useRefBasics";

export default function App() {
  return (
    <Router>
      <nav className="MainNav">
        <Link to="/">Home</Link>
        <Link to="/useState">useState</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/useEffect">useEffect</Link>
        <Link to="/conditionalRendering">Cond. Rendering</Link>
        <Link to="/Forms">Forms</Link>
        <Link to="/useRef">useRef</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Basics />
            </div>
          }
        />
        <Route path="/useState" element={<UseState />} />
        <Route
          path="/counter"
          element={
            <div className="container">
              <Counter />
            </div>
          }
        />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route
          path="/conditionalRendering"
          element={<ConditionalRendering />}
        />
        <Route path="/Forms" element={<FormsT />} />
        <Route
          path="/useRef"
          element={
            <div className="container">
              <UseRef />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

const UseState = () => {
  return (
    <div className="container">
      <UseSA />
      <UseSO />
    </div>
  );
};

const UseEffect = () => {
  return (
    <div className="container">
      <UseEB /> <UseEClean /> <UseEData />
    </div>
  );
};

const ConditionalRendering = () => {
  return (
    <div className="container">
      <MultiR />
      <ShortC />
    </div>
  );
};

const FormsT = () => {
  return (
    <div className="container">
      <Forms />
    </div>
  );
};
