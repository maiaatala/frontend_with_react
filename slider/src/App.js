import logo from "./logo.svg"
import Review from "./project"

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline" />
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App
