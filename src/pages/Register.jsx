import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { registerAccionAsync } from '../redux/actions/userActions';
import { useSelector } from 'react-redux';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Swal from 'sweetalert2';
import AvatarUpload from "../components/AvatarUpload";
import "../style/registerStyle.scss";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    birthdate: yup.date().required('Birthdate is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { error, errorMessage } = useSelector((store) => store.user);

  const onSubmit = async (data) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: avatar, // Use the avatar value from state
    };

    // Dispatch the action with the user data
    dispatch(registerAccionAsync(user));

    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire("Good job!", "Tu cuenta se ha creado exitosamente!", "success");
       
    navigate("/user")

    }

    console.log(user);
    console.log(user.avatar);
   
  };
  return (
    <Form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1>Create account</h1>
      <Form.Group controlId="formName"className="form-group">
        <Form.Label>Name</Form.Label>
        <div className="form-input-container"><Form.Control type="text" placeholder="Enter name"  className="placeholder-input"{...register('name')} />
        {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
      </div></Form.Group>

      <Form.Group controlId="formEmail"className="form-group">
        <Form.Label>Email address</Form.Label>
        <div className="form-input-container"><Form.Control type="email" placeholder="Enter email"  className="placeholder-input"{...register('email')} />
        {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
        </div>  </Form.Group>

      <Form.Group controlId="formPhone" className="form-group">
        <Form.Label>Phone number</Form.Label>
        <div className="form-input-container">
        <Form.Control type="text" placeholder="Enter phone number"  className="placeholder-input"{...register('phone')} />
        {errors.phone && <Form.Text className="text-danger">{errors.phone.message}</Form.Text>}
      </div>
      </Form.Group>
      <Form.Group controlId="formPassword" className="form-group">
        <Form.Label>Password</Form.Label>
        <div className="form-input-container">
        <Form.Control type="password" placeholder="Enter password"  className="placeholder-input" {...register('password')} />
        </div></Form.Group>
      <Form.Group controlId="formConfirmPassword" className="form-group">
        <Form.Label>Confirm Password</Form.Label>
        <div className="form-input-container"><Form.Control type="password" placeholder="Confirm password"  className="placeholder-input" {...register('confirmPassword')} />
        </div> </Form.Group>
      <Form.Group controlId="formBirthdate" className="form-group">
        <Form.Label>Birthdate</Form.Label>
        <div className="form-input-container"> <Form.Control type="date" placeholder="Enter birthdate"  className="placeholder-input"{...register('birthdate')} />
        {errors.birthdate && <Form.Text className="text-danger">{errors.birthdate.message}</Form.Text>}
        </div> </Form.Group>
        <div className="avatar-upload-container">
  <FloatingLabel label="Avatar" className="floating-label" />
  <AvatarUpload setAvatar={setAvatar} imageUrl={avatar} />
</div>

      <Button variant="primary" type="submit" className='form__button'>
        Sing In
      </Button>
    </Form>
  );
};

export default Register;
