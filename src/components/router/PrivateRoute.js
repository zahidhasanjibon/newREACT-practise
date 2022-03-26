import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

function PrivateRoute({ children }) {
    const auth = useAuth();

    return auth ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
