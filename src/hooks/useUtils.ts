import { Dictionary } from "ton-core";

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