import React, { useEffect } from 'react';
import ImageList from '@material-ui/core/ImageList';
import CustomImageListItem from '../../common/CustomImageListItem';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../../src/reducers/store/mypage';
import { Service } from '../../../src/lib/props/store';

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getServices({
        pageNum: 0,
        size: 10,
      }),
    );
  }, [dispatch]);

  const { service } = useSelector(({ storeMypageReducer }) => ({
    service: storeMypageReducer.service,
  }));

  console.log(service);

  return (
    <div className={classes.root}>
      <ImageList>
        {service.content?.map((data: Service, index: number) => {
          return (
            <CustomImageListItem
              key={index}
              title={data.serviceName}
              src={data.thumbnailImage}
              subTitle={`${data.serviceName}${data.serviceId}`}
            />
          );
        })}
      </ImageList>
    </div>
  );
}

export default Products;
