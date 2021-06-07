import { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

function App() {
  const [content, setTooltipContent] = useState("");
  return (
    <div className="App">      
      <MapChart setTooltipContent={setTooltipContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
