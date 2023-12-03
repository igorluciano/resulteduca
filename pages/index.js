import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'

export default class Home extends Component {
  render() {
    let { title, posts } = attributes
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {posts.map((post, k) => (
              <li key={k}>
                <h2>{post.description}</h2>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}