import * as Yup from 'yup';

export const signInSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export const signUpSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

export type signInType = Yup.InferType<typeof signInSchema>;
export type signUpType = Yup.InferType<typeof signUpSchema>;
