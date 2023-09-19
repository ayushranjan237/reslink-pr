import { Autocomplete, TextField } from "@mui/material";
import "./WelcomeBackHeaderSectionContai.css";

const WelcomeBackHeaderSectionContai = () => {
  return (
    <div className="header-section">
      <div className="container">
        <Autocomplete
          disablePortal
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              color="primary"
              label="Welcome back, Olivia"
              variant="outlined"
              placeholder=""
              helperText=""
            />
          )}
          defaultValue="Track, manage researchers and submissions."
        />
      </div>
    </div>
  );
};

export default WelcomeBackHeaderSectionContai;
