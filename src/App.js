import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Formone } from './Components/Forms/Form_one';
import { User } from './Components/Users/User';
import { Home } from './Components/Home/Home';
import { Formtwo } from './Components/Forms/Form_two';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration/one" element={<Formone/>} />
        <Route path="/registration/two" element={<Formtwo/>} />
        <Route path="/users" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
