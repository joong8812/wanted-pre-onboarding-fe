import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/sign-in/sign-in.component';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
