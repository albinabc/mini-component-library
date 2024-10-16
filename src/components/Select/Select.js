import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  background-color: ${COLORS.transparentGray15};
  display: inline;
  border: none;
  height: 43px;
  padding: 6px;
  width: fit-content;
  border-radius: 4px;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
