import { Badge, Button, List, ListItem } from "konsta/react";
import { GiArmorUpgrade } from "react-icons/gi"

export function ManagePage() {
    
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
                    <Button className="p-3 !h-[64px] !w-[64px]  flex items-center justify-center rounded-full">
                        <GiArmorUpgrade className="w-9 h-9"/>
                    </Button>
                    <p className="text-white underline">Upgrade</p>
                </div>
            </div>

            
            <List strong inset  className="w-full">
                <ListItem
                title="Foo Bar"
                after={<Badge colors={{ bg: 'bg-gray-500' }}>0</Badge>}
                />

                <ListItem
                title="Ivan Petrov"
                after={<Badge>CEO</Badge>}
                />

                <ListItem
                title="John Doe"
                after={<Badge colors={{ bg: 'bg-green-500' }}>5</Badge>}
                />

                <ListItem
                title="Jane Doe"
                after={<Badge colors={{ bg: 'bg-yellow-500' }}>NEW</Badge>}
                />
            </List>
        </div>
    );
}