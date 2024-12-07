'use client';

import React, { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import { Web3Storage } from 'web3.storage';

export function ContentUpload() {
  const { address } = useAccount();
  const [contentDescription, setContentDescription] = useState('');
  const [contentFile, setContentFile] = useState<File | null>(null);

  const { writeContract } = useWriteContract();

  const uploadToIPFS = async (file: File) => {
    const client = new Web3Storage({ 
      token: process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN || '' 
    });

    try {
      const cid = await client.put([file]);
      return cid;
    } catch (error) {
      console.error('IPFS Upload Error:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!contentDescription || !contentFile) {
      alert('Please provide description and file');
      return;
    }

    try {
      // Upload file to IPFS
      const contentHash = await uploadToIPFS(contentFile);

      // Call smart contract to upload content
      await writeContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: [], // Add your contract ABI
        functionName: 'uploadContent',
        args: [contentHash]
      });

      alert('Content uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Content</h2>
      
      <textarea
        placeholder="Describe your content..."
        className="w-full p-2 border rounded mb-4"
        value={contentDescription}
        onChange={(e) => setContentDescription(e.target.value)}
      />

      <input 
        type="file" 
        onChange={(e) => setContentFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload Content
      </button>
    </div>
  );
}