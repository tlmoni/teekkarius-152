import { Info, LocalActivity, Lyrics } from "@mui/icons-material"
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
            time="18:00-01:00"
            location="Otakaari 20"
            image="/images/LKS.jpg"
            links={[
              <Link
                key="lks-lyrics"
                href="https://forms.gle/T4qsfQcKr7zSPGip6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lyrics id="icon" />
                <p>Forms</p>
              </Link>,
              <Link
                key="lks-kide"
                href="https://kide.app/events/0d66c4c8-fa37-4d16-bf8a-083cdec88352"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalActivity id="icon" />
                <p>kide.app</p>
              </Link>
            ]}
          />
          <Event
            title={t("elonkorjuu")}
            text={t("elonkorjuu-info")}
            date="2.11."
            time="17:30"
            location="Servin mökki"
            image="/images/Elonkorjuu.png"
            links={[
              <Link
                key="elonkorjuu-info"
                href="https://www.ayy.fi/fi/elonkorjuu-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Info id="icon" />
                <p>ayy.fi</p>
              </Link>,
              <Link
                key="elonkorjuu-kide"
                href="https://kide.app/events/12a8809b-bc33-4884-b9e2-61fb69692693"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalActivity id="icon" />
                <p>kide.app</p>
              </Link>
            ]}
          />
        </Row>
        <Row>
          <Event
            title={t("igs")}
            text={t("igs-info")}
            date="3.11."
            time="18:30"
            location="Servin mökki"
            image="/images/IGS.png"
          />
          <Event
            title={t("fjs")}
            text={t("fjs-info")}
            date="4.11."
            time="17:00"
            location="Servin mökki"
            image="/images/FJS.jpg"
          />
        </Row>
        <Row>
          <Event
            title={t("pll")}
            text={t("pll-info")}
            date="4.11."
            time="16:30"
            location="Rantasauna"
            image="/images/PLL.jpg"
          />
          <Event
            title={t("polin-appro")}
            text={t("polin-appro-info")}
            date="5.11."
            time="16:00-02:00"
            location="Apollo Night Club"
            image="/images/Polin Appro.png"
            links={[
              <Link
                key="polin-appro-kide"
                href="https://kide.app/events/2198b369-31e0-4d00-9c01-d809225b5f56/details"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalActivity id="icon" />
                <p>kide.app</p>
              </Link>
            ]}
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
                key="tpj-info"
                href="https://www.ayy.fi/fi/152-teekkariperinnejuhla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Info id="icon" />
                <p>ayy.fi</p>
              </Link>,
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
            links={[
              <Link
                key="sillis-info"
                href="https://www.ayy.fi/fi/teekkarisillis-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Info id="icon" />
                <p>ayy.fi</p>
              </Link>,
              <Link
                key="sillis-kide"
                href="https://kide.app/events/bb7f06ca-5380-4227-90f0-0815f7bb189e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalActivity id="icon" />
                <p>kide.app</p>
              </Link>
            ]}
          />
        </Row>
      </Column>
    </>
  )
}

export default Events
