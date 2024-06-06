import TON from "../assets/TON.svg";
import Telegram from "../assets/telegram.svg";
import {
  Button,
} from 'konsta/react';
import { useThreadingContract } from "../hooks/useThreadingContract";
import { useTonConnect } from "../hooks/useTonConnect";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Address } from "ton-core";


export function WelcomePage() {
  const { connected, wallet,  } = useTonConnect();
  const { value } = useThreadingContract();
  console.log(value?.includes(Address.parse(wallet!).toString({bounceable: true, testOnly: false})))

  return (
    <>
      <TonConnectButton />
      {/* Hero */}

      <div className="flex flex-col gap-0 items-center justify-center pt-[116px] pb-[65px] text-[#FFFFFF]">
        <div className="flex items-center justify-center">
          <img src={TON} alt="" />
          <p className="text-[#FCF8F8] text-base font-semibold"><span className="text-[#42B7F1] font-black">TON</span> & MLM</p>
        </div>
        <h3 className="font-semibold text-[50px] shadow-xl mb-[25px] tracking-normal leading-[.75em]">Threading</h3>
        <p className="font-medium text-[20px] max-w-[272px] text-center leading-6">Earn rewards. Build wealth. Join Threading's revolution.</p>

      </div>

      {/* Hero */}

      {/* Buttons */}

      <div className="flex flex-col gap-[13px]">
        <Button large rounded touchRipple className="!text-white" disabled={!connected} colors={{disabledBg:"bg-grey"}}>Join now</Button>
        <Button large rounded touchRipple className="!text-white" ><span><img src={Telegram} alt="" /></span>Telegram</Button>
      </div>

      {/* Buttons */}
    </>
  );
}