import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 19 },
  { name: 'Oleh', age: 30 },
  { name: 'Daria', age: 30 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleClick = () => {
    const foundUser = users.find(user => {
      return user.name.toLowerCase() === name.toLowerCase();
    });

    setUser(foundUser);
  };
  return (
    <div>
      <p>UserSearch</p>

      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleClick}>Search User</button>

      {user ? (
        <div>
          {' '}
          <p>Name: {user?.name}</p>
          <p>Age: {user?.age}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserSearch;
