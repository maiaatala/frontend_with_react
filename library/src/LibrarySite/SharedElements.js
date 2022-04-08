import { Link, Outlet } from "react-router-dom";
import React from "react";
import { RiscBlack, Githubicon, BooksLogo, SearchIcon } from "../img";

const SharedElements = () => {
  return (
    <>
      <Header />
      <MainHeader />
      <Outlet />
    </>
  );
};

export default SharedElements;

const Header = () => {
  return (
    <div className="aboutBar">
      <a href="https://www.instagram.com/risc.unemat.br/?hl=en">
        <RiscBlack />
      </a>
      <div className="gitHubLink">
        <p>dev: Ana Atala</p>
        <a href="https://github.com/maiaatala">
          <Githubicon />
        </a>
      </div>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <Link to="/">
        <BooksLogo id="logo" />
      </Link>
      <Link to="/">
        <p style={{ minWidth: "67.1px" }}> Na Sorte</p>
      </Link>
      <Link to="/">
        <p style={{ minWidth: "117px" }}>Adicionar Livro</p>
      </Link>
      <div className="searchMenu">
        <div className="selectionBox">
          <select name="select" id="searchOp">
            <option value="title">titulo</option>
            <option value="author">autor</option>
          </select>
        </div>
        <input type="text" />

        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
