import styled from "@emotion/styled"
import i18n from "@/i18n"

const Background = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  cursor: default;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  z-index: 2;
  padding: 1.5em;
  background: #b9d8c2;
  margin-left: auto;
  margin-right: auto;
  height: 80vh;
  overflow: hidden;
  border-radius: 10px;
  cursor: default;

  @media screen and (max-width: 1800px) {
    width: 70vw;
  }

  @media screen and (max-width: 900px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const EventTitle = styled.h3`
  color: #002626;
  font-family: Libre Baskerville;
  margin: 0;
  padding: 0;
`

const Info = styled.div`
  height: 100%;
  overflow: scroll;
`

const InfoText = styled.p`
  color: #002626;
`

const Close = styled.span`
  color: #002626;
  font-size: 28pt;
  line-height: 14pt;
  margin-bottom: 1em;

  &:hover,
  &:focus {
    color: #5d7f74;
    text-decoration: none;
    cursor: pointer;
  }
`

const EventModal = ({ isOpen, title, text }) => {
  return isOpen ? (
    <Background>
      <Modal>
        <Title>
          <Close>&times;</Close>
          <EventTitle>{title}</EventTitle>
        </Title>
        <Info>
          <InfoText>{i18n.t("lorem")}</InfoText>
        </Info>
      </Modal>
    </Background>
  ) : (
    <></>
  )
}

export default EventModal
