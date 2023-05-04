
import { useFormik } from "formik";
// import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import {

    FaUserLock,
  
  } from "react-icons/fa";
  


function Login() {
 // const navigate = useNavigate;

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
        <span className="headingtag">Login</span>

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
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
     
          <Link className="forgot" to='/reset'>
          Forgot Password?</Link>
       
        <button type="submit" className="btn">
          Login
        </button>
        <p className="signup">
          Dont have an account?{" "}
          <Link
            className="linked"
            style={{ textDecoration: "none", color: "#87Ceeb" }}
            to="/register"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;