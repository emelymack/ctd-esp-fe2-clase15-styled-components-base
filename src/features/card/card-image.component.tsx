import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledCardImg = styled.div`
  width: 300px;
  height: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #d0d0d0;
`
const CardImage: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <StyledCardImg>{children}</StyledCardImg>
);

export default CardImage;
