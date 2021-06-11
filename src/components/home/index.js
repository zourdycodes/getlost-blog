import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import "./home.css"

const Home = () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        allContentfulBlog(
          limit: 9
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
        ) {
          edges {
            node {
              id
              slug
              title
              category {
                title
                id
              }
              featuredImages {
                fluid(maxWidth: 1200, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="feed">
        {data.allContentfulBlog.edges.map(edge => (
          <div
            key={edge.node.id}
            className="card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                    url(${edge.node.featuredImages.fluid.src})`,
            }}
            onClick={() => navigate(`/blog/${edge.node.slug}`)}
          >
            <div className="wrap">
              {edge.node.category.map(categories => (
                <p className="card__category">{categories.title}</p>
              ))}
            </div>

            <p className="card__title">{edge.node.title}</p>
          </div>
        ))}
      </div>
    )}
  />
)

export default Home
