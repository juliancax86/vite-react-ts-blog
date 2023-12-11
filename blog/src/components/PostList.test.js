import React from 'react';
import { render, screen } from '@testing-library/react';
import PostList from './PostList';

describe('PostList', () => {
  it('renders a list of posts', async () => {
    const { container } = render(<PostList truncateLength={100} truncate={() => {}} />);
    expect(container.querySelector('.grid')).toBeInTheDocument();
    const posts = await screen.findAllByRole('article');
    expect(posts).toHaveLength(20);
  });

  it('displays an error message if the API call fails', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject('API is down'));
    const { container } = render(<PostList truncateLength={100} truncate={() => {}} />);
    expect(container.querySelector('.grid')).not.toBeInTheDocument();
    expect(screen.getByText('Error: API is down')).toBeInTheDocument();
    global.fetch.mockRestore();
  });
});