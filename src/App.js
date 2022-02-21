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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/characters" element={<Character />}/>
        <Route path="/locations" element={<Location/>}/>
        <Route path="/episodes" element={<Episode />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
