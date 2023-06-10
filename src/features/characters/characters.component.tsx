import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { CharacterCardComponent } from 'features/characters/card';
import styled from 'styled-components';

export type CharactersComponentProps = {
  ids: number[];
};

const StyledCharacters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
`

const CharactersComponent: FC<CharactersComponentProps> = ({ ids }: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids });

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const character = !Array.isArray(characters) ? characters : undefined;

  return (
    <StyledCharacters>
      {Array.isArray(characters) &&
        characters.map((character) => (
          <CharacterCardComponent character={character} key={character.id} />
        ))}
      {character && <CharacterCardComponent character={character} />}
    </StyledCharacters>
  );
};

export default CharactersComponent;
