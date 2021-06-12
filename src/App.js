import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import UserForm from "./components/UserForm";
import UserParentForm from "./components/UserParentForm";

function App() {
  const [isGrandParent, setIsGrandParent] = useState(true);

  const toggleChecked = () => {
    setIsGrandParent((prev) => !prev);
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <FormGroup className="toggle-switch">
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={isGrandParent}
                    onChange={toggleChecked}
                  />
                }
                label="IsGrandParent"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            {isGrandParent ? <UserForm /> : <UserParentForm />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
