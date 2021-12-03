import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const [userlist, setuserlist] = useState([]);

  var history = useHistory();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // callback()
      localStorage.setItem("userName", values.email);
      axios.post("/user/getmailid", {
        emailId: values.email,
      });
      axios.get("/user/read").then((response) => {
        // console.log(serl/.password + "  --- " + values.password);
        if (response.data[0].emailId === values.email) {
          if (response.data[0].password == values.password) {
            // window.alert("login sucessful");
            history.push("/main");
          } else {
            window.alert("invalid password");
          }
        }
      });
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
