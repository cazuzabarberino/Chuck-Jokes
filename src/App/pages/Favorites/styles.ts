import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: flex-start;

  > p {
    margin-top: 16px;
    font-family: "Pangolin", cursive;
    font-size: 24px;
  }
`;

export const FavoriteFactsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: flex-end;
`;
