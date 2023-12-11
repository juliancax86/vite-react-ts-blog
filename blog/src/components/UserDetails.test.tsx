import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import UserDetails from './UserDetails';

describe('UserDetails', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<UserDetails userId={1} />);
    expect(getByText(/Loading.../i)).toBeDefined();
  });
});