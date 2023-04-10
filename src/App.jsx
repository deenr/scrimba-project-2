import "./App.css";
import Journal from "./components/Journal";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const journals = data.map((journal) => (
    <Journal key={journal.id} {...journal} />
  ));
  return (
    <div className="App">
      <Navbar />
      {journals}
    </div>
  );
}

export default App;
