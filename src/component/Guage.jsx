import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GaugeProvider from "./GaugeProvider";

const Guage = ({ score }) => {
  const calculator = (percent, start, end) => {
    let a = percent / 100;
    let b = (end - start) * a;
    let c = b + start;

    return "hsl(" + c + ",100%,50%)";
  };

  return (
    <GaugeProvider valueStart={0} valueEnd={score}>
      {(value) => (
        <CircularProgressbar
          value={value}
        
          circleRatio={0.5}
          styles={{
            trail: {
              strokeLinecap: "butt",
              transform: "rotate(270deg)",
              transformOrigin: "center center",
            },
            path: {
              strokeLinecap: "butt",
              transform: "rotate(270deg)",
              transformOrigin: "center center",
              stroke: calculator(value, 0, 100),
            
            },
         
          }}
          strokeWidth={10}
        />
      )}
    </GaugeProvider>
  );
};

export default Guage;
