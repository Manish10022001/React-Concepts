import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function FormikComponents() {
  return (
    <div className="container-fluid">
      <h2>Register</h2>
      <Formik
        initialValues={{ UserName: "", Age: "", Mobile: "" }}
        validationSchema={yup.object({
          UserName: yup.string().required("Name is required"),
          Age: yup.number().required("Age is required"),
          Mobile: yup.string().required("Mobile number is required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <dl>
            <dt>UserName</dt>
            <dd>
              <Field name="UserName" type="text" />
            </dd>
            <dd className="text-danger">
              <ErrorMessage name="UserName" />
            </dd>

            <dt>Age</dt>
            <dd>
              <Field name="Age" type="number" />
            </dd>
            <dd className="text-danger">
              <ErrorMessage name="Age" />
            </dd>

            <dt>Mobile</dt>
            <dd>
              <Field name="Mobile" type="text" />
            </dd>
            <dd className="text-danger">
              <ErrorMessage name={"Mobile"} />
            </dd>
          </dl>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
