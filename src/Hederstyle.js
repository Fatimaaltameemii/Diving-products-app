import logo from "./diving-logo.jpg";
import styled from "styled-components";
const Background = styled.body(`
background-color: #282c34;
  color: ghostwhite;
`);
const LogoLeft = styled.div(`float: "left"
`);

const TitleCenter = styled.h1(`textAlign: "center"`);

const SubTitle = styled.h4(`textAlign: "center" `);
export default function Hederstyle() {
  return (
    <Background>
      <div>
        <LogoLeft>
          <img className="photo" alt="D-logo" src={logo} />
        </LogoLeft>
        <TitleCenter>Diving Products</TitleCenter>
        <SubTitle> Where never an end for the sea 🤿 </SubTitle>
      </div>
    </Background>
  );
}
