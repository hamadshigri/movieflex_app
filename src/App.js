import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="Main">
      <Header />
      <Slider />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
