import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Error from "./Error";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
