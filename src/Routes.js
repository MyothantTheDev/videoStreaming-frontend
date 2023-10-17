import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

  const {isAuthenticated, user} = useSelector(state => state.auth);

  if (isAuthenticated && user) {
    return <Outlet/>
  }
  return <Navigate to='/login' replace />
}

export default ProtectedRoute
