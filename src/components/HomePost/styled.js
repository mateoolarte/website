import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.article`
  margin-bottom: 1.4rem;
`;

const Title = styled(Link)`
  color: #02060c;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
`;

export { Wrapper, Title };
