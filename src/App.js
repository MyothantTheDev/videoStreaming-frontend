import './App.css';
import Login from './conponents/User/Login';
import FrontPage from './conponents/Frontpage';
import { AdminDashBoard } from './adminDashboard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminDashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;