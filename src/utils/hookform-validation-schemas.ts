import * as yup from "yup";

/**
 * Email schema, max 50 char, required, checks for valid email.
 */
export const emailSchema = yup
  .string()
  .email("Enter a valid email")
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email")
  .transform((curr, orig) => (orig === null ? "" : curr))
  .required("Required")
  .max(50, "Email can be a maximum of 50 characters");

/**
 *
 * Password validation,
 * checks for min 8, max 25 characters, blanks, one num, one upper case
 * one lower case and a special character.
 *
 */
export const passwordvalidation = yup
  .string()
  .trim()
  .required("Required")
  .transform((curr, orig) => (orig === null ? "" : curr))
  .test("password check", ``, function (value) {
    const message = [];
    if (value) {
      if (value.length < 8) {
        message.push("Should be greater than 8 characters");
      }
      if (value.length > 25) {
        message.push("Should be less than 25 characters");
      }
      if (value.match(/(\s)/g)) {
        message.push("Blank spaces are not allowed");
      }
      if (!value.match(/[0-9]/g)) {
        message.push("Should contain atleast one number");
      }
      if (!value.match(/[A-Z]/g)) {
        message.push("Should contain atleast an uppercase letter");
      }
      if (!value.match(/[a-z]/g)) {
        message.push("Should contain atleast a lowercase letter");
      }
      if (!value.match(/[!@#$%^&*]/g)) {
        message.push("Should contain atleast one special character");
      }
    } else {
      return true;
    }
    if (message.length > 0) {
      return this.createError({ message: message.toString() });
    } else {
      return true;
    }
  });

/**
 *
 * Form validation schema for add todo dialog
 *
 */
export const addTodoFormSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string().required("Required"),
});
