/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--box-height": "8px",
    "--bar-height": " 8px",
    "--box-border-radius": "4px",
    "--bar-border-radius": "4px 4px 4px 0px",
  },
  medium: {
    "--box-height": "12px",
    "--bar-height": "12px",
    "--box-border-radius": "4px",
    "--bar-border-radius": "4px",
  },
  large: {
    "--box-height": "24px",
    "--bar-height": " 16px",
    "--box-border-radius": "8px",
    "--bar-border-radius": "4px",
    "--bar-padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size];
  return (
    <Box style={style}>
      <BarWrapper value={value}>
        <Bar></Bar>
      </BarWrapper>
    </Box>
  );
};

const Box = styled.div`
  width: 370px;
  height: var(--box-height);
  border-radius: var(--box-border-radius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--bar-padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  height: 100%;
  overflow: hidden;
`;

const BarWrapper = styled.div`
  height: 100%;
  border-radius: 4px 0px 0px 4px;
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;
`;

export default ProgressBar;
