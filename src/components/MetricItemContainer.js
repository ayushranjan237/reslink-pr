import "./MetricItemContainer.css";

const MetricItemContainer = ({ projectNumber, listIcon, imageIconUrl }) => {
  return (
    <div className="metric-item">
      <div className="number-and-chart-parent">
        <div className="number-and-chart">
          <div className="number-and-badge">
            <div className="number">{projectNumber}</div>
          </div>
        </div>
        <div className="heading-and-dropdown">
          <div className="heading">{listIcon}</div>
        </div>
      </div>
      <img className="metric-item-child" alt="" src={imageIconUrl} />
    </div>
  );
};

export default MetricItemContainer;
