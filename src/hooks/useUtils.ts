
import { Address } from "ton-core";
import { useTonConnect } from "./useTonConnect";

export function useUtils(): {
  bounceableStringAddress: string;
  bounceableAddress: Address;
} {
  
  const { wallet } = useTonConnect();

  return {
    bounceableStringAddress: Address.parse(wallet!).toString({ bounceable: true, testOnly: false }),
    bounceableAddress: Address.parse(Address.parse(wallet!).toString({ bounceable: true, testOnly: false })),
  };
}