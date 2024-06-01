import { TonConnectButton } from "@tonconnect/ui-react";
// import { Threading } from "./components/Threading";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "./App.css";
import { App as KonstaApp } from "konsta/react";
import { isAndroid } from "react-device-detect";
import WebApp from "@twa-dev/sdk";

function App() {
  const { network } = useTonConnect();
  const theme = isAndroid ? "material" : "ios";
  const search = WebApp.initData;
  const converted = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) });
  return (
    <KonstaApp theme={theme} safeAreas>
      <main className="min-h-screen p-5">
        <div className="max-w-[900px] mx-auto my-0 mt-10">
          <div className="flex flex-col gap-[30px] items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-semibold text-black dark:text-white">{converted.username}</p>
              <p className="text-xs font-semibold text-grey dark:text-gray-200">Contract Address</p>
            </div>
            {/* Define the SVG clipPath */}
            <svg width="0" height="0">
              <defs>
                <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                  <path d="M0.568 0.098c0-0.054-0.028-0.098-0.062-0.098h-0.349c-0.03 0-0.054 0.024-0.054 0.054v0.799c0 0.054 0.024 0.098 0.054 0.098h0.891c0.03 0 0.054-0.024 0.054-0.054v-0.587c0-0.054-0.024-0.098-0.054-0.098h-0.328c-0.034 0-0.062-0.028-0.062-0.098z"/>
                </clipPath>
              </defs>
            </svg>

            <div className="relative w-[366px] h-[184px]">
              <div className="absolute top-0 left-0 w-full h-full bg-white clip-path border"></div>
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
