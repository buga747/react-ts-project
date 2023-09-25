import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      {guests.map(guest => {
        return <p key={guest}>{guest}</p>;
      })}
      <input value={name} onChange={e => setName(e.target.value)} type="text" />
      <button onClick={handleClick}>Add text</button>
    </div>
  );
};

export default GuestList;
