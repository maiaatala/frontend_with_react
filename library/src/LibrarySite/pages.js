import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Error from "./Error";
import SharedElements from "./SharedElements";
import SingleBook from "./SingleBook";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SharedElements />}>
          <Route index element={<Home />} />
          <Route path="books/:bookId" element={<SingleBook />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
