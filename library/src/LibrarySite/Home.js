import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import staticDataCat from "./dataExample/get_categories";
import LoadingElement from "./LoadingElement";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "../img";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import required modules
import { FreeMode, Pagination } from "swiper";

// get category info url
const url_cat = "http://127.0.0.1:8000/categories";

const Home = () => {
  //todo: take these to the global context
  const [dataCat, setdataCat] = useState([]);
  const [isdataCat, setIsdataCat] = useState(false);
  // const value = useGlobalContext();
  // console.log(dataCat.length);

  // future await function
  const getdataCat = async () => {
    // const response = await fetch(url_cat);
    // const cat_data = await response.json();
    // console.log(dataCat);
    // console.log(cat_data);
    // setdataCat(cat_data);
    setIsdataCat(true);
    setdataCat(staticDataCat);
  };

  // get data on page load
  useEffect(() => {
    getdataCat();
  }, []);

  return (
    <div className="mainPage">
      {isdataCat ? <CatSliders data={dataCat} /> : <LoadingElement />}
    </div>
  );
};

export default Home;

const CatSliders = ({ data }) => {
  // gets rid of categories without books on them
  data = data.filter((category) => {
    return category.categories_books.length > 0;
  });
  //sorts the categories by the quantity of books on them
  data.sort((a, b) => {
    return b.categories_books.length - a.categories_books.length;
  });
  //returns an slider for the categories
  return (
    <>
      <article className="listFragment" key={data[0].id}>
        <h3>{data[0].name}</h3>
        <div>
          <SwiperBasic books={data[0].categories_books} />
        </div>
      </article>
      <article className="listFragment" key={data[0].id}>
        <h3>{data[0].name}</h3>
        <div>
          <SwiperPaginationDynamic books={data[0].categories_books} />
        </div>
      </article>
      <article className="listFragment" key={data[0].id}>
        <h3>{data[0].name}</h3>
        <div>
          <SwiperFreemode books={data[0].categories_books} />
        </div>
      </article>
    </>
  );
};

const SwiperBasic = ({ books }) => {
  const navigate = useNavigate();
  const space = useRef(null);

  const handleImageClick = (id) => {
    console.log(id);
    navigate(`/books/${id}`);
  };

  return (
    <Swiper
      spaceBetween={20}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      ref={space}
      breakpoints={{
        400: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        580: {
          slidesPerView: 3,
        },
        760: {
          slidesPerView: 4,
        },
        940: {
          slidesPerView: 5,
        },
        1050: {
          slidesPerView: 6,
        },
      }}
    >
      {books.map((book) => {
        // console.log(book);
        return (
          <SwiperSlide width={"auto"} key={book.book.id}>
            <img
              src={book.book.photo}
              alt={book.book.title}
              onClick={() => handleImageClick(book.book.id)}
            />
            {/* {book.book.title} */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const SwiperPaginationDynamic = ({ books }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {books.map((book) => {
          // console.log(book);
          return (
            <SwiperSlide key={book.book.id}>
              <img src={book.book.photo} alt={book.book.title} />
              {/* {book.book.title} */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const SwiperFreemode = ({ books }) => {
  return (
    <>
      <Swiper
        slidesPerView={"3"}
        freeMode={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {books.map((book) => {
          // console.log(book);
          return (
            <SwiperSlide key={book.book.id}>
              <img src={book.book.photo} alt={book.book.title} />
              {/* {book.book.title} */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
