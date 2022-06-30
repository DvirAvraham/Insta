import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import {checkAuth} from './store/actions/authActions.js';

function App() {
  const dispatch = useDispatch();
  const {loggedInUser} = useSelector((state) => state.authModule);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="app-container">
        {loggedInUser ? (
          <Routes>
            <Route path="/" element={<ProfilePage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<LoginPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
