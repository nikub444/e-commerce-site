import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 900px) {
    width: 500px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 100px;
  }
`;
