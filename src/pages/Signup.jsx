import React from "react";
import { Formik, useFormik } from "formik";
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

    withZodSchema: z.object({
      email: z.string().email(),
      firstName: z.string().nonempty({ message: "Enter your first name" }),
      lastName: z.string().nonempty({ message: "Enter your first name" }),
      password: z.string().min(8, { message: "Password must be at least" }),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Signup Here</h1>
      <form onSubmit={formik.handleSubmit}>
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
