import { CircularProgress } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const LoadingBlock = styled.div`
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  //background: rgba(0, 0, 0, 0.25);
  //zindex: 10000000000000;
`;

const LoadingContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
bottom: 50%;
zindex: 10000000000000;
`;

function Loading(){
    return (
        <LoadingBlock>
            <LoadingContent>
                <CircularProgress thickness={7}/>
            </LoadingContent>
        </LoadingBlock>
    );
};

export default Loading;