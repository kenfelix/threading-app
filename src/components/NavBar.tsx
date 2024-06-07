import { Tabbar, TabbarLink, Icon, } from 'konsta/react'
import { useState } from 'react'
import { MdToday, MdFileUpload, MdHouse } from 'react-icons/md';
import { HomePage } from './Home';
import { TonConnectButton } from '@tonconnect/ui-react';
import { MenuIcon } from './MenuIcon';

export function NavBar() {
    const [activeTab, setActiveTab] = useState('tab-1');
  return (
    <>
      <TonConnectButton />

      <Tabbar icons={true} className="left-0 bottom-0 fixed">
        <TabbarLink
          active={activeTab === "tab-1"}
          onClick={() => setActiveTab("tab-1")}
          icon={
            <Icon
              ios={<MenuIcon num={'1'}  />}
              material={<MenuIcon num={'1'}  />}
            />
          }
        />
        <TabbarLink
          active={activeTab === "tab-2"}
          onClick={() => setActiveTab("tab-2")}
          icon={
            <Icon
              ios={<MenuIcon num={'1'}  />}
              material={<MenuIcon num={'1'}  />}
            />
          }
        />
        <TabbarLink
          active={activeTab === "tab-3"}
          onClick={() => setActiveTab("tab-3")}
          icon={
            <Icon
              ios={<MenuIcon num={'1'}  />}
              material={<MenuIcon num={'1'}  />}
            />
          }
        />
      </Tabbar>

      {activeTab === "tab-1" && <HomePage/>}
      {activeTab === "tab-2" && <div></div>}
      {activeTab === "tab-3" && <div></div>}
    </>
  );
}