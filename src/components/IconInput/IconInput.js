import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--font-size": 14 / 16 + "rem",
    "--underline-thickness": "1px",
  },
  large: {
    "--font-size": 18 / 16 + "rem",
    "--underline-thickness": "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <>
      <Wrapper style={SIZES[size]} width={width}>
        <Input />
        <Icon id={icon} />
        <Placeholder>{placeholder}</Placeholder>
      </Wrapper>
    </>
  );
};

const Input = styled.input`
  position: absolute;
  width: inherit;
  height: inherit;
  opacity: 30%;
`;

const Placeholder = styled.div`
  font-size: var(--font-size);
  display: inline-block;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100px;
  width: ${(p) => p.width}px;
  border-bottom: solid black var(--underline-thickness);
  background: red;
`;

export default IconInput;
