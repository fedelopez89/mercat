import styled from "styled-components";

export const CartItems = styled.ul`
  overflow-y: auto;
  padding: 0 10px;
`;

export const NoData = styled.p`
  align-items: center;
  display: flex;
  margin-top: 40%;
  justify-content: center;
`;

export const CartItem = styled.li`
  width: 95%;
  align-items: center;
  display: flex;
  padding: 8px;
`;

export const CartItemImage = styled.img`
  height: 80px;
  width: 9.5%;
`;

export const ProductInfo = styled.div`
  width: 55%;
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
  flex-direction: column;
  align-self: center;
`;

export const ButtonProceed = styled.div`
  display: flex;
  justify-content: space-around;
`;
