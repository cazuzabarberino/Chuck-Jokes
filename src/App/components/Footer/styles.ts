import styled from "styled-components";

export const Container = styled.div`
  height: 160px;
  background: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;

  a {
    color: ${({ theme }) => theme.primary};
  }

  div {
    display: grid;
    grid-auto-flow: column;
    column-gap: 32px;
    margin-top: 16px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;
