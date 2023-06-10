import CardImage from 'features/card/card-image.component';
import CardBody from 'features/card/card-body.component';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
`

type CompoundCard = FC<PropsWithChildren<object>> & {
  Image: FC<PropsWithChildren<object>>;
  Body: FC<PropsWithChildren<object>>;
};

const Card: CompoundCard = ({ children }: PropsWithChildren<object>) => (
  <StyledCard>{children}</StyledCard>
);

Card.Image = CardImage;
Card.Body = CardBody;

export default Card;
