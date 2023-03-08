import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h2>
        <Link to={routes.article({ id: article.id })} data-testid="article-link">{article.title}</Link>
        </h2>
      </header>
      <div data-testid="article-body">{article.body}</div>
      <div data-testid="article-createdAt">Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article