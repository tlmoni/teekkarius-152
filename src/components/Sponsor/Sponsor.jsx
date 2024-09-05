import styled from "@emotion/styled"

const Sponsor = styled.img`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 20%;

  @media screen and (max-width: 1200px) {
    width: 30%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 900px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 35%;
  }
`

export default Sponsor
