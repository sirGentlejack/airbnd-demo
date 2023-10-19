import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./Data"


function App() {
  const cards = Data.map((item) => {
    return (
      <Card
        // img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
