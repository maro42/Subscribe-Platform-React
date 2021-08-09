import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useState } from 'react';
import router from 'next/router';

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

    const [category, setCategory] = useState('0');
    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(e.target.value as string);

        router.push({
            pathname: "/search/servicelist",
            query: {
                searchType: encodeURIComponent('category'),
                category: encodeURIComponent(e.target.value as string)
            }
        })
    }

    return (
        <>
            <FormControl className={classes.formControl}>
                {/* <InputLabel id="demo-simple-select-label">카테고리</InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={handleChange}
                >
                    <MenuItem value='0'><em>카테고리</em></MenuItem>
                    <MenuItem value={1}>식품</MenuItem>
                    <MenuItem value={2}>생활</MenuItem>
                    <MenuItem value={3}>패션의류</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default CategorySelect;