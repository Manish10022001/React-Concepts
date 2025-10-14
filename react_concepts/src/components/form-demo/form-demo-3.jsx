import { useFormik } from "formik";

export default function FormikValidation() {
  function validateUser(formData) {
    console.log(formData); // Keep the log here temporarily for debugging purposes
    const errors = { UserName: "", Age: "", Mobile: "", City: "", Gender: "" };

    if (formData.UserName.length === 0) {
      errors.UserName = "User Name required";
    } else {
      if (formData.UserName.length < 4) {
        errors.UserName = "Name too short";
      } else {
        errors.UserName = "";
      }
    }

    if (formData.Mobile.length === 0) {
      errors.Mobile = "Mobile number required";
    } else {
      if (formData.Mobile.match(/\+91\d{10}/)) {
        errors.Mobile = "";
      } else {
        errors.Mobile = "Invalid Mobile number";
      }
    }

    if (isNaN(formData.Age)) {
      errors.Age = "age must be a number";
    } else {
      errors.Age = "";
    }

    if (formData.City === "-1") {
      errors.City = "Please select your city";
    } else {
      errors.City = "";
    }

    if (formData.Gender === "") {
      errors.Gender = "Please select a gender";
    } else {
      errors.Gender = "";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: 0,
      City: "",
      Gender: "",
      Mobile: "",
    },
    validate: validateUser,

    onSubmit: (user) => {
      console.log(user); // Log user data when the form is successfully submitted
    },
  });

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h3>Register</h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" name="UserName" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.UserName}</dd>
          <dt>Age</dt>
          <dd>
            <input type="number" name="Age" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Age}</dd>

          <dt>Mobile</dt>
          <dd>
            <input type="text" name="Mobile" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Mobile}</dd>

          <dt>City</dt>
          <dd>
            <select onChange={formik.handleChange} name="City">
              <option value="-1">Select city</option>
              <option value="Akola">Akola</option>
              <option value="Pune">Pune</option>
              <option value="Delhi">Delhi</option>
            </select>
          </dd>
          <dd className="text-danger">{formik.errors.City}</dd>

          <dt>Gender</dt>
          <dd>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="Gender"
              value="Male"
            />
            <label>Male</label>
            <input
              onChange={formik.handleChange}
              type="radio"
              name="Gender"
              value="Female"
            />
            <label>Female</label>
          </dd>
          <dd className="text-danger">{formik.errors.Gender}</dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
