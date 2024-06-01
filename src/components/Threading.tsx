import { TonConnectButton } from "@tonconnect/ui-react";
// import { useThreadingContract } from "../hooks/useThreadingContract";
// import { useTonConnect } from "../hooks/useTonConnect";


export function Threading() {
//   const { connected } = useTonConnect();
//   const {value, address, sendWithdraw, isFetching } = useThreadingContract();

  return (
    <div className="Container">
        
      <TonConnectButton />

      
    </div>
  );
}