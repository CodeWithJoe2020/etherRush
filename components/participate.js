import React from "react";
import lottoABI from '../abis/lottoABI.json';

import { useContractWrite, usePrepareContractWrite ,useWaitForTransaction, useBalance, useAccount} from 'wagmi'
import { parseEther } from "viem";
 
function Buy() {
  const { address} = useAccount();
    const { config} = usePrepareContractWrite({
      address: '0x183E82eFb216c3c986A20305F7CF83f51b77259a',
      abi: lottoABI,
      functionName: 'participate',
      value:parseEther('0.01'),
      args:['0x293Bcb20584a2e0E6d1b559E25783311ec29121C']
    });
  
    const { write, isLoading,error, data } = useContractWrite(config);
    const {waitForTransaction,  isSuccess,} = useWaitForTransaction({
        hash: data?.hash ? data.hash.toString() : null,
        confirmations: 1,
      });
      console.log(waitForTransaction)

      const { data:balancedata  } = useBalance({
        address: address,
        watch: true,
      })
  
    return (
        <>
        <button
        className="btn btn-success"
        disabled={isLoading}
        onClick={() => write?.()}
        
      >
        💰 BUY 💰
      </button>
      {/* <p style={{ fontSize: '18px', color: 'white' }}>{parseFloat(balancedata.formatted).toFixed(4)} {balancedata?.symbol}</p> */}
        {error && (
          <div>An error occurred: {error.message}</div>
        )}
        {isLoading && <div>Transaction in progress...</div>}
        {isSuccess && (
        <div>
            <a href={`https://sepolia.etherscan.io/tx/${data?.hash}`} target="_blank" rel="noopener noreferrer">
            ✅{data?.hash}
            </a>
        </div>
)}
      </>
    );
  }
  
  export default Buy;