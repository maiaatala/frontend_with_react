import image from "./img/moonAndBack.jpg";

// CSS out of .js
import "./03miniBook.css";

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
            <Image></Image>
            <Title />
            <Author />
        </article>
    );
};

const Title = () => {
    return <h1>I Love You to the Moon and Back</h1>;
};
const Author = () => {
    return <h4>Amelia Hepworth</h4>;
};
const Image = () => {
    return <img src={image} alt="moon and back cover" className="image" />;
    // even the img tag needs to be closed off
};
