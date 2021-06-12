import React, { Component } from "react";
import ApiSevice from "../../services/ApiSevice";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

class UserParentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
      dropdownData: {},
    };
  }

  componentDidMount() {
    this.getParentData();
  }
  async getParentData() {
    try {
      let response = await ApiSevice.getParentData();
      // console.log("server fasting response" + JSON.stringify(response.data));
      this.setState({ dropdownData: response.data });
    } catch (error) {}
  }
  handleChange = (event) => {
    event.persist();
    console.log(event.target);
    console.log(event.target.name);
    this.setState((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    // setValues((values) => ({
    //   ...values,
    //   [event.target.name]: event.target.value,
    // }));
  };
  handleSubmit = async (event) => {
    if (event) event.preventDefault();
    const values = this.state.values;

    let data = { ...values };
    console.log(data);
    let response = await ApiSevice.postTreeFormData(data);
  };
  render() {
    let { dropdownData } = this.state;
    // console.log(dropdownData);
    // const dropDownDummyData = [
    //   { id: 1, name: "anvesh", parentId: null },
    //   { id: 1, name: "anveshry", parentId: 1 },
    // ];
    return (
      <div>
        <h1>User with Parent Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Autocomplete
              id="combo-box-demo"
              options={dropdownData}
              getOptionLabel={(option) => option.name}
              name="parentId"
              style={{ width: 300 }}
              onChange={this.handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose Parent"
                  variant="outlined"
                />
              )}
            />
          </div>

          <div style={{ marginTop: "24px" }}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              name="userName"
              placeholder="Enter Name"
              variant="outlined"
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>
          <div style={{ marginTop: "24px" }}>
            <Button
              type="submit"
              className="button"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserParentForm;
