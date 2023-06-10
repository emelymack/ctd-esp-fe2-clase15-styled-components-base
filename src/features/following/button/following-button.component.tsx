import { FC } from 'react';
import styled from 'styled-components';

type FollowingButtonProps = {
  isFav: boolean;
  onToggleFavorite: (setFav: boolean) => void;
};

const StyledFollowingBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
`
const StyledFollowingStar = styled.img`
  width: 35px;
  height: 35px;
`

const FollowingButtonComponent: FC<FollowingButtonProps> = ({
  isFav,
  onToggleFavorite
}: FollowingButtonProps) => {
  const src = isFav ? '/images/star-filled.png' : '/images/star.png';
  const alt = isFav ? 'is_favorite' : 'is_not_favorite';

  return (
    <StyledFollowingBtn onClick={() => onToggleFavorite(!isFav)}>
      <StyledFollowingStar src={src} alt={alt} />
    </StyledFollowingBtn>
  );
};

export default FollowingButtonComponent;
