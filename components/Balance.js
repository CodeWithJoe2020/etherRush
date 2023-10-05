import { useBalance,useContractRead } from 'wagmi'
import {useState} from 'react'
import { useIsMounted } from '../components/useisMounted';

import Buy from './participate';
import { parseGwei } from 'viem';

 
function Balance() {
  const contractAddress = '0x183E82eFb216c3c986A20305F7CF83f51b77259a'
  const mounted = useIsMounted();
  const [potSize, setPotSize] = useState(0); // State for pot size
  const { data } = useBalance({
    address: contractAddress,
    watch: true,
  });

 // Calculate the money bag emoji size based on the data value or use a default size
const emojiSize = data?.formatted && data.formatted >= 0.01 ? (data.formatted / 0.01) * 20 : 10; // Adjust the default size as needed




  const handlePayIn = () => {
    // Implement your logic to increase the pot size here
    setPotSize(potSize + 10); // Increase the pot by 10
  };

  return (
    <div className="text-center">
      {mounted && (
        <div className="bg-dark p-4 rounded">
          <p className="h4 font-weight-bold text-light">EtherRush!</p>
          <p className="h5 text-secondary mb-4 text-light">earn ETH fast</p>
          <p className="h3 text-success">Win {data?.formatted} SEP</p>
          <p className="h6 text-danger">with only 0.01 SEP</p>
          <div onClick={handlePayIn}>
            {/* Set the font size based on emojiSize */}
            <div
              className="money-bag"
              style={{ fontSize: `${emojiSize || 30}px` }}
            >
              💰
            </div>
          </div>
        </div>
      )}
      <Buy/>
    </div>
  );
}

export default Balance;