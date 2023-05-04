
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./Login.css";
import {

    FaUserLock,
  
  } from "react-icons/fa";
  


function ForgotPassword() {
//   const navigate = useNavigate;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "* Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="formDiv">
      <form onSubmit={formik.handleSubmit} className="formmain">
        <div className="img--logo">
        <FaUserLock size={50} />
          </div>
        <span className="headingtag">Reset Password</span>

        <label htmlFor="email"></label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="e.g johndoe@gmail.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="errors">{formik.errors.email}</div>
        ) : null}
   
     
        <button type="submit" className="btn">
          Request
        </button>
        <p className="signup">
          Remembered password? {" "}
          <Link
            className="linked"
            style={{ textDecoration: "none", color: "#87Ceeb" }}
            to="/login"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}

export default ForgotPassword;