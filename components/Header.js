import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <PageHeader>
      <nav>
        <FlexUL>
          <FlexUL__link>
            <StyleLink href="/">Home</StyleLink>
          </FlexUL__link>
          <FlexUL__link>
            <StyleLink href="/veggie">Veggie</StyleLink>
          </FlexUL__link>
          <FlexUL__link>
            <StyleLink href="/dessert">Dessert</StyleLink>
          </FlexUL__link>
        </FlexUL>
      </nav>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: aliceblue;
  width: 100%;
`;

const FlexUL = styled.nav`
  display: flex;
  background-color: cadetblue;
  gap: 3rem;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const FlexUL__link = styled.li`
  padding: 10px;
  border: 1px solid black;
  margin: 10px;
  border-radius: 5px 0 5px 0;
`;

const StyleLink = styled.a`
  text-decoration: none;
  color: black;
`;
