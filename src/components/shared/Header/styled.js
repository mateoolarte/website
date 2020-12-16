import { Link } from "gatsby";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../../../constants";

const Wrapper = styled.header`
  max-width: 1180px;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0.5rem;

  ${MEDIA_QUERIES.tablet} {
    padding: 2rem 0;
  }

  ${MEDIA_QUERIES.landscape} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled(Link)`
  display: inline-block;

  picture {
    &:hover {
      opacity: 0.7;
    }
  }

  img {
    height: 35px;

    ${MEDIA_QUERIES.tablet} {
      width: 120px;
      height: auto;
    }

    ${MEDIA_QUERIES.landscape} {
      width: 190px;
    }
  }
`;

export { Wrapper, Logo };
