import React from "react";
import styled from "styled-components";

import { Button } from "../components/header.style";

const angleDeg = 315;

export default function Main({ currentIndex, data, nextIndex }) {
  console.log("Main -> nextIndex", nextIndex);
  console.log("Main -> currentIndex", currentIndex);
  return (
    <Container>
      <>
        {data.map((size, i) => (
          <>
            <Bar
              height={`${size}px`}
              key={i}
              active={currentIndex === i}
              style={
                nextIndex === i
                  ? {
                      backgroundImage:
                        "linear-gradient(180deg, #99f2c8, green);",
                    }
                  : null
              }
            >
              {data.length < 20 && <p>{size}</p>}
            </Bar>
          </>
        ))}
      </>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  bottom: 0;
  border: 1px dotted white;
  border-radius: 1px;
  box-sizing: border-box;
  background-color: #d3d3d3;
`;

const Bar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: ${(props) => props.height};
  width: 1%;
  background-image: ${(props) => {
    return props.active
      ? `linear-gradient(#0583F2, #0540F2)`
      : `linear-gradient(35deg, #fd1d1d 0%, #fcb045 100% )`;
  }};
  margin-right: 1px;
  margin-left: 1px;
  border: 1px solid red;
  ${(props) => props.style}
`;
