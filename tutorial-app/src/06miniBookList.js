// CSS out of .js
import "./06miniBookList.css";
import { books } from "./06books";
// ! name in {} must match the export function name if not "export default"
// * only one export default per file

// const names = ["john", "peter", "susan"]; //arrays are const?
/* .map() access each element.
elementName =>{return} */
// const newNames = names.map((name) => {
//     return <h1>{name}</h1>;
// });
// todo: something to do
// ! THIS IS AN ERROR
// ? question!!!!
// // console.log("hello yarn")
// *something somewhat important

export default function BookList() {
  /* first {} to access javascript inside html
    second {} to write css using javascript
    you change - to camelCaseWords
    all values must be in ""
    inLineCSS > .css file when rendering */
  return (
    <section className="booklist" style={{ alignItems: "flex-start" }}>
      {/* makes the the bottom of the grid self align */}
      {/* {newNames} */}
      {books.map((book) => {
        // const { img, alt, title, author, children } = book;
        return <Book key={book.id} {...book} />;
        // this is how react knows which is the key
        // .. is a SPREAD OPERATOR
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, alt, title, author } = props; // names must match with the object
  // console.log(img);
  // const { img, title, author } = props; //deconstructing
  // * attribute, eventHandler {onclick & onmouseover}

  const clickHandler = (e) => {
    // alert("hello world");
    console.log(e);
    console.log(e.nativeEvent.altitudeAngle);
    console.log(e.target);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <Image image={img} alt={alt}></Image>
      <Title title={title} />
      <Author name={author} />
      <button type="button" onClick={clickHandler}>
        reference Example
      </button>
    </article>
  );
};

/* the name on the props.name is given when passing the argument 
since props is AN OBJECT
it may have any number of arguments, all given by the invoking line when passing the arguments*/
const Title = (props) => {
  return <h1>{props.title}</h1>;
};

const Author = (props) => {
  return (
    <h4
      style={{
        color: "#617d98",
        fontSize: "0.75rem",
        marginTop: "0.25rem",
      }}
      onClick={() => console.log(`clicked ${props.name}`)}
    >
      {props.name.toUpperCase()}
    </h4>
  );
};

const Image = (props) => {
  return <img src={props.image} alt={props.alt} className="image" />;
  // even the img tag needs to be closed off
};
