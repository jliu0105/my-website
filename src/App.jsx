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
import flashyEtailingWebsite from "./pages/projectsInfo/flashyEtailingWebsite";
import jmooc from "./pages/projectsInfo/JMOOC";
import MovieRecommendSystem from "./pages/projectsInfo/movieRecommendSystem";
import fraudDetector from "./pages/projectsInfo/fraudDetector";
import stockPricePredictor from "./pages/projectsInfo/stockPricePredictor";
import catDogDetector from "./pages/projectsInfo/catDogDetector";
import bankCustomerChurnPredictor from "./pages/projectsInfo/bankCustomerChurnPredictor";
import customerClassifier from "./pages/projectsInfo/customerClassifier";
import salaryPredictor from "./pages/projectsInfo/salaryPredictor";
import momentoOS from "./pages/projectsInfo/momentoOS";
import compilerX from "./pages/projectsInfo/compilerX";


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
import Ece358 from "./pages/educationInfo/ece358";
import Ece351 from "./pages/educationInfo/ece351";
import Ece356 from "./pages/educationInfo/ece356";
import Ece350 from "./pages/educationInfo/ece350";
import Ece252 from "./pages/educationInfo/ece252";
import Ece327 from "./pages/educationInfo/ece327";

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
          <Route exact path="/projects/flashyEtailingWebsite" component={flashyEtailingWebsite}></Route>
          <Route exact path="/projects/jmooc" component={jmooc}></Route>
          <Route exact path="/projects/movieRecommendSystem" component={MovieRecommendSystem}></Route>
          <Route exact path="/projects/fraudDetector" component={fraudDetector}></Route>
          <Route exact path="/projects/stockPricePredictor" component={stockPricePredictor}></Route>
          <Route exact path="/projects/catDogDetector" component={catDogDetector}></Route>
          <Route exact path="/projects/bankCustomerChurnPredictor" component={bankCustomerChurnPredictor}></Route>
          <Route exact path="/projects/customerClassifier" component={customerClassifier}></Route>
          <Route exact path="/projects/salaryPredictor" component={salaryPredictor}></Route>
          <Route exact path="/projects/momentoOS" component={momentoOS}></Route>
          <Route exact path="/projects/compilerX" component={compilerX}></Route>
          


          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/education/ece150" component={Ece150}></Route>
          <Route exact path="/education/math115" component={Math115}></Route>
          <Route exact path="/education/math117" component={Math117}></Route>
          <Route exact path="/education/ece124" component={Ece124}></Route>
          <Route exact path="/education/ece140" component={Ece140}></Route>
          <Route exact path="/education/ece108" component={Ece108}></Route>

          <Route exact path="/education/ece222" component={Ece222}></Route>
          <Route exact path="/education/ece358" component={Ece358}></Route>
          <Route exact path="/education/ece351" component={Ece351}></Route>
          <Route exact path="/education/ece356" component={Ece356}></Route>
          <Route exact path="/education/ece350" component={Ece350}></Route>
          <Route exact path="/education/ece252" component={Ece252}></Route>
          <Route exact path="/education/ece327" component={Ece327}></Route>
          <Route exact path="/education/machineLearningAndrewNg" component={MachineLearningAndrewNg}></Route>
          <Route exact path="/education/deepLearningAndrewNg" component={DeepLearningAndrewNg}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
