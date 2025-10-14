import { useFormik } from "formik";
import * as yup from "yup";
export default function FormikSpreadApproach() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: 0,
      Mobile: "",
      City: "",
      Gender: "",
    },
    validationSchema: yup.object({
      UserName: yup
        .string()
        .required("User Name required")
        .min(4, "Name too short"),
      Age: yup
        .number()
        .required("Age required")
        .min(15, "Age minimum 15")
        .max(50, "Age maximum 50"),
      Mobile: yup
        .string()
        .required("Mobile number required")
        .matches(/\+91\d{10}/, "Invalid Mobile"),
    }),
    onSubmit: (user) => {
      console.log(user);
    },
  });

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h3>Register</h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              name="UserName"
              {...formik.getFieldProps("UserName")}
            />
          </dd>
          <dd className="text-danger">{formik.errors.UserName}</dd>
          <dt>Age</dt>
          <dd>
            <input type="number" name="Age" {...formik.getFieldProps("Age")} />
          </dd>
          <dd className="text-danger">{formik.errors.Age}</dd>

          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              {...formik.getFieldProps("Mobile")}
            />
          </dd>
          <dd className="text-danger">{formik.errors.Mobile}</dd>

          <dt>City</dt>
          <dd>
            <select name="City" {...formik.getFieldProps("City")}>
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
              {...formik.getFieldProps("Gender")}
              type="radio"
              name="Gender"
              value="Male"
            />
            <label>Male</label>
            <input
              {...formik.getFieldProps("Gender")}
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
