import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledCardBody = styled.div`
  padding: 10px;
  border: 1px solid #d0d0d0;
  border-top: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CardBody: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <StyledCardBody>{children}</StyledCardBody>
);

export default CardBody;
