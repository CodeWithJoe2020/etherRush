
import React from 'react';

import { useIsMounted } from '../components/useisMounted';
import { useBlockNumber} from 'wagmi';

function Block() {
    const { data: blockNumberData, isLoading } = useBlockNumber({
      watch: true,
    });
  
    const mounted = useIsMounted();
  
    return (
        <div>
        {mounted ? (
          typeof blockNumberData !== 'undefined' ? (
            <p>🟢 {String(blockNumberData)}</p>
          ) : (
            <p>🔴 Error</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
      
    );
  }
  
  export default Block;
  