//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import ContentComponent from "./components/ContentComponent";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { MapDemo6 } from "./components/MapDemo6";
import { MapDemo7 } from "./components/MapDemo7";
import { MapDemo8 } from "./components/MapDemo8";
import { MapDemo9 } from "./components/MapDemo9";
import { MapDemo10 } from "./components/MapDemo10";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { NetflixAnime } from "./components/NetflixAnime";
import { NetflixOriginal } from "./components/NetflixOriginal";
import { NetflixThriller } from "./components/NetflixThriller";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <HeaderComponent></HeaderComponent> */}
      {/* <MapDemo1></MapDemo1> */}
      {/* <MapDemo2></MapDemo2> */}
      {/* <MapDemo3></MapDemo3> */}
      {/* <MapDemo4></MapDemo4> */}
      {/* <MapDemo5></MapDemo5> */}
      {/* <MapDemo6></MapDemo6> */}
      {/* <MapDemo7></MapDemo7> */}
      {/* <MapDemo8></MapDemo8> */}
      {/* <MapDemo9></MapDemo9> */}
      {/* <MapDemo10></MapDemo10> */}
      {/* <ContentComponent></ContentComponent> */}
      {/* <PortfolioComponent></PortfolioComponent> */}
      {/* <FooterComponent></FooterComponent> */}
      <Routes>
        <Route path="netflixhome" element={<NetflixHome></NetflixHome>}></Route>
        <Route path="netflixmovies" element = {<NetflixMovies/>}></Route>
        <Route path="netflixshows" element = {<NetflixShows></NetflixShows>}></Route>
        <Route path="netflixanime" element = {<NetflixAnime></NetflixAnime>}></Route>
        <Route path="netflixoriginal" element = {<NetflixOriginal></NetflixOriginal>}></Route>
        <Route path="netflixthriller" element = {<NetflixThriller></NetflixThriller>}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
