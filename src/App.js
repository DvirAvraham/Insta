import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage.jsx';

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
