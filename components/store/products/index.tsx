import ImageList from '@material-ui/core/ImageList';
import React from 'react';
import CustomImageListItem from '../../common/CustomImageListItem';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const tempData = [
  {
    id: 1,
    title: 'test',
    thumbnail: '/images/cancel.png',
  },
  {
    id: 2,
    title: 'test',
    thumbnail: '/images/cancel.png',
  },
  {
    id: 3,
    title: 'test',
    thumbnail: '/images/cancel.png',
  },
  {
    id: 4,
    title: 'test',
    thumbnail: '/images/cancel.png',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
  }),
);

function Products() {
  //이미지 리덕스로 가져와서 네네..
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList>
        {tempData.map((data, index) => {
          return (
            <CustomImageListItem
              key={data.id}
              title={data.title}
              src={data.thumbnail}
              subTitle={`${data.title}${data.id}`}
            />
          );
        })}
      </ImageList>
    </div>
  );
}

export default Products;
