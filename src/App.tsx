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
      <main className=" text-black  dark:text-white min-h-screen p-5">
        <div className="max-w-[900px] mx-auto my-0">
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-semibold">Telegram Name</p>
              <p className="text-xs font-semibold">Telegram Name</p>
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
