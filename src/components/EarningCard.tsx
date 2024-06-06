

interface EarningCardProps {
  title: string;
  value: string;
}

export const EarningCard: React.FC<EarningCardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-[19px] bg-[#084564] w-[157px] h-[97px] p-3">
        <p className="text-base font-bold text-[#FFFFFF] opacity-[50%]">{title}</p>
        <p className="text-[32px] font-bold leading-7">{value}</p>
    </div>
  )
}