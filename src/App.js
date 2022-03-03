import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Character from "./pages/character/Character";
import Location from "./pages/location/Location";
import Episode from "./pages/episode/Episode";
import CharacterInfo from "./pages/characterInfo/CharacterInfo";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/character/:id" element={<CharacterInfo />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/episodes" element={<Episode />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
