import React from 'react'
import { graphql } from 'gatsby'
// import { Link } from 'gatsby'
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>AWS Reinvent 2018</h1>
    
    <table>
          <thead>
            <col width="300"></col>
            <col width="300"></col>
            <col width="500"></col>
            <col width="300"></col>
            <col width="300"></col>
            <col width="300"></col>
            <col width="300"></col>
            <tr>
              <th>Session Id</th>
              <th>Title</th>
              <th>Abstract</th>
              <th>Session Type</th>
              <th>Slideshare</th>
              <th>Youtube</th>
            </tr>
          </thead>
          <tbody>
            {data.allSessionsJson.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.abbreviation}</td>
                <td>{node.title}</td>
                <td>{node.abstract}</td>
                <td>{node.session_type}</td>
                <td><a href={node.media.slideshare}>SlideShare</a></td>
                <td><a href={node.media.youtube}>Youtube</a></td>
              </tr>
            ))}
          </tbody>
        </table>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allSessionsJson {
      edges {
        node {
          id,
          abbreviation,
          abstract,
          session_type,
          title,
          media {
            slideshare,
            youtube
          }
        }
      }
    }
  }
`
