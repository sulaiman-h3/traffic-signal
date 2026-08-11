import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [lights, setLights] = useState(["red", "yellow", "green"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLights((prevLights) => {
        const newLights = [...prevLights];

        const firstLight = newLights.shift();
        newLights.push(firstLight);

        return newLights;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={`light ${lights[0]}`}></div>
        <div className={`light ${lights[1]}`}></div>
        <div className={`light ${lights[2]}`}></div>
      </div>
    </div>
  );
};

export default TrafficLight;