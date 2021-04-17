import React, { useEffect, useState } from 'react';
import Button from './Button';

type paginationProps = {
    totCnt : number,
    searchFunc : Function,
    index : number
}

const Pagination = ({totCnt, searchFunc, index}:paginationProps) => {
    
  // 필요한 페이지 갯수
  const totalPage = Math.ceil(totCnt / 10);

  // 페이지 리스트
  const array = [];
  for (let i = 0; i < totalPage; i++) {
    array.push(i + 1);
  }

  // 페이징해서 보여지는 페이지 범위(최대 1~10까지 나타냄)
  const [currRange, setCurrRange] = useState({
    start: 1,
    end: 10, // 한번에 10페이지씩 보여줄예정
  });

  useEffect(() => {
    // 페이지블록 설정
    if (index % 10 === 1) {
      // 현재페이지가 페이지블록의 시작일 때
      setCurrRange({
        ...currRange,
        start: index,
        end: index + 9,
      });
    }
    if (index % 10 === 0) {
      // 현재페이지가 페이지블록의 끝일 때
      setCurrRange({
        ...currRange,
        start: (index / 10 - 1) * 10 + 1,
        end: index,
      });
    } else if (index === totalPage && totalPage !== 1) {
      // 현재페이지가 마지막 페이지일 때
      setCurrRange({
        ...currRange,
        start: totalPage - (totalPage % 10) + 1,
        end: totalPage,
      });
    }
  }, [index]);

  // 페이지번호 클릭 시
  const onClick = (idx:number) => {
    searchFunc(idx);
  };
    
    return (
        <div>
            <Button onClick={() => onClick(1)}>처음</Button>
            {index === 1 ? (    // 현재페이지가 처음페이지면 이전 눌러도 반응없음
                <Button>이전</Button>
            ):(
                <Button onClick={() => onClick(index - 1)}>이전</Button>
            )}
            {array.slice(currRange.start - 1, currRange.end).map((arr) => (
                <span key={arr} onClick={() => onClick(arr)}>
                <a>{arr === index ? <strong>{arr}</strong> : arr}</a>
                </span>
            ))}
            {index === totalPage ? (    // 마지막 페이지면 다음 눌러도 반응없음
                <Button>다음</Button>
            ):(
                <Button onClick={() => onClick(index + 1)}>다음</Button>
            )}
            <Button onClick={() => onClick(totalPage)}>끝</Button>
        </div>
    );
};

export default Pagination;