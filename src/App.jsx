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
import { ErrorNotFound } from "./components/ErrorNotFound";
import { Watch } from "./components/Watch";
import { TeamDetail } from "./components/TeamDetail";
import { Team } from "./components/Team";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { Employees } from "./components/Employees";
import { InputDemo1 } from "./components/Input/InputDemo1";

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
        <Route path="netflixmovies" element={<NetflixMovies />}></Route>
        <Route
          path="netflixshows"
          element={<NetflixShows></NetflixShows>}
        ></Route>
        <Route
          path="netflixanime"
          element={<NetflixAnime></NetflixAnime>}
        ></Route>
        <Route
          path="netflixoriginal"
          element={<NetflixOriginal></NetflixOriginal>}
        ></Route>
        <Route
          path="netflixthriller"
          element={<NetflixThriller></NetflixThriller>}
        ></Route>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/watch/:name" element={<Watch></Watch>}></Route>
        <Route path="/*" element={<ErrorNotFound></ErrorNotFound>}></Route>
        <Route
          path="/teamdetail/:name"
          element={<TeamDetail></TeamDetail>}
        ></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/usestatedemo1" element = {<UseStateDemo1></UseStateDemo1>} />
      <Route path="/usestatedemo2" element = {<UseStateDemo2></UseStateDemo2>} />
      <Route path="/usestatedemo3" element = {<UseStateDemo3></UseStateDemo3>} />
      <Route path="/fundemo1" element = {<FunctionDemo1></FunctionDemo1>} />
      <Route path="/employees" element= {<Employees></Employees>}></Route>
      <Route path="/inputdemo1" element={<InputDemo1></InputDemo1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
