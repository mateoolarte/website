import styled from "styled-components";
import Link from "next/link";

import { mainColor } from "@/utils/themes";

export const Wrapper = styled.article`
  margin-bottom: 1.4rem;
`;

export const Title = styled(Link)`
  color: ${mainColor};
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
`;
