import { TonConnectButton } from "@tonconnect/ui-react";
// import { Threading } from "./components/Threading";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "./App.css";
import { App as KonstaApp } from "konsta/react";
import { isAndroid } from "react-device-detect";
// import WebApp from "@twa-dev/sdk";

function App() {
  const { network } = useTonConnect();
  const theme = isAndroid ? "material" : "ios";
  // const search = WebApp.initData;
  // let username = "Telegram name"
  // username = JSON.parse(JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) })).username;
  return (
    <KonstaApp theme={theme} safeAreas>
      <main className="min-h-screen p-5">
        <div className="max-w-[900px] mx-auto my-0">
          <div className="flex flex-col gap-[30px] items-center justify-center">

            {/* banner */}
            <div className="w-full">
              <div className="bg-black w-full h-[25px] flex items-center justify-center">
                <div className="flex items-center justify-between flex-grow max-w-[350px]">
                  <p className="text-xs text-white">All participants <span className="text-[13px] text-[#FF6ADE]">1 525 202</span></p>
                  <div className="w-1 h-1 bg-[#FF6ADE] rounded-full"></div>
                  <p className="text-xs text-white">Joined in 24 hours <span className="text-[13px] text-[#FF6ADE]">122</span></p>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#E8EAF6] "></div>
            </div>
            {/* <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-semibold text-black dark:text-white">Telegram name</p>
              <p className="text-xs font-semibold text-grey dark:text-gray-200">Contract Address</p>
            </div> */}
            {/* Define the SVG clipPath */}

            <div className="flex items-center gap-[10px] justify-end w-full">
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
