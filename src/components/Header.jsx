
import logo from '../assets/investment-calculator-logo.png';
export default function Header() {
    
    return (
        <header id="header">
            <img src={logo} alt="Investment Calculator Logo" className="logo" />
            <h1>React Investment Calculator</h1>
            <p>Calculate your investment growth over time</p>
        </header>
    );
}