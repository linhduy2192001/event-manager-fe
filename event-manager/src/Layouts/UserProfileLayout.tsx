import React from 'react';

interface Props {
  children: React.ReactNode;
}

const UserProfileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="user-profile-layout">
      <h1>User Profile</h1>
      <div className="profile-content">{children}</div>
    </div>
  );
};

export default UserProfileLayout;
