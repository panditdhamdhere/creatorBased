import { WalletConnection } from '@/components/WalletConnection';
import { ContentUpload } from '@/components/ContentUpload';

export default function Home() {
  return (
    <div className="space-y-6">
      <WalletConnection />
      <ContentUpload />
    </div>
  );
}