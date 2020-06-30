import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
`;

export const CategoryBtn = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 8px;
`;
