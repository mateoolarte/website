import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import HomeIcon from "../images/icons/home.js"
import AboutIcon from "../images/icons/about.js"
import ProjectsIcon from "../images/icons/projects.js"

const items = [
  {
    id: 1,
    label: "Home",
    link: "/",
    Icon: HomeIcon,
  },
  {
    id: 2,
    label: "About",
    link: "/about",
    Icon: AboutIcon,
  },
  {
    id: 3,
    label: "Projects",
    link: "/#projects",
    Icon: ProjectsIcon,
  },
]

const Wrapper = styled.nav`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0.8rem;
  list-style-type: none;
  box-shadow: 0 -3px 12px #dbdee3;
  background-color: #fafafa;
`

const IconContainer = styled.span`
  display: block;

  svg {
    height: 1.2rem;
    transition: 0.25s fill ease-out;
    fill: #02060c;

    &:hover {
      fill: #1755b2;
    }
  }
`

const Box = styled.li`
  margin: 0 1rem;

  &:hover {
    a {
      color: #1755b2;
    }

    svg {
      fill: #1755b2;
    }
  }

  a {
    color: ${({ children }) =>
      children.props.isActive ? "#1755b2" : "#02060c"};
  }

  svg {
    fill: ${({ children }) =>
      children.props.isActive ? "#1755b2" : "#02060c"};
  }
`

const Item = styled(Link)`
  transition: 0.25s color ease-out;
  color: #02060c;
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #1755b2;
  }
`

export default function Nav({ currentPage }) {
  return (
    <Wrapper>
      <List>
        {items.map(({ id, label, link, Icon }) => {
          return (
            <Box key={id}>
              <Item to={link} isActive={currentPage === link}>
                <IconContainer>
                  <Icon />
                </IconContainer>
                {label}
              </Item>
            </Box>
          )
        })}
      </List>
    </Wrapper>
  )
}
