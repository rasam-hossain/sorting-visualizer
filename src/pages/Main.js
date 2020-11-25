import React from "react";
import styled from "styled-components";

export default function Main({ data }) {
  return (
    <Container>
      {data.map((size) => (
        <>
          <Bar height={`${size}px`} >
            { data.length <= 70 && <p>{ size}</p>}
          </Bar>
        </>
      ))}
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
  background-color: #D3D3D3;
`;

const Bar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 2%;
  height: ${(props) => props.height};
  background-image: linear-gradient(
    34deg,
    rgba(252, 176, 69, 1) 0%,
    rgba(253, 29, 29, 1) 43%,
    rgba(131, 58, 180, 1) 100%
  );
  margin-right: 1px;
  margin-left: 1px;
  border-bottom: 1px dotted red;
  border-left: 1px dotted red;
  border-right: 1px dotted red;
`;
