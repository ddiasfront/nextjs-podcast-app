import styled from 'styled-components'
import Link from 'next/link'
import {textColorPallete} from '../../globalStyles'

const StyledLink = styled('span')`
font-family: 'Open Sans Condensed', sans-serif;
color:  ${props => textColorPallete[props.linkColor]};
font-weight: bold;
font-size: ${props => props.linkSize};
text-align: ${props => props.linkAlign};
text-indent: ${props => props.linkIndent};
line-height: ${props => props.linkLineHeight};
text-transform: ${props => props.linkTransform};
word-spacing: ${props => props.linkWordSpacing}
`;

const colorsPossible = Object.keys(textColorPallete);

const blockColor = (color) => (
  colorsPossible.every(colorPossible => colorPossible !== color)
)

const LinkComponent = (props, href) => (
  <Link href={props.href}>
    <StyledLink
      linkColor={blockColor(props.linkColor) ? 'dark' : props.linkColor}
      linkSize={props.linkSize ? props.linkSize : false}
      linkAlign={props.linkAlign ? props.linkAlign : false}
      linkIndent={props.linkIndent ? props.linkIndent : false}
      linkLineHeight={props.linkLineHeight ? props.linkLineHeight : false}
      linkTransform={props.linkTransform ? props.linkTransform : false}
      linkWordSpacing={props.linkWordSpacing ? props.linkWordSpacing : false}
    >
      {props.children}
    </StyledLink>
  </Link>
)

export { LinkComponent }