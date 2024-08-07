import Header from "./components/Header";
import Banner from "./components/Banner"
import Skillcontainer from "./components/Skillcontainer/Skillcontainer";
import Projectcontainer from "./components/Projectcontainer/Projectcontainer";
import Experiencecontainer from "./components/Experiencecontainer/Experiencecontainer";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
       <div className="banner">
       <Header/>
       <Banner/>
       </div>
       <Skillcontainer/>
       {/* <Projectcontainer/> */}
       <Experiencecontainer/>
       <Work/>
       <Contact/>
    </div>
  );
}

export default App;
