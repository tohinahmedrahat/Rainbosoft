import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
















































