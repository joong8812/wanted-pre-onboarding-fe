import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/sign-in/sign-in.component';
import Navigation from './components/navigation/navigation.component';
import Main from './pages/main/main.componet';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<SignIn />} />
        <Route path="/main" element={<Navigation />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
