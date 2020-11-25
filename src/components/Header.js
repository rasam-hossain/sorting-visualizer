import React from "react";

import {
  Button,
  SortButton,
  Wrapper,
  SortWrapper,
  NonButton,
} from "./header.style";

export default function Header({ rangeChange, updateList }) {
  return (
    <Wrapper>
      <NonButton>Sorting Visualizer</NonButton>
      <Button onClick={updateList}>Random</Button>
      <Button onClick={rangeChange}>Input Range</Button>
      <SortWrapper>
        <SortButton>#Bubble</SortButton>
        <SortButton>#Merge</SortButton>
        <SortButton>#Heap</SortButton>
        <SortButton>#Quick</SortButton>
      </SortWrapper>
    </Wrapper>
  );
}
