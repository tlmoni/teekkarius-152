import styled from "@emotion/styled"

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
`

const Event = ({ date, title }) => {
  return (
    <StyledEvent>
      <h3>{date}</h3>
      <h3>{title}</h3>
    </StyledEvent>
  )
}

export default Event
