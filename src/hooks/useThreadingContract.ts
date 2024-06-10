import Threading from "../contracts/threading";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract, toNano } from "ton-core";
import { useQuery } from "@tanstack/react-query";
import { CHAIN } from "@tonconnect/protocol";


export function useThreadingContract() {
  const { client } = useTonClient();
  const { sender, network } = useTonConnect();

  const threadingContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new Threading(
      Address.parse(
        network === CHAIN.MAINNET
          ? ""
          : "EQAhWAaT73IUYxh_Gjs6ioPk9px3gZ9bUR3JgZI3igic0A30"
      )
    );
    return client.open(contract) as OpenedContract<Threading>;
  }, [client]);

  const { data: usersAddressList, isFetching } = useQuery(
    {
      queryKey: ["usersAddressList",],
      queryFn: async () => {
        if (!threadingContract) return null;
        return (await threadingContract.getUserList())
      },
      refetchInterval: 1000,
      staleTime: 60000,
      gcTime: 300000
    }
  );

  const { data: users } = useQuery(
    {
      queryKey: ["users",],
      queryFn: async () => {
        if (!threadingContract) return null;
        return (await threadingContract.getUsers())
      },
      refetchInterval: 3000,
      staleTime: 60000,
      gcTime: 300000
    }
  );

  return {
    isFetching,
    usersAddressList,
    users,
    address: threadingContract?.address.toString(),
    sendWithdraw: (referrer: string) => {
      return threadingContract?.send(
        sender,
        {
          value: toNano("0.38")
        },
        {
          $$type: "Withdraw",
          amount: toNano("0.3"),
          data: Address.parse(referrer)
        }
      );
    },
    upgrade: (amount: string, level: number, ton: string) => {
      return threadingContract?.send(
        sender,
        {
          value: toNano(ton)
        },
        {
          $$type: "BuyLevel",
          amount: toNano(amount),
          level: BigInt(level)
        }
      );
    },
  };
}