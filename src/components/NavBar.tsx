import { Tabbar, TabbarLink, Icon, } from 'konsta/react'
import { useState } from 'react'
import { HomePage } from './Home';
import { TonConnectButton } from '@tonconnect/ui-react';
import { MenuIcon } from './MenuIcon';

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
              ios={<MenuIcon num={'1'}  />}
              material={<MenuIcon num={'1'}  />}
            />
          }
          label={activeTab === "tab-1" ? <p>Home</p> : ""}
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
          label={activeTab === "tab-2" ? <p>Manage</p> : ""}
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
          label={activeTab === "tab-3" ? <p>More</p> : ""}
        />
      </Tabbar>

      {activeTab === "tab-1" && <HomePage/>}
      {activeTab === "tab-2" && <div></div>}
      {activeTab === "tab-3" && <div></div>}
    </>
  );
}