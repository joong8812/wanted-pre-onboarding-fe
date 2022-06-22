import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { authActions } from './store/auth';

import SignIn from './pages/sign-in/sign-in.component';
import Navigation from './components/navigation/navigation.component';
import Main from './pages/main/main.componet';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('loginUser'));

  useEffect(() => {
    if (user !== null) {
      dispatch(authActions.login(user));
    }
  }, []);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<SignIn />} />
        <Route path="/main" element={<Navigation />}>
          <Route index element={<Main />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
