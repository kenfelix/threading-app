import { Badge, BlockTitle, Button, List, ListItem } from "konsta/react";
import { GiArmorUpgrade } from "react-icons/gi"
import { useThreadingContract } from "../hooks/useThreadingContract";
import { Address } from "ton-core";
import { useTonConnect } from "../hooks/useTonConnect";
import { getLastNonZeroIndex, getReferralLevels } from "../hooks/useUtils";
import { LEVEL_DATA } from "../constants/constant";

export function ManagePage() {
    const { upgrade, users } = useThreadingContract();
    const { wallet,  } = useTonConnect();

    const userDetails = users?.get(Address.parse(Address.parse(wallet!).toString({ bounceable: true, testOnly: false })));
    const currentlevel = getLastNonZeroIndex(userDetails?.levelExpired);
    const newLevel = Number(currentlevel!) + 1;
    const referralLevels = getReferralLevels(users, userDetails?.referral);

    return (
        <div className="flex flex-col gap-3 items-center justify-center pt-[69px] pb-[65px] text-[#FFFFFF]">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-baseline">
                    <div className="relative">
                        <h1 className="absolute font-semibold top-0 left-0 text-[65px] text-white">42</h1>
                        <h1 className="relative font-semibold text-[64px] text-[#095C86]">42</h1>
                    </div>
                    <p className="text-white font-semibold text-sm">Participant</p>
                </div>
                <div className="flex flex-col items-center">
                    <Button onClick={() => {upgrade(LEVEL_DATA[newLevel].price, newLevel, LEVEL_DATA[newLevel].ton)}} className="p-2 !h-[60px] !w-[60px]  flex items-center justify-center rounded-full">
                        <GiArmorUpgrade className="w-8 h-8 text-white"/>
                    </Button>
                    <p className="text-white underline text-xs">Upgrade</p>
                </div>
            </div>

            <div className="w-full overflow-y-scroll h-[200px]">
                {userDetails?.referral.map.values().map((value) => (
                    <>
                        <BlockTitle className="!mt-0">Level 1 patners</BlockTitle><List strong inset className="!mx-0">
                        <ListItem
                            title={value.toString({ bounceable: true, testOnly: false })}
                            after={<Badge colors={{ bg: 'bg-gray-500' }}>{ referralLevels[value.toString({ bounceable: true, testOnly: false })] }</Badge>} />
                        </List>
                    </>
                ))}
            </div>
        </div>
    );
}