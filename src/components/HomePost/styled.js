import styled from "styled-components";
import { Link } from "gatsby";

import { COLORS } from "../../constants";

const Wrapper = styled.article`
  margin-bottom: 1.4rem;
`;

const Title = styled(Link)`
  color: ${COLORS.black};
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
`;

export { Wrapper, Title };
