import React from "react";
import { Button, SortButton, Container, SortWrapper } from "./header.style";

export default function Header() {
  return (
    <Container>
      <Button onClick={() => console.log("NewArray button clicked")}>
        NewArray
      </Button>
      <Button onClick={() => alert("Select your range")}>
        Select your range
      </Button>
      <SortWrapper>
        <SortButton onClick={() => console.log("#Bubble button clicked")}>
          #Bubble
        </SortButton>
        <SortButton onClick={() => console.log("#Merge button clicked")}>
          #Merge
        </SortButton>
        <SortButton onClick={() => console.log("#Heap button clicked")}>
          #Heap
        </SortButton>
        <SortButton onClick={() => console.log("#Quick button clicked")}>
          #Quick
        </SortButton>
      </SortWrapper>
    </Container>
  );
}
