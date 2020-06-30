import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <div
              className='img-container'
            >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: 100,
                height: 100,
                borderRadius: `100%`,
                border: `2px solid var(--main-red)`
              }}
            />
            </div>
            <p className='bio'>
              The personal blog of <strong>{author}</strong>. NYC based software engineer, actor, director, and musician. Documenting my journey from the stage to the computer screen. To keep up to date,
              {` `}
              <a className='twitter' href={`https://twitter.com/${social.twitter}`}>
                you should follow me on Twitter.
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
