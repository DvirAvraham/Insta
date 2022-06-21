import {Routes, Route} from 'react-router-dom';
import ProfilePage from './pages/ProfilePage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
