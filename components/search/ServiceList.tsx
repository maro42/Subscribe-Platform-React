import React from 'react';
import CustomImageListItem from '../common/CustomImageListItem';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageList } from '@material-ui/core';

type serviceListItem = {
    'serviceId': number,
    'serviceName': string,
    'thumbnailImage': string
};

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

function ServiceList(resultData: any) {

    const classes = useStyles();

    const result = resultData.resultData;
    const resultList = result.content;
    const totCnt = result.totCnt;

    return (
        <div className={classes.root}>
            {result && totCnt != 0 ? (
                <ImageList>
                    {resultList.map((item: serviceListItem) => <CustomImageListItem src={item.thumbnailImage} title={item.serviceName} subTitle={""} />)}
                </ImageList>) : "조회결과가 없습니다."}
        </div>
    );
}

export default ServiceList;