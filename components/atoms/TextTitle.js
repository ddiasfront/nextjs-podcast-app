import styled from 'styled-components'

const TextBuilder = (props) => {

  const textTypeLow = typeof(props.textType) == 'string' ? props.textType.toLowerCase() : props.textType.toString().toLowerCase()

  const StyledTitle = styled(textTypeLow)`
    color: palevioletred;
    font-weight: bold;
    font-size: ${props => props.titleSize};
    text-align: ${props => props.titleTextAlign};
    text-indent: ${props => props.titleTextIndent};
    line-height: ${props => props.titleLineHeight};
    text-transform: ${props => props.titleTextTransform};
    word-spacing: ${props => props.titleWordSpacing}
  `;

  return (
    <StyledTitle
      textType={props.textType}
      titleSize={props.titleSize ? props.titleSize : false}
      titleWeight={props.titleWeight ? props.titleWeight : false}
      titleTextAlign={props.titleTextAlign ? props.titleTextAlign : false}
      titleTextDecoration={props.titleTextDecoration ? props.titleTextDecoration : false}
      titleTextIndent={props.titleTextIndent ? props.titleTextIndent : false}
      titleLineHeight={props.titleLineHeight ? props.titleLineHeight : false}
      titleTextTransform={props.titleTextTransform ? props.titleTextTransform : false}
      titleWordSpacing={props.titleWordSpacing ? props.titleWordSpacing : false}
    >
      {props.children}
    </StyledTitle>
  )
}

const Title = (props) => {
  switch (props.textType) {
    case 'H1':
      return TextBuilder(props)
    case 'H2':
      return TextBuilder(props)
    case 'H3':
      return TextBuilder(props)
    case 'H4':
      return TextBuilder(props)
    case 'H5':
      return TextBuilder(props)
    case 'p':
      return TextBuilder(props)
    case 'span':
      return TextBuilder(props)
  }
}

export { Title } 