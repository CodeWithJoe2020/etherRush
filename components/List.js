import React, { useState, useEffect } from 'react';
import lottoABI from '../abis/lottoABI.json';
import { useIsMounted } from '../components/useisMounted';
import {  useContractRead,  useAccount,} from 'wagmi';
import 'bootstrap/dist/css/bootstrap.min.css';



   
const contractAddress='0x183E82eFb216c3c986A20305F7CF83f51b77259a'


function List() {
    const mounted = useIsMounted();
    const contractRead = useContractRead({
      address: contractAddress,
      abi: lottoABI,
      functionName: 'listPlayers',
      watch: true,
    });
  
    const { address: userAddress } = useAccount(); // Get the user's address
  
    const [allPlayers, setAllPlayers] = useState([]);
    const [uniquePlayersArray, setUniquePlayersArray] = useState([]);
    const [playerCounts, setPlayerCounts] = useState({}); // Mapping for player counts
  
    useEffect(() => {
      if (contractRead.isSuccess && contractRead.data) {
        const players = contractRead.data;
  
        setAllPlayers(players);
  
        const uniquePlayers = Array.from(new Set(players));
        setUniquePlayersArray(uniquePlayers);
  
        // Count how many times each player appears
        const counts = {};
        players.forEach((player) => {
          counts[player] = (counts[player] || 0) + 1;
        });
        setPlayerCounts(counts);
      }
    }, [contractRead]);
  
    // Get the count of the user's address
    const userAddressCount = playerCounts[userAddress] || 0;
    const userProbability = (userAddressCount / allPlayers.length) * 100;
    return (
      <div className="container">
      {mounted && (
        <>
          <p className="font-weight-bold text-primary">
            Your Chance of Winning: {(userAddressCount / allPlayers.length * 100).toFixed(2)}%
          </p>
          <p className=" text-light">
            Your Address ({userAddress}): Count: {userAddressCount}
          </p>
          <hr />

          <div>
            <h2 className="font-weight-bold text-dark">List of Players</h2>
            <p className="text-secondary">Total Players: {allPlayers.length}</p>
            <p className="text-secondary">Unique Players: {uniquePlayersArray.length}</p>
          </div>

          <div>
            <h3 className="font-weight-bold text-dark">All Players</h3>
            {allPlayers.length > 0 ? (
              <table className="table table-dark table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {allPlayers.map((player, index) => (
                    <tr key={index}>
                      <td>{player}</td>
                      <td>{playerCounts[player] || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-muted">No players found.</p>
            )}
          </div>

          <div>
            <h3 className="font-weight-bold text-dark">Unique Players</h3>
            {uniquePlayersArray.length > 0 ? (
              <table className="table table-dark table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {uniquePlayersArray.map((player, index) => (
                    <tr key={index}>
                      <td>{player}</td>
                      <td>{playerCounts[player] || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-muted">No unique players found.</p>
            )}
          </div>
        </>
      )}
    </div>
    
    );
  }
export default List