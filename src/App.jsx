import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import Projects from "./pages/projects";
import ReactTravelWebsite from "./pages/projectsInfo/reactTravelWebsite";
import GithubApp from "./pages/projectsInfo/githubApp";
import PythonSearchEngine from "./pages/projectsInfo/pythonSearchEngine";
import NodeBlog from "./pages/projectsInfo/nodeBlog";
import MineSweeper from "./pages/projectsInfo/mineSweeper";
import HistoryTransaction from "./pages/projectsInfo/historyTransaction";
import ReactThermalGraph from "./pages/projectsInfo/reactThermalGraph";
import arduinoWaterLevelSensor from "./pages/projectsInfo/arduinoWaterLevelSensor";


import AIPaintingStyleDetector from "./pages/projectsInfo/AIPaintingStyleDetector";
import AITranslator from "./pages/projectsInfo/AITranslator";


import VideoPlayerC from "./pages/projectsInfo/videoPlayerC";
import Education from "./pages/education";
import Ece150 from "./pages/educationInfo/ece150";
import Math115 from "./pages/educationInfo/math115";
import Math117 from "./pages/educationInfo/math117";
import Ece124 from "./pages/educationInfo/ece124";
import Ece140 from "./pages/educationInfo/ece140";
import Ece108 from "./pages/educationInfo/ece108";

import Ece222 from "./pages/educationInfo/ece222";
import MachineLearningAndrewNg from "./pages/educationInfo/machineLearningAndrewNg";
import DeepLearningAndrewNg from "./pages/educationInfo/deepLearningAndrewNg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/projects/reactTravelWebsite" component={ReactTravelWebsite}></Route>
          <Route exact path="/projects/githubApp" component={GithubApp}></Route>
          <Route exact path="/projects/pythonSearchEngine" component={PythonSearchEngine}></Route>
          <Route exact path="/projects/NodeBlog" component={NodeBlog}></Route>
          <Route exact path="/projects/mineSweeper" component={MineSweeper}></Route>
          <Route exact path="/projects/historyTransaction" component={HistoryTransaction}></Route>
          <Route exact path="/projects/reactThermalGraph" component={ReactThermalGraph}></Route>
          <Route exact path="/projects/arduinoWaterLevelSensor" component={arduinoWaterLevelSensor}></Route>
          <Route exact path="/projects/videoPlayerC" component={VideoPlayerC}></Route>
          <Route exact path="/projects/AIPantingStyleDetector" component={AIPaintingStyleDetector}></Route>
          <Route exact path="/projects/AITranslator" component={AITranslator}></Route>

          


          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/education/ece150" component={Ece150}></Route>
          <Route exact path="/education/math115" component={Math115}></Route>
          <Route exact path="/education/math117" component={Math117}></Route>
          <Route exact path="/education/ece124" component={Ece124}></Route>
          <Route exact path="/education/ece140" component={Ece140}></Route>
          <Route exact path="/education/ece108" component={Ece108}></Route>

          <Route exact path="/education/ece222" component={Ece222}></Route>
          <Route exact path="/education/machineLearningAndrewNg" component={MachineLearningAndrewNg}></Route>
          <Route exact path="/education/deepLearningAndrewNg" component={DeepLearningAndrewNg}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
