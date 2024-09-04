import styled from "@emotion/styled"

const Content = styled.div`
  position: relative;
  background: #002626;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 20% 100px;
  z-index: 1;
  height: 90%;
  overflow: auto;

  @media screen and (max-width: 1500px) {
    padding: 30px 16% 100px;
  }

  @media screen and (max-width: 900px) {
    padding: 30px 60px 50px 60px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 20px 50px 20px;
  }

  @media screen and (max-width: 450px) {
    padding: 20px 20px 50px 20px;
  }
`

export default Content
