import styled from "@emotion/styled"

const Link = styled.a`
  background: transparent;
  border-radius: 5px;
  border: 2px solid #002626;
  color: #002626;
  margin: 0.1em 0.5em;
  padding: 0.15em 1em;
  overflow: visible;
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-decoration: none;

  & p {
    color: #002626;
    padding-left: 5px;
  }

  & #icon {
    color: #002626;
  }

  &:hover {
    background: #5d7f74;
    border: 2px solid #5d7f74;
    color: #b9d8c2;
    cursor: pointer;

    p {
      color: #b9d8c2;
    }
  }

  &:hover #icon {
    color: #b9d8c2;
  }
`

export default Link
