// CSS out of .js
import "./06miniBookList.css";
// lists in react need a key item field
const books = [
    {
        id: 1,
        img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg",
        alt: "I Love You to the Moon and Back cover image",
        title: "I Love You to the Moon and Back",
        author: "Amelia Hepworth",
        desc: "something to add",
    },
    {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/I/81-V7skoi6L.jpg",
        alt: "Food IQ Cover Image",
        title: "Food IQ: 100 Questions, Answers, and Recipes to Raise Your Cooking Smarts",
        author: "Daniel Holzman",
    },
    {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS.jpg",
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk M.D.",
    },
];
// you can simply iterrate string arrays, but iterate objects are not as simple
// const names = ["john", "peter", "susan"]; //arays are const?
/* .map() accesss each element.
elementName =>{return} */
// const newNames = names.map((name) => {
//     return <h1>{name}</h1>;
// });

export default function BookList() {
    /* first {} to acess javascript inside html
    second {} to write css using javascript
    you change - to camelCaseWords
    all values must be in ""
    inLineCSS > .css file when rendering */
    return (
        <section className="booklist" style={{ alignItems: "flex-start" }}>
            {/* makes the the bottom of the grid self aling */}
            {/* {newNames} */}
            {books.map((book) => {
                // const { img, alt, title, author, children } = book;
                return <Book key={book.id} {...book} />;
                // this is how react knows which is the key
                // ... is a SPREAD OPERATOR
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, alt, title, author } = props; // names must match with the object
    // console.log(img);
    // const { img, title, author } = props; //descontructing

    return (
        <article className="book">
            <Image image={img} alt={alt}></Image>
            <Title title={title} />
            <Author name={author} />
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
        </h4>
    );
};

const Image = (props) => {
    return <img src={props.image} alt={props.alt} className="image" />;
    // even the img tag needs to be closed off
};
