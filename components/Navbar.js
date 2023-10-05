import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand text-light">EtherRush</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Use ml-auto to push ConnectButton to the right */}
            <li className="nav-item ">
              <Link href="/" className="nav-link text-light">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/play" className="nav-link text-light">Play</Link>
            </li>
            <li className="nav-item">
              <Link href="/howtoplay" className="nav-link text-light">How to play</Link>
            </li>
          </ul>
        </div>
        <ConnectButton /> {/* Place ConnectButton outside of the ul to align it to the right */}
      </div>
    </nav>
  );
}

export default Nav;


