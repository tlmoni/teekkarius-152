import styled from "@emotion/styled"

const Content = styled.div`
  position: relative;
  background: #002624;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 60%;
  padding: 30px 0px 100px 0px;
  z-index: 1;
  height: 90%;
  overflow: auto;

  @media screen and (max-width: 1800px) {
    max-width: 60%;
  }

  @media screen and (max-width: 1500px) {
    max-width: 68%;
  }

  @media screen and (max-width: 900px) {
    padding: 30px 60px 50px 60px;
    max-width: 75%;
  }

  @media screen and (max-width: 600px) {
    max-width: 80%;
    padding: 20px 20px 50px 20px;
  }

  @media screen and (max-width: 450px) {
    max-width: 85%;
    padding: 20px 20px 50px 20px;
  }
`

export default Content
