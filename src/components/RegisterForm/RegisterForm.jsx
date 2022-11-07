import { Form, Label, Input, Submit, Span } from './RegisterForm.styled';
import { useState } from 'react';
import authOperations from '../../redux/store/auth-operations';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
    console.log(user);
    dispatch(authOperations.registerUser(user));
  };
  return (
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
        ></Input>
      </Label>
      <Submit type="submit">Sign up</Submit>
    </Form>
  );
};

export default RegisterForm;
