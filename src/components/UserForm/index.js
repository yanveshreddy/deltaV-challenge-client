import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ApiSevice from "../../services/ApiSevice";
import { validate } from "./validate";
import "./index.css";

const UserForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // setErrors(validate(values));
    if (Object.keys(errors).length === 0 && isSubmitting) {
      registerUser(values);
    }
  }, [errors]);

  let registerUser = async (values) => {
    let data = { ...values, parentId: null };
    console.log(data);
    let response = await ApiSevice.postTreeFormData(data);
    setIsSubmitting(false);
  };

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            name="userName"
            placeholder="Enter Name"
            variant="outlined"
            onChange={handleChange}
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
};

export default UserForm;
