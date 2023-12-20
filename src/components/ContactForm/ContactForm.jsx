// import { Formik, Field, Form } from 'formik';
import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Label, Btn, Err } from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().min(2, 'Too Short!').required('Required'),
});

const ContacForm = ({ addCont }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        addCont(values);
        actions.resetForm();
      }}
    >
      <Container>
        <Label htmlFor="name">Name</Label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component={Err} />

        <Label htmlFor="number">Number</Label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component={Err} />

        <Btn type="submit">Add contact</Btn>
      </Container>
    </Formik>
  );
};

export default ContacForm;
