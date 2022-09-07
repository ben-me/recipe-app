import styled from "styled-components";

export default function Footer() {
  return (
    <BottomFooter>
      <ul>
        <li>About us</li>
        <li>Legal notice</li>
        <li>Contact</li>
      </ul>
    </BottomFooter>
  );
}

const BottomFooter = styled.footer`
  position: absolute;
  bottom: 0;
`;
