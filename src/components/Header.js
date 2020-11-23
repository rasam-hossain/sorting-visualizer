import React from "react";

import { Button, SortButton, Container, SortWrapper } from "./header.style";

export default function Header({ rangeChange }) {
  return (
    <Container>
      <Button onClick={() => console.log("clicked")}>New Array</Button>
      <Button onClick={rangeChange}>Input Range</Button>
      <SortWrapper>
        <SortButton>#Bubble</SortButton>
        <SortButton>#Merge</SortButton>
        <SortButton>#Heap</SortButton>
        <SortButton>#Quick</SortButton>
      </SortWrapper>
    </Container>
  );
}
