import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const useForm = (validate) => { // validating the form and settign or unsetting errors
  const [values, setValues] = useState({ // setting email
    email: "",
  });
  const history = useHistory();
  const [errors, setErrors] = useState({}); // setting errors
  const [isSubmitting, setIsSubmitting] = useState(false); // checking if form is submitted 

  const handleChange = (e) => { //handling change in text areas
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => { // handling submit of form
    e.preventDefault();

    setErrors(validate(values)); // setting errors
    setIsSubmitting(true); // setting if the form is submitted
  };

  useEffect(() => { // using useEffect
    if (Object.keys(errors).length === 0 && isSubmitting) { // if there are no errors and the form is submitted

        axios.post("/user/email-send",{emailId:values.email}); //sending otp to email

        
        history.push('/getotp') // going to otp page
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
