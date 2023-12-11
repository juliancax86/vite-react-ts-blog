import React from "react";
import { User } from "../components/types";
import useFetch from "../hooks/useFetch";

interface Props {
  userId: number;
}

const UserDetails: React.FC<Props> = ({ userId }) => {
  const {
    data: user,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`, 20);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h3 className="text-xl text-sky-700 font-bold mb-2" data-testid="user-details">{user.name}</h3>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
        <p className="text-gray-700 text-base">
          Address: {user.address.street}, {user.address.suite},{" "}
          {user.address.city} {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
