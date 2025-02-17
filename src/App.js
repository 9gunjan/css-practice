//import ToggleCircles from "./components/ToggleCircles";

import OverlappingCircles from "./components/OverlappingCircles/OverlappingCircles";
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* <ToggleCircles /> */}
      <OverlappingCircles numCircles={5}/>
    </div>
  );
}

export default App;
