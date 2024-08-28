import { ExpandMore } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import Flag from "@/components/Flag/Flag"
import styled from "@emotion/styled"

const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  margin-left: auto;
  height: fit-content;

  & img {
    width: 100px;
  }

  &:hover div {
    display: flex;
    cursor: pointer;
  }
`

const DropdownContent = styled.div`
  display: none;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  position: absolute;
`

const Chevron = styled(ExpandMore)`
  color: #b9d8c2;
  float: right;
  max-width: 20px;

  transform: rotate(180);

  @media screen and (max-width: 900px) {
    max-width: 16px;
  }
`

const LanguageSelection = () => {
  const { i18n } = useTranslation()

  const languages = ["fi", "se", "en"]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <Dropdown>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >
          <Flag
            src={`src/assets/${i18n.language}.svg`}
            style={{ display: "inline-block" }}
          />
          <Chevron style={{ display: "inline-block" }} />
        </div>
        <DropdownContent>
          {languages
            .filter((language) => language !== i18n.language)
            .map((language) => {
              return (
                <Flag
                  key={language}
                  src={`src/assets/${language}.svg`}
                  onClick={() => changeLanguage(language)}
                />
              )
            })}
        </DropdownContent>
      </Dropdown>
    </>
  )
}

export default LanguageSelection
