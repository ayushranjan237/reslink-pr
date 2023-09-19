import LOGOIcon from "../components/LOGOIcon";
import "./Frame.css";

const Frame = () => {
  return (
    <div className="div">
      <div className="child" />
      <div className="item" />
      <div className="inner" />
      <h1 className="poppins">Poppins</h1>
      <div className="font-family">{`Font Family : `}</div>
      <LOGOIcon />
    </div>
  );
};

export default Frame;
