import {
  Email,
  Info,
  Instagram,
  LocalActivity,
  Lyrics,
  Telegram
} from "@mui/icons-material"
import Column from "@/components/Column/Column"
import { useTranslation } from "react-i18next"
import Event from "@/components/Event/Event"
import Link from "@/components/Link/Link"
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
            time="17:00"
            location="Servin mökki"
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
            links={[
              <Link
                key="tpj-kide"
                href="https://kide.app/events/bb7f06ca-5380-4227-90f0-0815f7bb189e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalActivity id="icon" />
                <p>kide.app</p>
              </Link>
            ]}
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
