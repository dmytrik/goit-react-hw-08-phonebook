import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggIn = useSelector(state => state.user.isLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggIn ? children : <Redirect to="/login" />}
    </Route>
  );
};
export default PrivateRoute;
