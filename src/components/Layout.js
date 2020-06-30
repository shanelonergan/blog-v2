import React from 'react'
import { Link } from 'gatsby'
import SocialLink from './SocialLink'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import { rhythm } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
          className="title"
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `var(--main-teal)`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer className="footer">
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <div className='social'>
            <SocialLink link='https://twitter.com/shane__lonergan' icon={faTwitter} />
            <SocialLink link='https://www.linkedin.com/in/shane-lonergan/' icon={faLinkedin} />
            <SocialLink link='https://github.com/shanelonergan' icon={faGithub} />
            <SocialLink link='https://github.com/shanelonergan/blog-v2' icon={faCode} />
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
