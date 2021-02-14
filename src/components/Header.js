import React from "react";

import {
  Button,
  SortButton,
  Wrapper,
  SortWrapper,
  NonButton,
} from "./header.style";

export default function Header(props) {
  return (
    <Wrapper>
      <NonButton>Sorting Visualizer</NonButton>
      <Button onClick={props.updateList} disabled={props.disableButton}>
        Random
      </Button>
      <Button onClick={props.rangeChange} disabled={props.disableButton}>
        Input Range
      </Button>
      <SortWrapper>
        <SortButton
          onClick={props.bubbleSortOnClick}
          disabled={props.disableButton}
        >
          #Bubble
        </SortButton>
        <SortButton
          disabled={props.disableButton}
          //onClick={props.mergeSortOnClick}
        >
          #Merge
        </SortButton>
        <SortButton
          disabled={props.disableButton}
          //onClick={props.heapSortOnClick}
        >
          #Heap
        </SortButton>
        <SortButton
          disabled={props.disableButton}
          //onClick={props.quickSortOnClick}
        >
          #Quick
        </SortButton>
      </SortWrapper>
    </Wrapper>
  );
}
