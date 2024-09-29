import { AccessTime, CalendarToday, Place } from "@mui/icons-material"
import styled from "@emotion/styled"

const EventInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  text-align: center;
  margin-top: 10px;

  & p {
    color: #002626;
    padding-left: 5px;
    margin-right: 20px;
  }

  & #icon {
    color: #002626;
  }
`

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px;
`

const EventDetails = ({ date, time, location }) => {
  return (
    <>
      <EventInfoBar>
        <EventDetail>
          <CalendarToday id="icon" />
          <p>{date}</p>
        </EventDetail>
        <EventDetail>
          <AccessTime id="icon" />
          <p>{time}</p>
        </EventDetail>
        <EventDetail>
          <Place id="icon" />
          <p>{location}</p>
        </EventDetail>
      </EventInfoBar>
    </>
  )
}

export default EventDetails
