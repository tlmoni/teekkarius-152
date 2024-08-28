import styled from "@emotion/styled"

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid #000000;
  color: #000000;
  margin: 0.1em 0.5em;
  padding: 0.15em 1em;
  overflow: visible;
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & p {
    padding-left: 5px;
  }

  & #icon {
    color: #000000;
  }

  &:hover {
    background: #000000;
    cursor: pointer;
  }

  &:hover p {
    color: #ffffff;
    text-shadow: none;
  }

  &:hover #icon {
    color: #ffffff;
  }
`

export default Button
