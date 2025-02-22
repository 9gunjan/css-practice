//import ToggleCircles from "./components/ToggleCircles";

//import OverlappingCircles from "./components/OverlappingCircles/OverlappingCircles";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import Users from "./components/Users";
import "./index.css";

function App() {
  return (
    <div className="app-container">
    {/* <ToggleCircles /> */}
      {/* <OverlappingCircles numCircles={5}/> */}
      {/* <Users /> */}
      <TrafficLight />
    </div>
  );
}

export default App;
