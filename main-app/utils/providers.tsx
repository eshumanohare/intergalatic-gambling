"use client";

import React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { OasisSapphireTestnet } from "./Chain";

const { chains, publicClient } = configureChains(
  [OasisSapphireTestnet, sepolia],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Vigilante",
  projectId: "e25b6bd0f1976d16cb62749b0c7cb0a0",
  chains,
});

const demoAppInfo = {
  appName: "Rainbowkit Demo",
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const Providers = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={demoAppInfo}
        modalSize="compact"
        theme={midnightTheme({
          accentColor: "#14BB00",
          accentColorForeground: "#171717",
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Providers;
