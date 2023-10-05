import React from "react";
import lottoABI from '../abis/lottoABI.json';

import { useContractWrite, usePrepareContractWrite,useWaitForTransaction} from 'wagmi'
import { parseEther } from "viem";
 
function End() {
    const { config} = usePrepareContractWrite({
      address: '0x183E82eFb216c3c986A20305F7CF83f51b77259a',
      abi: lottoABI,
      functionName: 'endLottery'
    });
  
    const { write, isLoading,error, data } = useContractWrite(config);
    const {waitForTransaction,  isSuccess,} = useWaitForTransaction({
        hash: data?.hash ? data.hash.toString() : null,
        confirmations: 1,
      });
      console.log(waitForTransaction)
  
    return (
        <>
        <button
        disabled={isLoading}
        onClick={() => write?.()}
        style={{
          backgroundColor: 'red', // Make the button green
          color: 'white', // Set the text color to white
          padding: '10px 20px', // Add padding for better appearance
          border: 'none', // Remove the border
          borderRadius: '5px', // Add rounded corners
          cursor: 'pointer', // Change cursor on hover
        }}
      >
        End Lottery
      </button>
        {error && (
          <div>❌ An error occurred: {error.message}</div>
        )}
        {isLoading && <div>Transaction in progress...</div>}
        {isSuccess && (
        <div>
            <a href={`https://sepolia.etherscan.io/tx/${data?.hash}`} target="_blank" rel="noopener noreferrer">
            ✅ {data?.hash}
            </a>
        </div>
)}
      </>
    );
  }export default End;