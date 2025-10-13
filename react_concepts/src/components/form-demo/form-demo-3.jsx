import { useFormik } from "formik";
export default function FormikValidation() {
  function validateUser(user) {
    console.log("Validation", user);
    var errors = { UserName: "", Age: "", Mobile: "", City: "", Gender: "" };

    if (user.UserName.length === 0) {
      errors.UserName = "User Name required";
    } else {
      if (user.UserName.length < 4) {
        errors.UserName = "Name too short";
      } else {
        errors.UserName = "";
      }
    }

    if (user.Mobile.length === 0) {
      errors.Mobile = "Mobile number required";
    } else {
      if (user.Mobile.match(/\+91\d{10}/)) {
        errors.Mobile = "";
      } else {
        errors.Mobile = "Invalid Mobile number";
      }
    }

    if (isNaN(user.Age)) {
      errors.Age = "age must be a number";
    } else {
      errors.Age = "";
    }

    if (user.City === "-1") {
      errors.City = "Please select your city";
    } else {
      errors.City = "";
    }

    if (user.Gender === "") {
      errors.Gender = "pleae select a gender";
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

    onSubmit: (values) => {
      console.log(values);
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

          <dt>Gender </dt>
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
