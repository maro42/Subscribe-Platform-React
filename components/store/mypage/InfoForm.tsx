import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Loading } from '../../common';
import { setModifyYn } from '../../../src/reducers/store/mypage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }),
);

function InfoForm() {

  // 리덕스에서 가져온 storeinfo
  const { storeinfo, error, storeinfoLoading } = useSelector(
    ({ storeMypageReducer, loading }) => ({
      storeinfo: storeMypageReducer.storeinfo,
      error: storeMypageReducer.error,
      storeinfoLoading: loading['store/mypage/GET_STOREINFO'],
    }),
  );

  const dispatch = useDispatch();
  // 수정 폼으로 이동
  const goModify = () => {
    dispatch(setModifyYn('Y'));
  }

  const classes = useStyles();

  return (
    <div>
      {error ? (
        <div>에러가 발생했습니다.</div>
      ) : (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Typography
              component="div"
              style={{ backgroundColor: '#cfe8fc', height: '90vh' }}
            >
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>회사명</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography>{storeinfo.store.storeName}</Typography>
                    </Grid>
                  </Grid>

                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>대표자명</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography>{storeinfo.name}</Typography>
                    </Grid>
                  </Grid>

                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>이메일</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography>{storeinfo.email}</Typography>
                    </Grid>
                  </Grid>

                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>사업자번호</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography>{storeinfo.store.businessNum}</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
              <Button onClick={goModify}>수정하기</Button>
            </Typography>
          </Container>
        </React.Fragment>
      )}

      {storeinfoLoading ? <Loading/> : null}
    </div>
  );
}

export default InfoForm;
