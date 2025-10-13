import { useFormik } from "formik";
export default function FormDemo() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: 0,
      City: "",
    },
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
            <input type="text" name="UserName" onChange={formik.handleChange} />
          </dd>
          <dt>Age</dt>
          <dd>
            <input type="number" name="Age" onChange={formik.handleChange} />
          </dd>
          <dt>City</dt>
          <dd>
            <select onChange={formik.handleChange} name="City">
              <option>Akola</option>
              <option>Pune</option>
              <option>Delhi</option>
            </select>
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
