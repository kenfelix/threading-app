export function getLastNonZeroIndex(levelExpired: Map<bigint, bigint> | undefined): bigint | undefined {
    if (!levelExpired) {
        return undefined;
    }

    const entries = Array.from(levelExpired.entries());
    for (let i = entries.length - 1; i >= 0; i--) {
        const [key, value] = entries[i];
        if (value !== BigInt(0)) {
            return key;
        }
    }

    return undefined; // return undefined if no non-zero value is found
}