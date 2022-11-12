import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Layout from './Layout/Layout';
import Contacts from './Contacts/Contacts';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import authOperations from '../redux/store/auth-operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <PrivateRoute path="/contacts">
          <Contacts />
        </PrivateRoute>
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Route>
    </Switch>
  );
};

export default App;
