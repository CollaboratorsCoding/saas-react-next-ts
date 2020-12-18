import React, { useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { observer, inject } from 'mobx-react';
import Router from 'next/router';

import AuthNav from '@components/auth/nav';
import Input from '@components/input';
import Button from '@components/button';
import { Main, AuthContent } from '@styles/AuthPage.styles';
import { signInSchema } from '@schemas/auth';
import { IUserStore, IUserMe } from '@interfaces/store/user/';

interface Props {
  userStore: IUserStore<IUserMe>;
}

const SignIn = ({ userStore }: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <AuthNav message="Not a member?" title="Sign Up Now" link="/signup" />
      <Main>
        <AuthContent>
          <h2>Sign in to Dashboard</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={signInSchema}
            onSubmit={async (values, actions) => {
              await setLoading(true);
              await userStore.signIn(values);
              setLoading(false);
              if (userStore.error) {
                actions.setFieldError('general', userStore.error);
              }
              if (userStore.me) {
                Router.push('/');
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
                <Button name="danger" loading={loading} type="submit">
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
        </AuthContent>
      </Main>
    </>
  );
};

export default inject('userStore')(observer(SignIn));
