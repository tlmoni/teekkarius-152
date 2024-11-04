import Sponsor from "@/components/Sponsor/Sponsor"
import Row from "@/components/Row/Row"

const Sponsors = () => {
  return (
    <Row style={{ justifyContent: "space-around", marginBottom: "3vh" }}>
      <Sponsor src="images/Unisport.svg" />
      <Sponsor src="images/Papula-Nevinpat.svg" />
      <Sponsor src="images/AYY.svg" />
      <Sponsor src="images/TJ.svg" />
      <Sponsor src="images/IE.svg" />
      <Sponsor src="images/TPTMK.svg" />
    </Row>
  )
}

export default Sponsors
