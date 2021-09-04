import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type CustomTabsProps = {
  value: number;
  setValue: any;
  handleChange: any;
  values: {
    label: string;
    content: JSX.Element;
  }[];
};

export default function CustomTabs({
  value,
  setValue,
  handleChange,
  values,
}: CustomTabsProps) {
  const tabContent = (index: number) => {
    return values[index].content;
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        {values.map((v, index) => {
          return <Tab label={v.label} {...a11yProps(index)} />;
        })}
      </Tabs>
      {tabContent(value)}
    </div>
  );
}
