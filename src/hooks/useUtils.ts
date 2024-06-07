import { Dictionary } from "ton-core";

export function getLastNonZeroIndex(levelExpired: Dictionary<bigint, bigint> | undefined): bigint | undefined {
    if (!levelExpired) {
        return undefined;
    }

    const keys = Array.from(levelExpired.keys());
    for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        const value = levelExpired.get(key);
        if (value !== BigInt(0)) {
            return key;
        }
    }

    return undefined; // return undefined if no non-zero value is found
}