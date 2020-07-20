import React from "react";
import styled from "styled-components";

import { COLORS } from "app-constants";

const ROIContainer = styled.div`
  text-align: left;
  font-weight: 700;
  padding: 4rem;
  background-color: white;
  border-radius: 4px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    grid-template-columns: 59% 2% 39%;
    font-size: 1.2rem;
  }

  label {
    margin-bottom: 1rem;
  }

  .roi__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .roi__label {
    width: 60%;
    display: flex;
    flex-direction: column;
  }

  .roi__values {
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
  }
`;

const ROIInner = styled.div`
  padding: 4rem;
  background-color: ${COLORS.LIGHT_LIME};
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid ${COLORS.BLUE};
  padding: 1.5rem 3.5rem;
  border-radius: 4px;
  font-size: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    font-size: 80%;
  }
`;

const Value = styled.span`
  background: rgb(165 176 194);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 5.5.rem;
  border-radius: 4px;
  min-width: 10rem;
  width: fit-content;
  min-height: 5.5rem;
  color: ${COLORS.BLUE};
  padding: 0 2rem;
`;

const Price = styled.input`
  background: rgb(165 176 194);
  border-radius: 4px;
  border: none;
  font-size: 1.8rem;
  font-family: MuseoSans500;
  /* min-width: 8rem; */
  width: 10rem;
  min-height: 5.5rem;
  text-align: center;
  color: ${COLORS.BLUE};
  align-self: flex-end;
  padding: 0 2rem;
  appearance: none;

  /* input[type="number"] {
    -moz-appearance: textfield;
  } */
`;

const ROICalculator = ({ data }) => {
  const [quantity, setQuantity] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  return (
    <ROIContainer>
      <ROIInner>
        <div className="roi__row">
          <div className="roi__label">
            <label htmlFor="">Number of shares</label>
            <Input
              onChange={(e) => setQuantity(e.target.value)}
              min="0"
              type="number"
            />
          </div>
          <div className="roi__values">
            <label htmlFor="">Price (USD)</label>
            <Price
              autoFocus
              value={price}
              min="0"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            ></Price>
          </div>
        </div>

        <div className="roi__row">
          <label className="roi__label" htmlFor="">
            Total Cost (USD)
          </label>
          <Value className="roi__values">{quantity * price}</Value>
        </div>
        <div className="roi__row">
          <label className="roi__label" htmlFor="">
            Total Return (USD)
          </label>
          <Value className="roi__values">
            {quantity * price * 0.15 + quantity * price}
          </Value>
        </div>
      </ROIInner>
    </ROIContainer>
  );
};

export default ROICalculator;
