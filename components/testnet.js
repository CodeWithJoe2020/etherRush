import React from 'react';

function Testnet() {
  return (
    <div className="testnet-container">
      <h2>Testnet Instructions</h2>
      <ol>
        <li>Get Sepolia testnet tokens.</li>
        <p>
          To participate in the game, you need to obtain Sepolia testnet tokens. You can usually get these tokens from the Sepolia testnet faucet.
        </p>
        <li>Switch Wallet to Sepolia.</li>
        <p>
          Make sure your wallet is connected to the Sepolia testnet to play the game on the test network.
        </p>
        <li>Buy a bag for 0.01 SEP.</li>
        <p>
          You can purchase a bag for 0.01 SEP. This purchase contributes to the games jackpot.
        </p>
        <li>Buy more bags to improve your chances of winning.</li>
        <p>
          The more bags you buy, the higher your chances of winning the jackpot. Each bag purchase adds to your chances.
        </p>
      </ol>

      <h2>How the Game Works</h2>
      <p>
        In this game, players buy bags for 0.01 SEP, and the SEP goes into the jackpot. The more bags you purchase, the higher your chances of winning the jackpot.
      </p>
      <p>
        The jackpot is the sum of all buy-ins during the duration of the game, typically lasting for 5 minutes. At the end of the game, a random winner is selected from all participants, and they receive 90Percent of the jackpot immediately.
      </p>
    </div>
  );
}

export default Testnet;
