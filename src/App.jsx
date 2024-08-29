import LanguageSelection from "@/components/LanguageSelection/LanguageSelection"
import Container from "@/components/Container/Container"
import Sponsors from "@/components/Sponsors/Sponsors"
import Content from "@/components/Content/Content"
import Events from "@/components/Events/Events"
import { useTranslation } from "react-i18next"
import Title from "@/components/Title/Title"
import GlobalStyle from "@/style"

const App = () => {
  const { t } = useTranslation()

  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          <LanguageSelection />

          <Title src={"images/Teekkarius-152.svg"} alt="Teekkarius 152" />

          <p
            style={{
              padding: "16px",
              borderStyle: "groove ridge ridge groove",
              borderColor: "#d9c189",
              borderWidth: "20px",
              margin: "50px auto"
            }}
          >
            {t("info")}
          </p>

          <h1>{t("events")}</h1>
          <Events />

          <h2>{t("sponsors")}</h2>
          <Sponsors />
        </Content>
      </Container>
    </>
  )
}

export default App
