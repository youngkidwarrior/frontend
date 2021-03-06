/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';

import { view } from 'react-easy-state';

import eth from '../stores/eth';
import { shortenAddress } from '../utils/address';
import walletModal from '../stores/walletModal';

import Identicon from './Identicon';

const ConnectWeb3Button = () => {
  const shortAddress = eth.account ? shortenAddress(eth.account) : '';

  return (
    <div className="web3button-container" onClick={walletModal.open}>
      {eth.account ? (
        <>
          <p>{shortAddress}</p>
          <div className="icon-container">
            <div className="image-container">
              <Identicon />
            </div>
          </div>
        </>
      ) : (
        'Connect Web3'
      )}
    </div>
  );
};

export default view(ConnectWeb3Button);
