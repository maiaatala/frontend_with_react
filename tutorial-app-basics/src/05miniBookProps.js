// CSS out of .js
import "./03miniBook.css";

const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
};

const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/81-V7skoi6L.jpg",
    title: "Food IQ: 100 Questions, Answers, and Recipes to Raise Your Cooking Smarts",
    author: "Daniel Holzman",
};

/* you can set up objects with the variables and
send the variables into the calling line and have
multiple different objects for different books
for api we will prob use a list of objects and a for function*/

export default function BookList() {
    return (
        <section className="booklist" style={{ alignItems: "flex-start" }}>
            {/* makes the the bottom of the grid self aling */}
            <Book
                img={secondBook.img}
                title={secondBook.title}
                author={secondBook.author}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore aut ullam modi deleniti cupiditate voluptates
                    accusantium quo officia ipsa quae?
                </p>
            </Book>
            <Book
                img={firstBook.img}
                title={firstBook.title}
                author={firstBook.author}
            />
        </section>
    );
}

const Book = ({ img, title, author, children }) => {
    // CHILDREN NAME MATTERS
    // const { img, title, author } = props; //descontructing
    return (
        <article className="book">
            <Image image={img}></Image>
            <Title title={title} />
            <Author name={author} />
            {children}
            {/* {props.children} */}
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
            {props.name.toUpperCase()}
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
