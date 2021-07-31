import styled from "styled-components";

import { MEDIA_QUERIES } from "../../../constants";

export const Wrapper = styled.header`
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
