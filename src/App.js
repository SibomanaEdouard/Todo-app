
import './App.css';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Form from './components/TaskForm';
import SignInForm from './components/sign';
import LoginForm from './components/login';
import EmailForm from './components/emailSend';


function App() {
  return(
    <Router>
      <Routes>
      <Route path='/tasks' element={<Form/>}/>
      <Route path='/sign' element={<SignInForm/>}/>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/resetpassword' element={<EmailForm/>}/>
      </Routes>
    </Router>

  )  
}

export default App;

