import './App.css';
import { Child, ChildFC } from './components/Child';
import EventComponent from './events/EventComponent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

function App() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <>
      <h2>Hi there</h2>
      <Child textColor={'blue'} onClick={handleClick}></Child>
      <ChildFC textColor={'red'} onClick={handleClick} />
      <GuestList />
      <UserSearch />

      <EventComponent />
    </>
  );
}

export default App;