import { Form, Label, Input, Submit, Span } from './LoginForm.styled';
import { useState } from 'react';
import authOperations from '../../redux/store/auth-operations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
        ></Input>
      </Label>
      <Submit type="submit">Log in</Submit>
    </Form>
  );
};

export default LoginForm;
