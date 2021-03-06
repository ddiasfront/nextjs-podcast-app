import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledLink = styled('a')`
color:  ${props => props.linkColor};
font-weight: bold;
cursor:pointer;
font-size: ${props => props.linkSize};
text-align: ${props => props.linkAlign};
text-indent: ${props => props.linkIndent};
line-height: ${props => props.linkLineHeight};
text-transform: ${props => props.linkTransform};
word-spacing: ${props => props.linkWordSpacing};
&:visited {
  color: ${props => props.visitedLinkColor};
};
&:hover {
  color:${props => props.hoverLinkColor}; 
}
&:active {
  color:${props => props.activeLinkColor}; 
}
`;

class LinkComponent extends Component {

  constructor(props) {
    super(props);
    this.nextRouting = this.nextRouting.bind(this)
  }

  nextRouting() {
    this.props.nextRouter ? this.props.nextRouter.push(this.props.href) : false
  }

  render() {
    return (
        <StyledLink
          onClick={this.props.nextRouter ? this.nextRouting : false}
          linkColor={this.props.linkColor ? this.props.linkColor : false}
          visitedLinkColor={this.props.visitedLinkColor ? this.props.visitedLinkColor : false}
          hoverLinkColor={this.props.hoverLinkColor ? this.props.hoverLinkColor : false}
          activeLinkColor={this.props.activeLinkColor ? this.props.activeLinkColor : false}
          linkSize={this.props.linkSize ? this.props.linkSize : false}
          linkAlign={this.props.linkAlign ? this.props.linkAlign : false}
          linkIndent={this.props.linkIndent ? this.props.linkIndent : false}
          linkLineHeight={this.props.linkLineHeight ? this.props.linkLineHeight : false}
          linkTransform={this.props.linkTransform ? this.props.linkTransform : false}
          linkWordSpacing={this.props.linkWordSpacing ? this.props.linkWordSpacing : false}
        >
          {this.props.children}
        </StyledLink>
    )
  }
}

LinkComponent.propTypes = {

}

export { LinkComponent }