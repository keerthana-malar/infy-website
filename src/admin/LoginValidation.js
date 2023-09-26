function Validation(values) {
  let error = {};

  if (values.username === "") {
    error.username = `Username Should not be empty`;
  } else {
    error.username = "";
  }

  if (values.password === "") {
    error.password = `Password Should not be empty`;
  } else {
    error.password = "";
  }

  return error;
}

export default Validation;
