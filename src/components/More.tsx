// import WebApp from "@twa-dev/sdk";
import { useThreadingContract } from "../hooks/useThreadingContract";
import { useTonConnect } from "../hooks/useTonConnect";
import { Address } from "ton-core";
import { getLastNonZeroIndex } from "../hooks/useUtils";
import { CopyText } from "./CopyText";
import { Badge, List, ListItem } from "konsta/react";
import WebApp from "@twa-dev/sdk";
import { MdKeyboardArrowRight } from "react-icons/md";

export function MorePage() {
    const { users } = useThreadingContract();
    const { wallet } = useTonConnect();

    const search = WebApp.initData;
    const user = JSON.parse(JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }).user);

    const userDetails = users?.get(Address.parse(Address.parse(wallet!).toString({ bounceable: true, testOnly: false })));
    const currentlevel = getLastNonZeroIndex(userDetails?.levelExpired);
    const referralLink = `https://t.me/threading_test_bot/threading?startapp=${Address.parse(wallet!).toString({ bounceable: true, testOnly: false })}`

    return (
        <div className="flex flex-col gap-3 items-center justify-center pt-[69px] pb-[65px] text-[#FFFFFF]">
            <div className="flex justify-between items-center rounded-t-[19px] bg-[#084564] w-full h-[82px] p-3">
                <div className="flex w-full items-end gap-2">
                    <div className="w-[66px] h-[54px] bg-gray-300 rounded-[16px]">
                        <img src={user.photo_url} alt="" className=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#FFFFFF] text-[16px] leading-3 font-bold">{user.username}</p>
                        <CopyText content={referralLink}><p className="text-[#FFFFFF] text-[14px] opacity-[52%] max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">Referral link: {referralLink}</p></CopyText>
                    </div>
                </div> 
                <Badge small className="!w-[66px] !h-[24px]" >level { Number(currentlevel!) }</Badge>
            </div>

            <List strongIos outlineIos className="w-full">
                <ListItem
                    link
                    media={<MdKeyboardArrowRight />}
                    title="How Threading Works"
                    subtitle="visit telegram community"
                    onClick={() => window.open("https://t.me/+bn_7kVHdDSNmY2Q0")}
                />
                <ListItem
                    link
                    media={<MdKeyboardArrowRight />} 
                    title="About Threading"
                    subtitle="visit telegram community"
                    onClick={() => window.open("https://t.me/+bn_7kVHdDSNmY2Q0")}
                />
            </List>
        
        </div>
    );
}