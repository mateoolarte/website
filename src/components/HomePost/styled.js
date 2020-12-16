import styled from "styled-components";
import { Link } from "gatsby";

import { mainColor } from "../../themes";

const Wrapper = styled.article`
  margin-bottom: 1.4rem;
`;

const Title = styled(Link)`
  color: ${mainColor};
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
`;

export { Wrapper, Title };
