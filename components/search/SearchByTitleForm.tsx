import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Input } from '@material-ui/core';
import router from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      padding: 10,
    },
  }),
);

function SearchByTitleForm(){

    const classes = useStyles();

    const [title, setTitle] = useState('');
    const changeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    }
    const searchByTitle = () => {
      router.push({
        pathname : "/search/servicelist",
        query : {
          searchType: encodeURIComponent('serviceId'),
          serviceName : encodeURIComponent(title)
        }
      })
    }

    return(
        <div style={{ width: '40%', float: 'right' }}>
        <Input style={{ width: '80%' }} placeholder="검색어를 입력해주세요." inputProps={{ 'aria-label': 'description' }} value={title} onChange={changeTitle}/>
        <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={searchByTitle}>
          <SearchIcon />
        </IconButton>
      </div>
    )
}

export default SearchByTitleForm;