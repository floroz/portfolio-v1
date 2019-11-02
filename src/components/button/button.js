import React from "react"
import { css } from "@emotion/core"
import colors from "../../styles/colors"
import fonts from "../../styles/typography"

const button = css`
  color: ${colors.primary};
  background-color: transparent;
  border: 1px solid ${colors.primary};
  border-radius: 3px;
  padding: 2rem 4rem;
  font-size: 14px;
  font-family: ${fonts.fontPrimary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  margin-top: 50px;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${colors.primaryHover};
  }
`

const Button = ({ type, children, ...otherProps }) => {
  return (
    <button css={button} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
