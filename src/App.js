import "./App.css";
import IotAbout from "./Services/IotAbout";
import IotActivities from "./Services/IotActivities";
import IotBanner from "./Services/IotBanner";
import IotOurService from "./Services/IotOurService";
import IotOverlay from "./Services/IotOverlay";
import IotProjects from "./Services/IotProjects";
import IotService from "./Services/IotService";

function App() {
  return (
    <div className="App">
      <IotBanner />
      <IotOverlay />
      <IotAbout />
      <IotService />
      <IotProjects />
      <IotActivities />
      <IotOurService />
    </div>
  );
}

export default App;
