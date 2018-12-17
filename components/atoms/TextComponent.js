import styled from 'styled-components'

const TextBuilder = (props) => {

  const textTypeLow = typeof(props.textType) == 'string' ? props.textType.toLowerCase() : props.textType.toString().toLowerCase()

  const StyledText = styled(textTypeLow)`
    font-family: 'Open Sans Condensed', sans-serif;
    color:  ${props => props.textColor ? props.textColor : '#000'};
    font-weight: bold;
    font-size: ${props => props.textSize};
    text-align: ${props => props.textTextAlign};
    text-indent: ${props => props.textTextIndent};
    line-height: ${props => props.textLineHeight};
    text-transform: ${props => props.textTextTransform};
    word-spacing: ${props => props.textWordSpacing}
  `;


  return (
    <StyledText
      textColor={props.textColor ? props.textColor : false}
      textType={props.textType}
      textSize={props.textSize ? props.textSize : false}
      textWeight={props.textWeight ? props.textWeight : false}
      textTextAlign={props.textTextAlign ? props.textTextAlign : false}
      textTextDecoration={props.textTextDecoration ? props.textTextDecoration : false}
      textTextIndent={props.textTextIndent ? props.textTextIndent : false}
      textLineHeight={props.textLineHeight ? props.textLineHeight : false}
      textTextTransform={props.textTextTransform ? props.textTextTransform : false}
      textWordSpacing={props.textWordSpacing ? props.textWordSpacing : false}
    >
      {props.children}
    </StyledText>
  )
}

const TextComponent = (props) => {
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

export { TextComponent } 