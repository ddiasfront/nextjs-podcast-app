import { LinkComponent } from '..';
import Router from 'next/router'

const linkStyle = {
  marginRight: 15
}

const Navbar = () => (
    <div>
        <LinkComponent nextRouter={Router} href="/" linkColor="medium">
          <a style={linkStyle}>Home</a>
        </LinkComponent>
        <LinkComponent nextRouter={Router} href="/about" linkColor="medium">
          <a style={linkStyle}>About</a>
        </LinkComponent>
    </div>
)

export  {Navbar}