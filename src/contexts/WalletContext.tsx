
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  userAlias: string;
  walletAddress: string;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [userAlias] = useState("John Doe");
  const [walletAddress] = useState("0x742d35Cc6634C0532925a3b8D5c");

  const connect = () => {
    setIsConnected(true);
  };

  const disconnect = () => {
    setIsConnected(false);
  };

  return (
    <WalletContext.Provider value={{
      isConnected,
      userAlias,
      walletAddress,
      connect,
      disconnect
    }}>
      {children}
    </WalletContext.Provider>
  );
};
