import src_image from "./img/moonAndBack.jpg";

// CSS out of .js
import "./03miniBook.css";

const json_title = "I Love You to the Moon and Back";
const json_author = "Amelia Hepworth";
let x = 5;

/* you can set up objects with the variables and
send the variables into the calling line and have
multiple different objects for different books
for api we will prob use a list of objects and a for function*/

export default function BookList() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className="book">
            <Image image={src_image}></Image>
            <Title title={json_title} />
            <Author name={json_author} age={44} />
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
        >
            {props.name.toUpperCase()}, {props.age}
            {/*we set up a variable THAT MUST RETURN A VALUE with the {} 
            we can use javascript funcions and methods inside html that way*/}
            {/* {x + 6} */}
            {/* {let x = 5} error */}
        </h4>
    );
};

/* 
first {} to acess javascript inside html
second {} to write css using javascript
you change - to camelCaseWords
all values must be in ""
inLineCSS > .css file when rendering
*/

const Image = (props) => {
    return (
        <img src={props.image} alt="moon and back cover" className="image" />
    );
    // even the img tag needs to be closed off
};
