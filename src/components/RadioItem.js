import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, media } from "../tokens";

const Label = styled.label`
  flex: 100%;
  @media ${media.xLarge} {
    flex: 50%;
  }
  padding: 0.8rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;

  /*transition: background-color 80ms ease;*/
  ${({ checked }) =>
    checked &&
    `
    background-color: ${colors.gray300};
  `}
`;
const Input = styled.input`
  outline: none;
  cursor: pointer;
  margin-right: 1rem;
`;

const RadioItem = ({ checked, name, label, onChange, answered }) => (
  <Label checked={checked}>
    <div style={{ display: `flex`, alignItems: `center` }}>
      <Input
        type="radio"
        checked={checked}
        onChange={() => onChange(name)}
        id={name}
        name={name}
        disabled={answered}
      />{" "}
      {label}
    </div>
  </Label>
);

RadioItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  answered: PropTypes.bool.isRequired
};

export default RadioItem;
