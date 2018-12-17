import { LinkComponent } from '../components/atoms/LinkComponent';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <LinkComponent href="/" linkColor="medium">
          <a style={linkStyle}>Home</a>
        </LinkComponent>
        <LinkComponent href="/about" linkColor="medium">
          <a style={linkStyle}>About</a>
        </LinkComponent>
    </div>
)

export default Header