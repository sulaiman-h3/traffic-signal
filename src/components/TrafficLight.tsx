
import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [lights, setLights] = useState(["red", "yellow", "green"]);
  const [opacityLights, setOpacityLights] = useState(["red", "yellow", "green"]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacityLights((prevLights) => {
        const newLights = [...prevLights];

        const firstLight = newLights.shift();
        newLights.push(firstLight);

        return newLights;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div
          className={`light ${lights[0]} ${
            lights[0] === opacityLights[0] ? "active" : ""
          }`}
        ></div>

        <div
          className={`light ${lights[1]} ${
            lights[1] === opacityLights[0] ? "active" : ""
          }`}
        ></div>

        <div
          className={`light ${lights[2]} ${
            lights[2] === opacityLights[0] ? "active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;

