import { screen, render } from '@redwoodjs/testing/web'
import { MockedProvider } from '@apollo/client/testing';
import { Loading, Empty, Failure, Success, QUERY } from './ArticleCell'
import { standard } from './ArticleCell.mock'


const mocks = [
  {
    request: {
      query: QUERY,
      variables: { id: standard.id },
    },
    result: {
      data: {
        article: standard,
      },
    },
  },
];

describe('ArticleCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success article={standard().article} />)
    }).not.toThrow()
  })

  it('renders loading state', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Loading />
      </MockedProvider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', async () => {
    const errorMessage = 'Something went wrong!';
    const errorMock = {
      request: {
        query: QUERY,
        variables: { id: standard.id },
      },
      error: new Error(errorMessage),
    };
    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Failure />
      </MockedProvider>
    );
    await screen.findByText(`Error:`);
  });

})
