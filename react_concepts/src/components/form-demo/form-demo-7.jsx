import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export default function FormikValidationState() {
  return (
    <div className="container">
      <h2>Register</h2>
      <Formik
        initialValues={{ UserName: "", Age: "", Mobile: "" }}
        validationSchema={yup.object({
          UserName: yup.string().required("Name Required"),
          Age: yup.number().required("Age Required"),
          Mobile: yup.string().required("Mobile Number required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(form) => (
          <Form>
            <dl>
              <dt>UserName</dt>
              <dd>
                <Field type="text" name="UserName" />
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

            <button type="submit" disabled={!form.isValid}>
              Submit
            </button>
            <button className={form.dirty ? "d-inline" : "d-none"}>save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
