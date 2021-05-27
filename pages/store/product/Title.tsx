import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import { SelectBox } from '../../../components/common';


type FormSelectBoxProps = {
    values : {value:string, label:string}[];
    value:any;
   onChange:(event: React.ChangeEvent<{
       name?: string;
       value: unknown;
   }>) => void;
   label ?: string;
   text ?: string;
}

function FormSelectBox(
    {
        value, values, onChange,label, text
    }:FormSelectBoxProps

){

    return(
        <FormControl>
            {
                label &&(
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                    {label}
                  </InputLabel>
                )
            }
       
        <SelectBox values = {values} value ={value} onChange={onChange}/>
        {
                text &&(
                    <FormHelperText>{text}</FormHelperText>
                )
            }
        
        </FormControl>
    )

}



type TitleProps = {
    title? : string;
    setTitle? : any;
    category? :string;
    setCategory?:any;
    subCategory?: string;
    setSubcategory? :any;
    categories? : {content : {value:string, label:string}[], totalCount: number};
    subCategories? :any;
}

function Title({
    title,
setTitle,
category,
setCategory,
subCategory,
setSubcategory,
categories,
subCategories
} : TitleProps){

    const handleCategorySelect = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        setCategory( event.target.value);
      },[setCategory]);
    
      const handleSubCategorySelect = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        setSubcategory( event.target.value);
      },[setSubcategory]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            setTitle(e.target.value);
        },
        [setTitle],
      );


    return(
        
<ProductMainContainer>

    <div style={{width:'800px'}}>
        <TextField id="standard-basic" label="상품 타이틀을 입력해 주세요" 
         style={{ margin: 8 ,width : '100%' }}
         margin="dense"
         inputProps = {{onChange :handleInputChange}}
        />
    </div>
      

      <FormSelectBox values = {categories!.content} value = {category} onChange = {handleCategorySelect} label = '1차 카테고리' text = '1차 카테고리를 선택해 주세요'/>
      <br/>
      <FormSelectBox values = {subCategories!.content} value = {subCategory} onChange = {handleSubCategorySelect}  label = '2차 카테고리' text = '2차 카테고리를 선택해 주세요'/>
        
</ProductMainContainer>

    )
}

export default Title;


export const ProductMainContainer = styled.div`
    width : 100%;
    height : 700px;
    background-color : #fff;
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`
