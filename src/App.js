import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/Main';

import Sucesso from './page/Sucesso';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/sucesso' element={<Sucesso/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
