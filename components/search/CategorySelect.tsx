import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useState } from 'react';
import router from 'next/router';
import { useQuery } from 'react-query';
import { getCatories } from '../../src/lib/api/service';
import { Loading } from '../common';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

function CategorySelect() {
    const classes = useStyles();

    const { data, isError, isLoading } = useQuery('getCategories', getCatories, { refetchOnWindowFocus: false})

    const [category, setCategory] = useState('0');
    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(e.target.value as string);

        router.push({
            pathname: "/search/servicelist",
            query: {
                searchType: encodeURIComponent('category'),
                categoryId: encodeURIComponent(e.target.value as string)
            }
        })
    }

    return (
        <>
            {(isError && <div>오류가 발생했습니다.</div>)}
            {isLoading ? <Loading /> : <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={handleChange}
                >
                    <MenuItem value='0'><em>카테고리</em></MenuItem>
                    {data && data.content.map((item:{categoryId : string, categoryName : string}) => (<MenuItem value={item.categoryId}>{item.categoryName}</MenuItem>))}
                </Select>
            </FormControl>}
        </>
    );
}

export default CategorySelect;