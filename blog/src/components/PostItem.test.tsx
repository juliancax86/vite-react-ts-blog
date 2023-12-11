import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PostItem from './PostItem';

describe('PostItem', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<PostItem postId={1} />);
    expect(getByText(/Loading.../i)).toBeDefined();
  });
});