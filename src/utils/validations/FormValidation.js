import * as Yup from 'yup'; // Ensure Yup is imported

const requiredMsg = "This field is required.";
const alphabetsRegex = /^[A-Za-z\s]+$/;

export const bookAppointmentSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(alphabetsRegex, 'Full Name can only contain alphabets and spaces')
    .required(requiredMsg),
  email: Yup.string().email('Invalid email').required(requiredMsg),
  mobile: Yup.string()
    .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
    .min(10, 'Mobile number must be at least 10 digits')
    .max(15, 'Mobile number can be up to 15 digits')
    .required(requiredMsg),
  age: Yup.string()
    .optional(), // Age is optional
  city: Yup.string()
    .optional(), // City is optional
  problem: Yup.array()
    .min(1, 'Please select at least one issue you are facing') // Expecting an array for multi-select
    .required(requiredMsg),
  problem_other: Yup.string().when('problem', (problemValue, schema) => {
    if (problemValue?.includes('Other')) {
      return schema.required('Please specify the problem').min(2, 'Too Short!');
    }
    return schema.notRequired();
  }),
  userMessage: Yup.string()
    .max(1000, 'Message is too long')
    .optional(),
});
