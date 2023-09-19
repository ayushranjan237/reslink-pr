import { Autocomplete, TextField } from "@mui/material";
import "./RecentActivitiesCard.css";

const RecentActivitiesCard = () => {
  return (
    <div className="metric-item2">
      <h3 className="heading2">Recent Activities</h3>
      <div className="metric-item-inner" />
      <div className="frame-group">
        <div className="ellipse-parent">
          <div className="frame-child" />
          <div className="interview-is-scheduled">
            Interview is scheduled for 12PM
          </div>
          <div className="pm-wrapper">
            <Autocomplete
              className="pm"
              sx={{ width: 106 }}
              disablePortal
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="6:29PM"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
            />
          </div>
        </div>
        <div className="ellipse-parent">
          <div className="frame-item" />
          <div className="interview-is-scheduled">
            Applicant applied on Technical researcher
          </div>
          <div className="pm-container">
            <div className="pm1">8:21PM</div>
          </div>
        </div>
        <div className="ellipse-parent">
          <div className="frame-inner" />
          <div className="interview-is-scheduled">Interview is cancelled</div>
          <div className="pm-wrapper">
            <Autocomplete
              className="pm"
              sx={{ width: 106 }}
              disablePortal
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="7:10PM"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
            />
          </div>
        </div>
        <div className="ellipse-parent">
          <div className="frame-item" />
          <div className="interview-is-scheduled">
            Applicant applied on Technical researcher
          </div>
          <div className="pm-wrapper">
            <Autocomplete
              className="pm"
              sx={{ width: 106 }}
              disablePortal
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="6:29PM"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
            />
          </div>
        </div>
        <div className="ellipse-parent">
          <div className="frame-child1" />
          <div className="interview-is-scheduled">Recieved Proposal</div>
          <div className="pm-container">
            <div className="pm1">6:29PM</div>
          </div>
        </div>
        <div className="ellipse-parent">
          <div className="frame-child" />
          <div className="interview-is-scheduled">
            Interview is scheduled for 12PM
          </div>
          <div className="pm-container">
            <div className="pm1">6:29PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivitiesCard;
