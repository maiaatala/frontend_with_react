import React, { useState, useEffect } from "react";

import staticDataCat from "./dataExample/get_categories";
import { useGlobalContext } from "../context";

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
      <div className="searchBox">
        <section className="filter">
          <button>author</button>
          <button>title</button>
        </section>
        <input className="form" placeholder="search..." type="text" />
      </div>
      {isdataCat ? <TagList dataCat={dataCat} /> : <h2>Loading</h2>}
    </div>
  );
};

export default Home;

const TagList = (props) => {
  const sizing = () => {
    let biggerList = 0;
    props.dataCat.forEach((element) => {
      let curr = element.categories_books.length;
      if (curr >= biggerList) {
        biggerList = curr;
      }
    });
    return biggerList;
  };

  return (
    <div className="tags">
      {props.dataCat.map((category) => {
        return (
          <article key={category.id}>
            <h3
              style={{
                fontSize: `${
                  (category.categories_books.length * 100) / sizing() + 20
                }%`,
              }}
            >
              {category.name}
            </h3>
          </article>
        );
      })}
    </div>
  );
};
