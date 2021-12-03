import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const useForm = (validate) => {
  const [values, setValues] = useState({ // taking values
    username: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    password2: "",
  });

  var history = useHistory();
  const [errors, setErrors] = useState({}); //setting errors
  const [isSubmitting, setIsSubmitting] = useState(false); // setting if form is submitted

  const handleChange = (e) => { // handling change
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => { // handling submit
    e.preventDefault();

    setErrors(validate(values)); //setting errors
    setIsSubmitting(true);//setting if form is submitted
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) { // if there are no errors and if form is submitted
      // callback()
      localStorage.setItem("userName", values.email); // storing mail in local storage
      axios
        .post("/user/insert", { // inserting a user in database
          username: values.username,
          emailId: values.email,
          phone: values.phone,
          gender: values.gender,
          password: values.password,
        })
        .then((Response) => {
          if (Response.data == "user exists") {
            history.push("/loginpage"); // if user exists then redirect to login page
            alert("Email already exists ");
          } else {
            history.push("/main"); // else goto main page
          }
        });
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
