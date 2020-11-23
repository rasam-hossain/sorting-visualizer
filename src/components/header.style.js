import styled from "styled-components";

export const Button = styled.p`
  color: #fff;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  text-align: center;
  text-align: left;
  line-height: 55px;
  background: rgb(63, 94, 251);
  background: linear-gradient(
    34deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    color: #fff;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      34deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    border: 2px solid tomato;
  }
`;

export const SortButton = styled.p`
  color: #fff;
  cursor: pointer;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  text-align: center;
  line-height: 55px;
  background: rgb(240, 0, 0);
  background: linear-gradient(
    150deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(238, 174, 202, 1) 100%
  );
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    color: #fff;
    background: rgb(131, 58, 180);
    background: rgb(2, 0, 36);
    background: linear-gradient(
      34deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 50%,
      rgba(0, 212, 255, 1) 100%
    );
    border: 2px solid tomato;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  height: 75px;
  width: 100%;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const SortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
`;

export const RangeWrapper = styled.p`
  align-content: center;
  justify-content: space-evenly;
  width: 200px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;
