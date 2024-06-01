import { TonConnectButton } from "@tonconnect/ui-react";
// import { Threading } from "./components/Threading";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import "./App.css";
import { App as KonstaApp } from "konsta/react";
import { isAndroid } from "react-device-detect";

function App() {
  const { network } = useTonConnect();
  const theme = isAndroid ? "material" : "ios"

  return (
    <KonstaApp theme={theme} safeAreas>
      <main className="min-h-screen p-5 bg-bg dark:bg-black">
        <div className="max-w-[900px] mx-auto my-0 mt-10">
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-semibold text-black dark:text-white">Telegram Name</p>
              <p className="text-xs font-semibold text-grey dark:text-gray-200">Contract Address</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <TonConnectButton />
              <button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </KonstaApp>
  );
}

export default App
