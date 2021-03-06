import React, { useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import Router from 'next/router';

import AuthNav from '@components/auth/nav';
import Input from '@components/input';
import Button from '@components/button';
import { Main, AuthContent } from '@styles/AuthPage.styles';
import { signUpSchema } from '@schemas/auth';
import authService from '@services/auth/auth.service';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <AuthNav message="Already a member?" title="Sign in" link="/signin" />
      <Main>
        <AuthContent>
          <h2>Sign up to Dashboard</h2>
          <Formik
            initialValues={{
              email: '',
              confirmPassword: '',
              password: '',
            }}
            validationSchema={signUpSchema}
            onSubmit={async (values, actions) => {
              try {
                await setLoading(true);
                await authService.signUp(values);
                setLoading(false);
                Router.push('/signin');
              } catch (e) {
                actions.setFieldError('general', e.response.data.message);
                setLoading(false);
              }
              actions.setSubmitting(false);
            }}>
            {(formikProps: FormikProps<any>) => (
              <Form>
                <p style={{ color: 'red', marginBottom: 5 }}>
                  {formikProps.errors.general}
                </p>
                <Input name="email" label="Email Address" />
                <Input name="password" label="Password" type="password" />
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
                <Button loading={loading} name="danger" type="submit">
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </AuthContent>
      </Main>
    </>
  );
};

export default SignUp;
