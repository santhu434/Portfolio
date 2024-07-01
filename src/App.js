import Header from "./components/Header/Header";
import Topcontainer from "./components/Topcontainer/Topcontainer";
import Skillcontainer from "./components/Skillcontainer/Skillcontainer";
import Projectcontainer from "./components/Projectcontainer/Projectcontainer";
import Experiencecontainer from "./components/Experiencecontainer/Experiencecontainer";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
       <Header/>
       <Topcontainer/>
       <Skillcontainer/>
       {/* <Projectcontainer/> */}
       <Experiencecontainer/>
       <Work/>
       <Contact/>
    </div>
  );
}

export default App;
