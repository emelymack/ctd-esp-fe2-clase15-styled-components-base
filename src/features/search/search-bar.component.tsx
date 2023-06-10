import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { searchLocations } from 'features/locations/locations.slices';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchBar: FC = () => {
  const locationsQuery = useAppSelector((state) => state.locations.query);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchLocations(e.target.value));
    navigate('/');
  };

  const StyledSearchForm = styled.form`
    display: flex;
    justify-content: space-around;
    height: fit-content;
    width: 30%;
    border-radius: 0.5rem;
    margin-right: 5%;
    padding: 0 1rem;
    border: 1px solid grey;
    transition: all 0.8s ease;
    &:hover{
      box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    };
    &{
      @media (max-width: 1000px) {
        margin-right: 0;
        font-size: 0.2rem;
        width: 70%;
      }
    }
  `

  const StyledSearchInput = styled.input`
    width: 70%;
    height: fit-content;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0.5rem;
    font-size: 18px;
    cursor: pointer;
  `
  return (
    <StyledSearchForm aria-label="form" onSubmit={(e) => e.preventDefault()}>
      <StyledSearchInput
        aria-label="input"
        placeholder="Search..."
        value={locationsQuery}
        onChange={onSearch}
      />
      <button className={'icon-button'} type="button">
        <FaSearch />
      </button>
    </StyledSearchForm>
  );
};

export default SearchBar;
