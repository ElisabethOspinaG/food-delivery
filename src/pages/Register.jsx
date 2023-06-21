import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { actionRegisterAsync } from '../redux/actions/actions';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  birthdate: yup.date().required('Birthdate is required'),
});

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(actionRegisterAsync(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" {...register('name')} />
        {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email')} />
        {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" {...register('phone')} />
        {errors.phone && <Form.Text className="text-danger">{errors.phone.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBirthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="date" placeholder="Enter birthdate" {...register('birthdate')} />
        {errors.birthdate && <Form.Text className="text-danger">{errors.birthdate.message}</Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>);
};

export default Register;
