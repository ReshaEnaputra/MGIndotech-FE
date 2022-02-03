import Main from './pages/Main'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Main/>}/>
    </Routes>
    </div>
  );
}

export default App;
