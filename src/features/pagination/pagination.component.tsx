import { FC } from 'react';
import PaginationInfo from 'features/pagination/pagination.types';
import styled from 'styled-components';

type PaginationProps = {
  pagination: PaginationInfo;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

const Pagination: FC<PaginationProps> = ({
  pagination,
  onPreviousPage,
  onNextPage
}: PaginationProps) => {
  const onPrev = () => {
    onPreviousPage();
  };

  const onNext = () => {
    onNextPage();
  };

  const StyledPagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
  `

  return (
    <StyledPagination>
      <button disabled={!pagination.prev} onClick={() => onPrev()} className={'button primary'}>
        Previous
      </button>
      <button disabled={!pagination.next} onClick={() => onNext()} className={'button primary'}>
        Next
      </button>
    </StyledPagination>
  );
};

export default Pagination;
