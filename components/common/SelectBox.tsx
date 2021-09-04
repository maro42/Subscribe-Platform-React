import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

type CustomSelectBoxProps = {
  values: {
    value: string | number;
    label: string;
  }[];
  defaultValue?: string;
  onChange?: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode,
  ) => void;
  label?: string;
  placeHolder?: string;
  value?: any;
  displayEmpty?: boolean;
};

export default function CustomSelectBox({
  values,
  defaultValue,
  onChange,
  label,
  placeHolder,
  value,
  displayEmpty,
}: CustomSelectBoxProps) {
  return (
    <>
      <Select value={value} onChange={onChange} displayEmpty={displayEmpty}>
        {placeHolder && (
          <MenuItem value="" disabled>
            {placeHolder}
          </MenuItem>
        )}

        {values &&
          values.map((v, index) => {
            return (
              <MenuItem value={v.value} key={index}>
                {v.label}
              </MenuItem>
            );
          })}
      </Select>
    </>
  );
}
