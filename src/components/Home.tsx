import { Progressbar } from "konsta/react";
import TON from "../assets/TON.svg";
import { EarningCard } from "./EarningCard";
import WebApp from "@twa-dev/sdk";

export function HomePage() {

    const search = WebApp.initData;
    const user = JSON.parse(JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }));
    return (
        <div className="flex flex-col gap-3 items-center justify-center pt-[69px] pb-[65px] text-[#FFFFFF]">
            <div className="flex items-center justify-center">
                <img src={TON} alt="" />
                <p className="text-[#FCF8F8] text-base font-semibold"><span className="text-[#42B7F1] font-black">TON</span> & MLM</p>
            </div>

            <div className="flex flex-col justify-between rounded-[19px] bg-[#084564] w-full h-[164px] p-3">
                <div className="flex w-full items-end gap-2">
                    <div className="w-[66px] h-[54px] bg-gray-300 rounded-[16px]"></div>
                    <div className="flex flex-col">
                        <p className="text-[#FFFFFF] text-[16px] leading-3 font-bold">{user.username}</p>
                        <p className="text-[#FFFFFF] text-[14px] opacity-[52%]">contact address</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-bold text-base w-full text-right">3/10</p>
                    <Progressbar progress={0.3} component="div" className="h-[14px] rounded-l-[68px]"/>
                </div>
                
            </div>
            <div className="flex justify-between w-full mt-3">
                <EarningCard title="Earning In Ton" value="42 TON" />
                <EarningCard title="Earning In USD" value="$382.02" />
            </div>
        

        </div>
    );
}