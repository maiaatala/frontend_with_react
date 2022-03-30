import React from "react";

import data_cat from "./dataExample/get_categories";
import { useGlobalContext } from "../context";

const Home = () => {
  const value = useGlobalContext();
  console.log(data_cat.length);

  const uppperLimit = () => {
    let biggerList = 0;
    data_cat.forEach((element) => {
      let curr = element.categories_books.length;
      if (curr >= biggerList) {
        biggerList = curr;
      }
    });
    return biggerList;
  };

  return (
    <div className="mainPage">
      <div className="searchBox">
        <section className="filter">
          <button>author</button>
          <button>title</button>
        </section>
        <input className="form" placeholder="search..." type="text" />
      </div>
      <div className="tags">
        {data_cat.map((category) => {
          return (
            <article key={category.id}>
              <h3
                style={{
                  fontSize: `${
                    (category.categories_books.length * 100) / uppperLimit() +
                    20
                  }%`,
                }}
              >
                {category.name}
              </h3>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
