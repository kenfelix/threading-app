import { TonConnectButton } from "@tonconnect/ui-react";
// import { Threading } from "./components/Threading";
// import { useTonConnect } from "./hooks/useTonConnect";
// import { CHAIN } from "@tonconnect/protocol";
import "./App.css";
import { App as KonstaApp } from "konsta/react";
import { isAndroid } from "react-device-detect";
import Logo from "./assets/logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomePage } from "./components/Welcome";
import { NavBar } from "./components/NavBar";
import { ManagePage } from "./components/Manage";
// import { useThreadingContract } from "./hooks/useThreadingContract";
import { randomInt } from "crypto";

function App() {
  // const { usersAddressList } = useThreadingContract();
  // const totalParticipants = usersAddressList?.values().length.toLocaleString('en').replace(/,/g, ' ');
  const theme = isAndroid ? "material" : "ios";
  const router = createBrowserRouter([
    {
    path: "/",
    element: <WelcomePage/>
    },
    {
      path: "/home",
      element: <NavBar />
      
    },
    {
      path: "/manage",
      element: <ManagePage />
      
    }
  ]);
  
  return (
    <KonstaApp theme={theme} safeAreas>
      <main className="min-h-screen !font-sans">
        <div className="relative max-w-[900px] h-screen mx-auto my-0 bg-[url('./assets/background.png')] bg-no-repeat bg-cover">
          <div className="bg-[#08496A] w-2 h-2 rounded-full blur-xs absolute left-[334px] top-[161px]"></div>
          <div className="bg-[#08496A] w-2 h-2 rounded-full blur-xs absolute left-[104px] top-[366px]"></div>
          <div className="bg-[#08496A] w-2 h-2 rounded-full blur-xs absolute left-[344px] top-[518px]"></div>


          <div className="flex flex-col gap-[20px] items-center justify-center">

            {/* banner */}
            <div className="w-full">
              <div className="bg-black w-full h-7 flex items-center justify-center">
                <div className="flex items-center justify-between flex-grow max-w-[350px]">
                  <p className="text-xs text-white">All participants <span className="text-[13px] text-[#FF6ADE]"></span></p>
                  <div className="w-1 h-1 bg-[#FF6ADE] rounded-full"></div>
                  <p className="text-xs text-white">Joined in 24 hours <span className="text-[13px] text-[#FF6ADE]">{randomInt(50)}</span></p>
                </div>
              </div>
              <div className="w-full h-[0.7px] bg-[#E8EAF6] "></div>
            </div>
            {/* <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-semibold text-black dark:text-white">Telegram name</p>
              <p className="text-xs font-semibold text-grey dark:text-gray-200">Contract Address</p>
            </div> */}
            {/* main content */}
            <div className="px-5 flex flex-col w-full">

              {/* Header */}
              <div className="flex items-center gap-[10px] justify-between w-full">
                <div className=" flex w-[50px] h-[50px] bg-[#083951] backdrop-blur-md rounded-full items-center justify-center">
                  <img src={Logo} alt="logo"  className="w-10 h-10"/>                  
                </div>
              
                <TonConnectButton />
                
                {/* <button>
                {network
                  ? network === CHAIN.MAINNET
                    ? "mainnet"
                    : "testnet"
                  : "N/A"}
                </button> */}
              </div>
              {/* Header */}
                <RouterProvider router={router}/>
              
            </div>
          </div>
        </div>
      </main>
    </KonstaApp>
  );
}

export default App
