import styled from '@emotion/styled';

export const AppStyled = styled.div`
  text-align: center;
  background-color: ${({ theme }: any) => theme.color.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  color: white;
`;

export const AppHeader = styled.header`
  font-size: calc(10px + 2vmin);
  padding-bottom: 30px;
`;
