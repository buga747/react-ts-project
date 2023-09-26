import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { usedTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = usedTypedSelector(
    state => state.repositories
  );

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={term} onChange={handleChange} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading</h3>}

      {!error && !loading && data.map(name => <p key={name}>{name}</p>)}
    </div>
  );
};

export default RepositoriesList;
