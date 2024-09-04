import EventDetails from "@/components/EventDetails/EventDetails"
import styled from "@emotion/styled"
import i18n from "@/i18n"

const Background = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 4vh;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #00000066;
  cursor: default;

  animation: ${(props) => (props.isOpen ? "fadeIn" : "fadeOut")} 0.3s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes fadeIn {
    0% {
      background: #00000000;
    }
    100% {
      background: #00000066;
    }
  }

  @keyframes fadeOut {
    0% {
      background: #00000066;
    }
    100% {
      background: #00000000;
    }
  }
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-height: 80vh;
  min-height: fit-content;
  z-index: 2;
  padding: 1.5em;
  background: #b9d8c2;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border-radius: 10px;
  cursor: default;
  opacity: 0;

  animation: ${(props) => (props.isOpen ? "moveUp" : "moveDown")} 0.3s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes moveUp {
    0% {
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes moveDown {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      transform: translateY(1000px);
      opacity: 0;
    }
  }

  @media screen and (max-width: 1800px) {
    width: 70vw;
  }

  @media screen and (max-width: 900px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    width: 85vw;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  @media screen and (max-width: 900px) {
    margin: 10px;
  }
`

const EventTitle = styled.h3`
  color: #002626;
  font-family: "LibreBaskerville";
  margin: 0;
  padding: 0;
`

const Close = styled.span`
  color: #002626;
  font-size: 28pt;
  line-height: 14pt;
  margin-bottom: 32px;

  &:hover,
  &:focus {
    color: #5d7f74;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    font-size: 22pt;
    margin-bottom: 16px;
  }
`

const Info = styled.div`
  height: 100%;
  overflow: scroll;
`

const InfoText = styled.p`
  color: #002626;
`

const EventModal = ({
  isOpen,
  handleClose,
  title,
  text,
  date,
  time,
  location
}) => {
  return (
    <Background isOpen={isOpen}>
      <Modal isOpen={isOpen}>
        <Title>
          <Close onClick={handleClose}>&times;</Close>
          <EventTitle>{title}</EventTitle>
          <EventDetails date={date} time={time} location={location} />
        </Title>
        <Info>
          <InfoText>{i18n.t("lorem")}</InfoText>
        </Info>
      </Modal>
    </Background>
  )
}

export default EventModal
