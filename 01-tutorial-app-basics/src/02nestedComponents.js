export default function Nested() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
    return <p>this is my message</p>;
};
