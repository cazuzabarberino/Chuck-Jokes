import styled from "styled-components";

export const Container = styled.div`
  height: 160px;

  background: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.primary};
`;
