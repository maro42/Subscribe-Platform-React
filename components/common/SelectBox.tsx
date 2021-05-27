import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

type CustomSelectBoxProps = {
    values : {
        value : string;
        label : string;
    }[],
    defaultValue? : string;
    onChange? : ((event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>, child: React.ReactNode) => void),
    label? : string,
    placeHolder? : string
    value: any;
}

export default function CustomSelectBox({
    values, 
    defaultValue,
    onChange,
    label,
    placeHolder,
    value
}:CustomSelectBoxProps) {
  return (
    <>
        <Select
          value={value}
          onChange={onChange}
        
        >
            {
                placeHolder && (
                    <MenuItem value="" disabled>
                    {placeHolder}
                  </MenuItem>
                ) 
            }

            {
                values && values.map((v, index)=>{
                   return( <MenuItem value={v.value} key = {index}>
                        {v.label}
                    </MenuItem>)
                })
            }

         
        </Select>
     
    
    </>
  );
}