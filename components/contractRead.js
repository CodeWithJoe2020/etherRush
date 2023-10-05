import React from 'react';
import lottoABI from '../abis/lottoABI.json';
import { useIsMounted } from '../components/useisMounted';
import { useAccount,useBalance, useContractRead} from 'wagmi';
import CountdownTimer from '../components/CountDown';

function Read() {

  const contractAddress = '0x183E82eFb216c3c986A20305F7CF83f51b77259a'
  const { address} = useAccount();
  const { data ,isLoading } = useBalance({
    address: address,
    watch: true,
  })
 

  const mounted = useIsMounted();

  const { data: contractData, isError: isError1, isLoading: isLoading1 } = useContractRead({
    address: contractAddress,
    abi: lottoABI,
    functionName: 'endTime',
    watch:true
  });

  const { data: winner, isError: isError } = useContractRead({
    address: contractAddress,
    abi: lottoABI,
    functionName: 'winner',
    watch:true
  });



  const { data: contractC, isError: isError3, isLoading: isLoading3 } = useContractRead({
    address: contractAddress,
    abi: lottoABI,
    functionName: 'gameInterval',
  });

  const { data: contractE, isError: isError4, isLoading: isLoading4 } = useContractRead({
    address: contractAddress,
    abi: lottoABI,
    functionName: 'minimumAmount',
  });



  console.log(winner);
  // const { data: contractF, isError: isError5, isLoading: isLoading5 } = useContractRead({
  //   address: '0x3262c6f03F4003F1b4D6162F40bae8A71a101ef3',
  //   abi: lottoABI,
  //   functionName: 'referralReward',
  // });

  return (
    <div style={{ textAlign: 'center'}}>
    {mounted && (
      <div >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#53684f' }}>Game Info</h2>
  
        {isLoading1 && <p>Loading End Time...</p>}
        {contractData && (
          <div>
            <p className="text-danger">This Game ends:</p>
            <p style={{ fontSize: '18px', color: 'red' }}>{new Date(Number(contractData) * 1000).toLocaleString()}</p>
          </div>
        )}
  
        <CountdownTimer endTime={Number(contractData)} />
  
        {isLoading3 && <p>Loading Game Interval...</p>}
        {contractC && (
          <div>
            <p className="text-secondary">Game Interval:</p>
            <p style={{ fontSize: '18px', color: '#333' }}>{contractC.toString()} seconds</p>
          </div>
        )}
  
        {isLoading4 && <p>Loading Minimum Amount...</p>}
        {contractE && (
          <div>
            <p className="text-secondary">Minimum Amount:</p>
            <p style={{ fontSize: '18px', color: '#333' }}>{(contractE.toString() / 10**18).toFixed(4)} SEP</p>
          </div>
        )}
  
        {isLoading && <p>Loading Winner...</p>}
        {winner && (
          <div>
            <p style={{ fontSize: '16px', color: '#666' }}>Winner:</p>
            <p style={{ fontSize: '18px', color: '#333' }}>{winner.toString()}</p>
          </div>
        )}
  
        {address && (
          <div>
            <p style={{ fontSize: '16px', color: '#666' }}>Address:</p>
            <p style={{ fontSize: '18px', color: '#333' }}>{address}</p>
          </div>
        )}
  
        {isLoading ? (
          <p>Loading Balance...</p>
        ) : (
          data && (
            <div>
              <p className="text-secondary">Balance:</p>
              <p style={{ fontSize: '18px', color: '#333' }}>{parseFloat(data.formatted).toFixed(4)} {data?.symbol}</p>
            </div>
          )
        )}
      </div>
    )}
  </div>
  
  );
}

export default Read;
