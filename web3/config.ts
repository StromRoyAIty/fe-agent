import { cookieStorage, createStorage, http } from "wagmi";

import { optimismSepolia } from "wagmi/chains";
import { getDefaultConfig, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { projectID, rpc_dev } from "@/global/env";

const { wallets } = getDefaultWallets();

export const wagmiConfig = getDefaultConfig({
  appName: "ALL Mighty Robot",
  projectId: projectID,
  wallets: [...wallets],
  chains: [optimismSepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [optimismSepolia.id]: http(rpc_dev, {
      key: "optimism_sepolia",
    }),
  },
});
