import { Address, Dictionary } from "ton-core";
import { Array, UserStruct } from "../contracts/threading"

export function getLastNonZeroIndex(levelExpired: Dictionary<bigint, bigint> | undefined): bigint | null {
    if (levelExpired === undefined) {
        return null;
    }

    const keys = levelExpired.keys();
    for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        const value = levelExpired.get(key);
        if (value !== 0n) {
            return key;
        }
    }

    return null;
}

export function getReferralLevels(users:  Dictionary<Address, UserStruct> | null | undefined, referrals: Array | undefined) {
    if (!referrals) {
        return {};
    }

    const levels: { [key: string]: number } = {};
    for (let i = 0; i < Number(referrals.length) && i < 2; i++) {
        const referralAddress = referrals.map.get(i);
        if (referralAddress) {
            const referralDetails = users?.get(Address.parse(referralAddress.toString({ bounceable: true, testOnly: false })));
            if (referralDetails) {
                levels[referralAddress.toString({ bounceable: true, testOnly: false })] = Number(referralDetails.levelExpired);
            }
        }
    }
    return levels;
}