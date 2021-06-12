export function validate(values) {
  let errors = {};
  let { userName } = values;
  if (!userName) {
    errors.userName = " userName is Required";
  } else if (userName.length < 3)
    errors.userName = "user Name must be 3 characters or more";

  return errors;
}
