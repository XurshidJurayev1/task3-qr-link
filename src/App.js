import './App.css';
import Check from './Check';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (<div className="App">
    <Routes>
      <Route path="*" element={<Check />} />

    </Routes>
  </div>);
}

export default App;
