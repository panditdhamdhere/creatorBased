'use client';

import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export function WalletConnection() {
  const { address, isConnected } = useAccount();

  return (
    <div className="flex flex-col items-center space-y-4">
      <ConnectButton />
      
      {isConnected && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="font-bold">Connected Wallet:</p>
          <p className="text-sm text-gray-600 break-all">{address}</p>
        </div>
      )}
    </div>
  );
}