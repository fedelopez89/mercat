import styled from "styled-components";

export const CartPreview = styled.div`
  background: azure;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: block;
  position: absolute;
  right: 0px;
  top: 50px;
  z-index: 99;
`;

export const CartItems = styled.ul`
  height: 320px;
  overflow-y: auto;
  padding: 0 10px;
  width: 330px;
`;

export const NoData = styled.p`
  align-items: center;
  display: flex;
  margin-top: 40%;
  justify-content: center;
`;

export const CartItem = styled.li`
  align-items: center;
  display: flex;
  padding: 8px;
`;

export const CartItemImage = styled.img`
  height: 48px;
  width: 48px;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
  margin-left: 16px;
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
  margin-left: 16px;
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
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ProductButton = styled.button`
  height: 15px;
  background-color: white;
  color: black;
  font-size: 17px;
  line-height: 5px;
  margin-left: 12px;
  padding: 0;
  text-align: center;
  width: 15px;
  &:hover {
    color: red;
  }
`;

export const ButtonProceed = styled.button`
  background: orange;
  display: block;
  padding: 0.35rem;
  margin: 1rem auto;
`;
