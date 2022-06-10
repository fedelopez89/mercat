import styled from "styled-components";

export const ProductCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  height: 17rem;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  padding: 0rem 0rem 0.5rem 1rem;
  width: 13rem;
  align-items: stretch;
`;

export const ProductName = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export const ProductType = styled.p`
  font-size: 0.75rem;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;
  color: grey;
  font-weight: 500;
  margin: 10px 0;
  text-align: center;
`;

export const imgURL = styled.img`
  min-height: 35%;
  cursor: pointer;
  width: 35%;
  &:hover {
    transform: scale(1.15);
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60%;
`;
