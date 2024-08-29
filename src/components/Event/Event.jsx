import EventModal from "@/components/EventModal/EventModal"
import styled from "@emotion/styled"
import { useState } from "react"

const StyledEvent = styled.div`
  border: solid transparent;
  border-image-source: url(images/frame.svg);
  border-image-width: 80px;
  border-image-slice: 50;
  border-image-outset: 10px;
  border-image-repeat: round;
  width: 400px;
  height: 300px;
  padding: 70px 70px 70px 82px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    width: 350px;
    height: 250px;
    border-image-width: 70px;
    margin: 45px auto;
  }

  @media screen and (max-width: 900px) {
    width: 300px;
    height: 220px;
    border-image-width: 60px;
    padding: 50px 50px 50px 62px;
    margin: 40px auto;
  }

  @media screen and (max-width: 700px) {
    width: 45vw;
    height: 180px;
    border-image-width: 50px;
    margin: 30px auto;
  }

  @media screen and (max-width: 550px) {
    width: 50vw;
    height: 165px;
    border-image-width: 40px;
    padding: 30px 40px 30px 42px;
  }

  @media screen and (max-width: 450px) {
    width: 60vw;
    height: 150px;
    border-image-width: 40px;
  }

  @media screen and (max-width: 400px) {
    width: 60vw;
    height: 150px;
    border-image-width: 30px;
  }
`

const Label = styled.h3`
  padding: 0 20px;
`

const Event = ({ date, title, text }) => {
  const [show, setShow] = useState(false)

  const openModal = () => (show ? () => {} : setShow(true))
  const closeModal = () => setShow(false)

  return (
    <StyledEvent onClick={openModal}>
      <Label>{date}</Label>
      <Label>{title}</Label>
      {show && (
        <EventModal
          isOpen={show}
          title={title}
          text={text}
          handleClose={closeModal}
        />
      )}
    </StyledEvent>
  )
}

export default Event
