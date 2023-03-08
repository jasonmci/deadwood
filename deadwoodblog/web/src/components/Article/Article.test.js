import { render, screen } from '@redwoodjs/testing';
// import { routes } from '@redwoodjs/router';
import Article from './Article';

describe('Article', () => {
  const mockArticle = {
    id: 2,
    title: 'Test Article',
    body: 'This is a test article.',
    createdAt: '2022-03-07T13:00:00.000Z',
  };

  it('renders the article link', () => {
    render(<Article article={mockArticle} />);
    expect(screen.getByTestId('article-link')).toHaveAttribute('href', '/article/2');
    expect(screen.getByTestId('article-link')).toHaveTextContent('Test Article');
  });

  it('renders the article body', () => {
    render(<Article article={mockArticle} />);
    expect(screen.getByTestId('article-body')).toHaveTextContent('This is a test article.');
  });

  it('renders the article createdAt', () => {
    render(<Article article={mockArticle} />);
    expect(screen.getByTestId('article-createdAt')).toHaveTextContent('Posted at: 2022-03-07T13:00:00.000Z');
  });

  it('renders the article link with the correct route and params', () => {
    render(<Article article={mockArticle} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/article/2');
  });

  // it('does not render the article link when article is undefined', () => {
  //   render(<Article article={undefined} />);
  //   expect(screen.queryByRole('link')).not.toBeInTheDocument();
  // });
});
