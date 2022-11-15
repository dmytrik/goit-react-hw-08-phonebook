import { Form, Label, Input, Submit, Span } from './RegisterForm.styled';
import { useState } from 'react';
import authOperations from '../../redux/store/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/store/auth';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userError = useSelector(state => state.user.error);
  const dispatch = useDispatch();
  const isDisabled =
    email.trim() === '' || name.trim() === '' || password.trim() === '';
  if (userError) {
    const { message = '', code } = userError;
    switch (code) {
      case 400:
        alert('Error creating user, please try again)');
        dispatch(resetError());
        break;

      case 500:
        alert('server error, try reloading the page or try again later');
        dispatch(resetError());
        break;

      default:
        alert(message);
        dispatch(resetError());
    }
  }

  const handleUserChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(authOperations.registerUser(user));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleUserChange}
          ></Input>
        </Label>
        <Label>
          <Span>Email</Span>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleUserChange}
          ></Input>
        </Label>
        <Label>
          <Span>Password</Span>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleUserChange}
            minLength="7"
          ></Input>
        </Label>
        <Submit type="submit" disabled={isDisabled}>
          Sign up
        </Submit>
      </Form>
    </>
  );
};

export default RegisterForm;
