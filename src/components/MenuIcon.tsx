interface MenuIconProps {
  num: string;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ num }) => {
  return (
    <div className="w-8 h-8 rounded-full border-[2px]">{ num }</div>
  )
}