import logo from '../images/logo.svg';
import '../App.css';

export default function Home() {
  return (
    <div className = "App">
      <header className = "App-header">
        <img src = { logo } className = "App-logo" alt = "logo"/>
        <p>Welcome to Kaze's Website </p>

      </header>
    </div>
  );
}
