import { Button } from "@mui/material";
import "./MetricItemContainer1.css";

const MetricItemContainer1 = () => {
  return (
    <div className="metric-item1">
      <h3 className="heading1">Posted Projects</h3>
      <div className="text10">{`See All  `}</div>
      <div className="metric-item-item" />
      <div className="frame-parent">
        <Button color="primary" variant="outlined">
          Thermal protective performance and mult
        </Button>
        <Button color="primary" variant="outlined">
          Effect of heat flux and moisture content on the thermal protective
          performance of outer layer of fire pro
        </Button>
        <Button color="primary" variant="outlined">
          Thermal protective performance and mult
        </Button>
        <Button color="primary" variant="outlined">
          Testing and evaluation of functional textiles
        </Button>
        <Button color="primary" variant="outlined">
          Development of thermal liner for Extreme Heat Protective Clothing
        </Button>
        <Button color="primary" variant="outlined">
          Testing and evaluation of functional textiles
        </Button>
      </div>
    </div>
  );
};

export default MetricItemContainer1;
