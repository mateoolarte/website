import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";

import { Wrapper } from "./styles";

export function Header() {
  return (
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  );
}
