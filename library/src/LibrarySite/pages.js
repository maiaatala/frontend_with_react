import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Error from "./Error";
import SharedElements from "./SharedElements";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedElements />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
