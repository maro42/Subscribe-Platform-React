import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

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
      width: 400,
      height: 350,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

type CustomImageListItemType = {
  src: string;
  title: string;
  subTitle: string;
  // rowHeight?: number;
  // width?: number;
};

export default function CustomImageListItem({
  src,
  title,
  subTitle,
}: // rowHeight,
// width,
CustomImageListItemType) {
  const classes = useStyles();

  return (
    <ImageListItem key={src} style={{ width: 500 }}>
      <img src={'/images/cancel.png'} alt={'test'} style={{ width: 300 }} />
      <ImageListItemBar title={title} subtitle={<span>{subTitle}</span>} />
    </ImageListItem>
  );
}
