import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;

  return (
    isAuthenticated && (
      <div>
        <img src={user.phone_number} alt="image" />
        <h2>Welcome {user.user.phone_number} 🎉</h2>
        <h2>Welcome {user.name} 🎉</h2>
        <p>Email: {user.email}</p>
      </div>
    )
  );
}
