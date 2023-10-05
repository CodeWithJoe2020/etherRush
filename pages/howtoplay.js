// components/GameExplanation.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Navbar';
import Testnet from '../components/testnet';
import Footer from '../components/Footer'

const GameExplanation = () => {
  return (
    <div>
    <Nav/>
    <div className="game-explanation bg-dark text-light p-4 rounded">
     
      <h2 className="mb-4">🎮 Welcome to "EtherRush: The 5-Minute Fortune Hunt" 🎮 </h2>
      <p>Step into the thrilling world of our Ethereum-based game! Here's how it all works:</p>
      <ul>
        <li>
          <strong>How to Play:</strong> Purchase your entry tickets for just 0.01 ETH. 💰
        </li>
        <li>
          <strong>The Exciting Part:</strong> Every 0.01 ETH entry fee contributes to the ever-growing jackpot! 🌟
        </li>
        <li>
          <strong>The Countdown:</strong> But here's the twist: the game only lasts for 5 minutes! The adrenaline is real as the clock counts down, and the excitement builds. ⏲️
        </li>
        <li>
          <strong>The Big Reveal:</strong> Once the timer hits zero, the magic happens! A lucky winner is chosen completely at random from all the brave participants. 🎩✨
        </li>
        <li>
          <strong>The Thrilling Prize:</strong> And guess what? The winner takes home a whopping 90% of the entire pot! It's your chance to strike it rich! 💎🤑
        </li>
      </ul>
      <p>Are you ready to test your luck and walk away with a life-changing reward? Get in on the action now and experience the thrill of our Ethereum game! Who knows, you could be the next big winner! 🚀</p>
      
      <Testnet/>
      <Footer/>
    </div>
    </div>
  );
};

export default GameExplanation;
