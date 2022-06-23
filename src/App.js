import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<ProfilePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
