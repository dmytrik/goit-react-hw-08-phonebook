import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Contacts from './Contacts/Contacts';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
};

export default App;
