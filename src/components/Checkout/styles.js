import styled from "styled-components";

export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 70vw;
  margin: auto;
`;

export const NoData = styled.p`
  align-items: center;
  display: flex;
  margin-top: 20%;
  justify-content: center;
`;

export const CartItem = styled.li`
  min-width: 70vw;
  max-width: 70vw;
  align-items: center;
  display: flex;
  padding: 8px 20px;
  border: 1px solid grey;
  justify-content: space-around;
`;

export const CartItemImage = styled.img`
  width: 4.5vw;
`;

export const ProductInfo = styled.div`
  max-width: 25%;
  min-width: 25%;
  margin-left: 30px;
`;

export const ProductName = styled.p`
  color: black;
  font-size: 14px;
`;

export const ProductPrice = styled.p`
  color: black;
  font-weight: 700;
  &:before {
    content: "$ ";
  }
`;

export const ProductTotal = styled.div`
  width: 20%;
  max-width: 20%;
  margin-left: 25px;
`;

export const ProductQuantity = styled.p`
  color: black;
  font-size: 14px;
  text-align: right;
`;

export const ProductAmount = styled.p`
  color: black;
  font-weight: 700;
  text-align: right;
  &:before {
    content: "$ ";
  }
`;

export const ProductOptions = styled.div`
  margin-left: 35px;
  display: flex;
  flex-direction: row;
  align-self: center;
`;
