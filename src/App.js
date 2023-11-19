import './App.css';
import Login from './conponents/User/Login';
import FrontPage from './Frontpage';
import { AdminDashBoard } from './sences/home/adminDashboard';
import UserHome from './sences/home/userHome';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={FrontPage} />
          <Route path='/login' Component={Login} />
          <Route path='/account' Component={ProtectedRoute} >
            <Route path='admin/*' Component={AdminDashBoard}/>
            <Route path='user/*' Component={UserHome} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;