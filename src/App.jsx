//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import ContentComponent from "./components/ContentComponent";

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      {/* <ContentComponent></ContentComponent> */}
      <PortfolioComponent></PortfolioComponent>
      <FooterComponent></FooterComponent>
      
    </div>
  );
}

export default App;
