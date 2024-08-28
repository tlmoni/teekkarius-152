import EventModal from "../EventModal/EventModal"
import styled from "@emotion/styled"
import { useState } from "react"

const StyledEvent = styled.div`
  border: solid transparent;
  border-image-source: url(src/assets/frame.svg);
  border-image-width: 100px;
  border-image-slice: 50;
  border-image-outset: 10px;
  border-image-repeat: round;
  width: 500px;
  height: 400px;
  padding: 70px 70px 70px 82px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`

const Label = styled.h3`
  padding: 0 20px;
`

const Event = ({ date, title, text }) => {
  const [open, setOpen] = useState(false)

  return (
    <StyledEvent onClick={() => setOpen(!open)}>
      <Label>{date}</Label>
      <Label>{title}</Label>
      <EventModal isOpen={open} title={title} text={text} />
    </StyledEvent>
  )
}

export default Event
