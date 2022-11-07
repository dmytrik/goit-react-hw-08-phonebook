import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Contacts from './Contacts/Contacts';
import RegisterForm from './RegisterForm/RegisterForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
};

export default App;
