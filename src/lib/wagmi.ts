import { createConfig, http } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { 
  metaMaskWallet, 
  rainbowWallet, 
  coinbaseWallet 
} from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        coinbaseWallet,
      ],
    },
  ],
  { projectId }
);

export const config = createConfig({
  connectors,
  chains: [baseSepolia, base],
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
  },
});