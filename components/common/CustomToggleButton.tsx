import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

type ToggleButtonProps = {
    value : any;
    onChange :  (event: React.MouseEvent<HTMLElement>, newAlignment: any) => void;
    values :{
        children : JSX.Element;
        value : any;
        disabled ?: boolean;
        label? : string;
    }[]

}

export default function ToggleButtons({value,  onChange,values} : ToggleButtonProps) {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={onChange}
    >
      {
          values.map((v, index)=>{
            return (
                <ToggleButton value = {v.value} key={index} disabled = {v.disabled} aria-label={v.label}>
                    {v.children}
                </ToggleButton>
            )
          })
      }

    </ToggleButtonGroup>
  );
}