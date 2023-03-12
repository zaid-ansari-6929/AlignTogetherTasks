import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login(props) {
  const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  posts: Yup.number()
    .integer("Posts must be a number")
    .required("Posts is required"),
  createdDate: Yup.date().required("Created date is required"),
});

const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setIsSubmitting(true);
    // Submit form data to server
  };
  return (
    <div>
       <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        posts: "",
        createdDate: "",
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}

      
    >
      {( ) => (
        <Form style={{textAlign:"center",padding:'10px'}}>
          <label htmlFor="username">Username</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" />
<br />
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
<br />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
<br />
          <label htmlFor="posts">Posts</label>
          <Field type="number" name="posts" />
          <ErrorMessage name="posts" />
<br />
          <label htmlFor="createdDate">Created Date</label>
          <Field type="date" name="createdDate" />
          <ErrorMessage name="createdDate" />
<br />
          <button type="submit" >
            Submit
          </button>
        </Form>
      )}
    </Formik>
      
    </div>
  );
}

export default Login;
