import { Form, Label, Input, Submit, Span } from './LoginForm.styled';
import { useState } from 'react';
import authOperations from '../../redux/store/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/store/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userError = useSelector(state => state.user.error);
  const dispatch = useDispatch();
  const isDisabled = email.trim() === '' || password.trim() === '';
  if (userError) {
    const { message = '', code } = userError;
    switch (code) {
      case 400:
        alert('User authorization error, please try again)');
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
      email,
      password,
    };
    dispatch(authOperations.loginUser(user));
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
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
        Log in
      </Submit>
    </Form>
  );
};

export default LoginForm;
