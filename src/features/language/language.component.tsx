import { FC } from 'react';
import { useLanguage } from 'features/language/index';
import styled from 'styled-components';

const StyledLanguage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 0;
`
const StyledLanguageBtn = styled.button<{active: boolean}>`
  background-color: ${({active}) => active ? '#17589f' : 'white'};
  color: ${({active}) => active ? 'white' : '#000000'};
  padding: 4px 2px;
  margin-right: 10px;
`
const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <StyledLanguage>
      <StyledLanguageBtn
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'active' : ''}
        active={language === 'SPANISH'}
      >
        {t('language.spanish')}
      </StyledLanguageBtn>
      <StyledLanguageBtn
        onClick={() => setLanguage('ENGLISH')}
        active={language === 'ENGLISH'}
      >
        {t('language.english')}
      </StyledLanguageBtn>
      <StyledLanguageBtn
        onClick={() => setLanguage('PORTUGUESE')}
        active={language === 'PORTUGUESE'}  
      >
        {t('language.portuguese')}
      </StyledLanguageBtn>
    </StyledLanguage>
  );
};
export default LanguageComponent;
