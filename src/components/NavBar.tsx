import { Tabbar, TabbarLink, Icon, } from 'konsta/react'
import { useState } from 'react'
import { MdToday, MdFileUpload, MdHouse } from 'react-icons/md';
import { HomePage } from './Home';

export function NavBar() {
    const [activeTab, setActiveTab] = useState('tab-1');
  return (
    <>

      <Tabbar icons={true} className="left-0 bottom-0 fixed">
        <TabbarLink
          active={activeTab === "tab-1"}
          onClick={() => setActiveTab("tab-1")}
          icon={
            <Icon
              ios={<MdHouse className="w-7 h-7" />}
              material={<MdHouse className="w-6 h-6" />}
            />
          }
        />
        <TabbarLink
          active={activeTab === "tab-2"}
          onClick={() => setActiveTab("tab-2")}
          icon={
            <Icon
              ios={<MdToday className="w-7 h-7" />}
              material={<MdToday className="w-6 h-6" />}
            />
          }
        />
        <TabbarLink
          active={activeTab === "tab-3"}
          onClick={() => setActiveTab("tab-3")}
          icon={
            <Icon
              ios={<MdFileUpload className="w-7 h-7" />}
              material={<MdFileUpload className="w-6 h-6" />}
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