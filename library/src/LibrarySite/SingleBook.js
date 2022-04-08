import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import LoadingElement from "./LoadingElement";

const url_bookid = "http://127.0.0.1:8000/books/";

const SingleBook = () => {
  const [dataBook, setdataBook] = useState({});
  const [isdataBook, setIsdataBook] = useState(false);

  // console.log(value);

  const { bookId } = useParams();

  const getBookData = async () => {
    const response = await fetch(url_bookid + bookId);
    const book_data = await response.json();
    // setdataCat(staticDataCat);
    console.log(book_data);
    setdataBook(book_data);
    setIsdataBook(true);
  };

  useEffect(() => {
    getBookData();
  }, [bookId]);

  return (
    <div className="singleBookPage">
      {isdataBook ? <BookDetail data={dataBook} /> : <LoadingElement />}
    </div>
  );
};

export default SingleBook;

const BookDetail = ({ data }) => {
  return (
    <div className="bookView">
      <img src={data.photo} alt="" />
      <div className="textInfo">
        <p>publicado em: {data.publish_date} </p>
        <h2>{data.title}</h2>
        <h4>{data.subtitle}</h4>
        <h3>{data.author.name}</h3>
      </div>
    </div>
  );
};
