import { Tabbar, TabbarLink, Icon, } from 'konsta/react'
import { useState } from 'react'
import { HomePage } from './Home';
import { TonConnectButton } from '@tonconnect/ui-react';
import { MdHomeFilled, MdOutlineReadMore, MdGroups2 } from 'react-icons/md';
import { IoIosHome, IoIosSquareOutline, IoIosPeople } from 'react-icons/io';
import { ManagePage } from './Manage';
import { MorePage } from './More';

export function NavBar() {
    const [activeTab, setActiveTab] = useState('tab-1');
  return (
    <>
      <TonConnectButton />

      <Tabbar icons={true} labels={true} className="left-0 bottom-0 fixed">
        <TabbarLink
          active={activeTab === "tab-1"}
          onClick={() => setActiveTab("tab-1")}
          icon={
            <Icon
              ios={<IoIosHome className='w-8 h-8'  />}
              material={<MdHomeFilled className='w-8 h-8'  />}
            />
          }
          label={activeTab === "tab-1" ? <p>Home</p> : ""}
        />
        <TabbarLink
          active={activeTab === "tab-2"}
          onClick={() => setActiveTab("tab-2")}
          icon={
            <Icon
              ios={<IoIosPeople className='w-8 h-8'  />}
              material={<MdGroups2 className='w-8 h-8'  />}
            />
          }
          label={activeTab === "tab-2" ? <p>Manage</p> : ""}
        />
        <TabbarLink
          active={activeTab === "tab-3"}
          onClick={() => setActiveTab("tab-3")}
          icon={
            <Icon
              ios={<IoIosSquareOutline className='w-8 h-8'  />}
              material={<MdOutlineReadMore className='w-8 h-8'  />}
            />
          }
          label={activeTab === "tab-3" ? <p>More</p> : ""}
        />
      </Tabbar>

      {activeTab === "tab-1" && <HomePage/>}
      {activeTab === "tab-2" && <ManagePage/>}
      {activeTab === "tab-3" && <MorePage/>}
    </>
  );
}