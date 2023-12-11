export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Props {
  postId: number;
}

export interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export interface PropsTrucate {
  truncateLength: number;
  truncate: (text: string, length: number) => string;
}
