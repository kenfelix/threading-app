import { Progressbar } from "konsta/react";
import TON from "../assets/TON.svg";
import { EarningCard } from "./EarningCard";
import WebApp from "@twa-dev/sdk";
import { useThreadingContract } from "../hooks/useThreadingContract";
import { useTonConnect } from "../hooks/useTonConnect";
import { Address } from "ton-core";
import { calculateEarnings, getLastNonZeroIndex, getReferralLevels } from "../hooks/useUtils";
import { CopyText } from "./CopyText";

export function HomePage() {
    const { users } = useThreadingContract();
    const { wallet } = useTonConnect();

    const search = WebApp.initData;
    const user = JSON.parse(JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }).user);

    const userDetails = users?.get(Address.parse(Address.parse(wallet!).toString({ bounceable: true, testOnly: false })));
    const currentlevel = getLastNonZeroIndex(userDetails?.levelExpired);
    const referralLevels = getReferralLevels(users, userDetails?.referral);
    const earnings = calculateEarnings(referralLevels);
    const referralLink = `https://t.me/threading_test_bot/threading?startapp=${Address.parse(wallet!).toString({ bounceable: true, testOnly: false })}`

    return (
        <div className="flex flex-col gap-3 items-center justify-center pt-[69px] pb-[65px] text-[#FFFFFF]">
            <div className="flex items-center justify-center">
                <img src={TON} alt="" />
                <p className="text-[#FCF8F8] text-base font-semibold"><span className="text-[#42B7F1] font-black">TON</span> & MLM</p>
            </div>

            <div className="flex flex-col justify-between rounded-[19px] bg-[#084564] w-full h-[164px] p-3">
                <div className="flex w-full items-end gap-2">
                    <div className="w-[66px] h-[54px] bg-gray-300 rounded-[16px]">
                        <img src={user.photo_url} alt="" className=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#FFFFFF] text-[16px] leading-3 font-bold">{user.username}</p>
                        <CopyText content={referralLink}><p className="text-[#FFFFFF] text-[14px] opacity-[52%] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">Referral link: {referralLink}</p></CopyText>
                    </div>
                </div>
                <div className="">
                    <p className="font-bold text-base w-full text-right">{ currentlevel?.toString() }/10</p>
                    <Progressbar progress={Number(currentlevel)} component="div" className="h-[14px] rounded-l-[68px]"/>
                </div>
                
            </div>
            <div className="flex justify-between w-full mt-3">
                <EarningCard title="Est. Ton earned" value={`${earnings} TON`} />
                <EarningCard title="Est. USD earned" value={`$${earnings * 7.25}`} />
            </div>
        

        </div>
    );
}