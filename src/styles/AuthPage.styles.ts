import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const AuthContent = styled.div`
  @media (min-width: 960px) {
    padding: 30px 60px 0;
    margin: 0;
  }
  width: 90%;
  max-width: 416px;
  margin: auto;
  h2 {
    font: bold 24px/29px 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    margin-bottom: 26px;
  }
`;
