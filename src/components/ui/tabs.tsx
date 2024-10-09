'use client';

import { Card, CardBody, Tab, Tabs as TabsNextUI } from '@nextui-org/react';
import { set } from 'react-hook-form';

interface Props {
  tab: number | string;
  setTab: React.Dispatch<React.SetStateAction<number | string>>;
  children?: React.ReactNode;
}
export default function Tabs({ tab, setTab, children }: Props) {
  return (
    <div className="flex w-full flex-col">
      <TabsNextUI
        onSelectionChange={(value) => setTab(value)}
        selectedKey={tab}
        aria-label="Options"
        classNames={{
          tab: 'rounded-none bg-red w-fit data-[selected=true]:bg-gradient-2 p-0 h-[2.8125rem]',
          tabList: 'bg-transparent p-0 gap-0 rounded-none',
          cursor: 'rounded-none bg-transparent',
          tabContent:
            'w-full h-full rounded-none min-w-[8.5rem] flex items-center justify-center group-data-[selected=true]:mb-[2px] bg-background1 group-data-[selected=true]:text-white group-data-[selected=true]:font-bold text-[1.125rem] leading-[1.575rem] text-white',
        }}
      >
        {children}
      </TabsNextUI>
    </div>
  );
}
