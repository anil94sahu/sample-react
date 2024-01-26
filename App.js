import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './component/Dashboard';
import Create from './component/Create';
import Update from './component/Update';
import Delete from './component/Delete';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="create" element={<Create />}  />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />} />
          <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
