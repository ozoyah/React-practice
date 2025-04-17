import React from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { withZodSchema } from "formik-validator-zod";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const schema = z.object({
    firstName: z.string.firstName.nonempty({ message: "Enter first Name" }),
    lastName: z.string.lastName.nonempty({ message: "Enter Last Name" }),
    email: z.string().email.nonempty({ message: "Invalid email" }),
    password: z.string.password
      .min(5, { message: "must be 5 characters or longer" })
      .nonempty({ message: "Enter password" }),
  });
  return (
    <div>
      <h1>Signup Here</h1>
      <form validate={withZodSchema(schema)} onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={formik.handleChange}
          value={formik.values.email}
        ></input>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="john"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        ></input>

        <label htmlFor="firstName">First Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Oseni"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Oseni"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
