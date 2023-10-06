// components/GameExplanation.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.module.css'
import Testnet from '../components/testnet';


const GameExplanation = () => {
  return (
    <div className="page-container">
      <Nav />
      <h2>How to Play</h2>
      <p>
        To play our exciting game, follow these steps:
      </p>
      <ul>
        <li>
          <strong>Step 1:</strong> Purchase your entry tickets for just 0.01 ETH. &nbsp;💰
        </li>
        <li>
          <strong>Step 2:</strong> Every 0.01 ETH entry fee contributes to the ever-growing jackpot! &nbsp;🌟
        </li>
        <li>
          <strong>Step 3:</strong> The game only lasts for 5 minutes! The adrenaline is real as the clock counts down, and the excitement builds. &nbsp;⏲️
        </li>
        <li>
          <strong>Step 4:</strong> Once the timer hits zero, the magic happens! A lucky winner is chosen completely at random from all the brave participants. &nbsp;🎩✨
        </li>
        <li>
          <strong>Step 5:</strong> The winner takes home a whopping 90% of the entire pot! Its your chance to strike it rich! &nbsp;💎🤑
        </li>
      </ul>
      <p>
        Get ready to test your luck and experience the thrill of our Ethereum game! Who knows, you could be the next big winner! &nbsp;🚀
      </p>
      <Testnet />
      <Footer />
    </div>
  );
};

export default GameExplanation;



