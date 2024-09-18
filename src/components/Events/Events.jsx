import Column from "@/components/Column/Column"
import { useTranslation } from "react-i18next"
import Event from "@/components/Event/Event"
import Row from "@/components/Row/Row"

const Events = () => {
  const { t } = useTranslation()

  return (
    <>
      <Column
        style={{
          marginBottom: "5vh"
        }}
      >
        <Row>
          <Event
            title={t("lks")}
            text={t("lks-info")}
            date="1.11."
            time="HH:MM"
            location="TBA"
          />
          <Event
            title={t("elonkorjuu")}
            text={t("elonkorjuu-info")}
            date="2.11."
            time="HH:MM"
            location="TBA"
          />
        </Row>
        <Row>
          <Event
            title={t("igs")}
            text={t("igs-info")}
            date="3.11."
            time="HH:MM"
            location="TBA"
          />
          <Event
            title={t("fjs")}
            text={t("fjs-info")}
            date="4.11."
            time="HH:MM"
            location="TBA"
          />
        </Row>
        <Row>
          <Event
            title={t("pll")}
            text={t("pll-info")}
            date="4.11."
            time="HH:MM"
            location="TBA"
          />
          <Event
            title={t("polin-appro")}
            text={t("polin-appro-info")}
            date="5.11."
            time="HH:MM"
            location="TBA"
          />
        </Row>
        <Row>
          <Event
            title={t("tpj")}
            text={t("tpj-info")}
            date="8.11."
            time="18:30"
            location="Kulttuurikasarmi Events"
          />
          <Event
            title={t("sillis")}
            text={t("sillis-info")}
            date="9.11."
            time="12:00-18:00"
            location="Servin mökki"
          />
        </Row>
      </Column>
    </>
  )
}

export default Events
