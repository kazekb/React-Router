import logo from '../images/logo.svg';
import '../App.css';

export default function About() {
  return (
    <div className = "App">
      <header className = "App-header">
        <img src = { logo } className = "App-logo" alt = "logo"/>
        <p>About Me </p>
      </header>
    </div>
  );
}
