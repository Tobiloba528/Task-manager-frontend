import logo from './logo.svg';
import './App.css';
import AuthNav from './components/AuthNav';
import Home from './components/Home';
import HomeFeatures from './components/HomeFeature';
import HomeAbout from './components/HomeAbout';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AuthScreen from './screens/AuthScreens';
import MainScreen from './screens/MainScreen';

function App() {
  return (
    <div>
      {/* <AuthScreen /> */}
      <MainScreen />
    </div>
  );
}

export default App;
