import { Global, css } from "@emotion/react"

const style = css`
  @import "fonts/fonts.css";

  html,
  body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    background: #002626;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  p {
    font-family: Poppins;
    color: #b9d8c2;
    font-size: 14pt;
    line-height: 24pt;
    letter-spacing: 1px;
    word-spacing: 2px;
    margin: 0;
    overflow: visible;
    text-align: center;
  }

  @media screen and (max-width: 1200px) {
    p {
      font-size: 12pt;
      line-height: 22pt;
    }
  }

  @media screen and (max-width: 900px) {
    p {
      font-size: 11pt;
      line-height: 22pt;
    }
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 10pt;
      line-height: 18pt;
    }
  }

  @media screen and (max-width: 280px) {
    p {
      font-size: 10pt;
      line-height: 14pt;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: Libre Baskerville;
    font-weight: normal;
    color: #b9d8c2;
  }

  h1 {
    font-size: 60pt;
    margin-top: 50px;
    margin-bottom: 20px;
    font-weight: 1;
  }

  h2 {
    font-size: 50pt;
    font-weight: 300;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  h3 {
    font-family: Poppins;
    font-size: 30pt;
    margin: 10px 0px;
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 52pt;
      line-height: 52pt;
    }
    h2 {
      font-size: 40pt;
      line-height: 40pt;
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 40pt;
      line-height: 40pt;
      padding: 20px 0px;
      margin-top: 30px;
    }
    h2 {
      font-size: 32pt;
      line-height: 32pt;
      padding: 20px 0px;
    }
  }

  @media screen and (max-width: 780px) {
    h1 {
      font-size: 30pt;
      line-height: 30pt;
      padding: 20px 0px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 24pt;
      line-height: 24pt;
      margin-top: 10px;
    }
    h2 {
      font-size: 22pt;
      line-height: 22pt;
    }
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
