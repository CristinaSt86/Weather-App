import "./Degrees.css";

const Degrees = (props) => {
  console.log(props);
  return (
    <div className="degrees-container">
      {Math.round(props?.degree?.main?.temp)}°C
    </div>
  );
};

export default Degrees;
