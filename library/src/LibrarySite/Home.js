import React, { useState, useEffect } from "react";

import staticDataCat from "./dataExample/get_categories";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "../img";

const Home = () => {
  const [dataCat, setdataCat] = useState([]);
  const [isdataCat, setIsdataCat] = useState(false);
  const value = useGlobalContext();
  // console.log(dataCat.length);

  const getdataCat = () => {
    setdataCat(staticDataCat);
    setIsdataCat(true);
  };

  useEffect(() => {
    getdataCat();
  }, []);

  return (
    <div className="mainPage">
      {isdataCat ? <CatSliders data={dataCat} /> : <h2>Loading</h2>}
    </div>
  );
};

export default Home;

const CatSliders = ({ data }) => {
  // console.log(data);
  return (
    <>
      {data.map((category) => {
        // console.log(category.categories_books);
        return (
          <article className="listFragment" key={category.id}>
            <h3>{category.name}</h3>
            <div className="categorySlider">
              <button className="sliderBtn" id="left">
                <ArrowLeft />
              </button>
              <div className="booksSliderList">
                {category.categories_books.map((book) => {
                  console.log(book);
                  return (
                    <div key={book.book.id}>
                      <Link to="/">
                        <img
                          className="booksImg"
                          src={book.book.photo}
                          alt={book.book.title}
                        />
                        {/* {book.book.title} */}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <button className="sliderBtn" id="right">
                <ArrowRight />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};
