import './App.css';
import TogetherButton from './TogetherButton';
import SeperateButtonCount from '../src/SeperateButtonCount';
import { useState } from 'react';

const user = {
  name: 'Steve Jobs',
  imageUrl: 'https://i.imgur.com/qeFtp4S.jpeg',
  imageSize: 90,
};

const employee = [
  { name: 'Adeesha', designation: 'Intern(Software Engineer)', id: 1 },
  { name: 'Janaka', designation: 'Software Architect', id: 2 },
  { name: 'Chamika', designation: 'Software Engineer', id: 3 }
]

const listItems = employee.map((employee) =>
  <li key={employee.id}>
    {employee.name} -{'>'} {employee.designation}
  </li>
);

function App() {
  const [count, setCount] = useState(1);
  function handleClick() {
    alert('Why the hell did you click me? You poke me ' + count + ' time(s) already!');
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1> {user.name} </h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ul>{listItems}</ul>
      </div>

      <h1> Buttons Update Seperately </h1>
      <SeperateButtonCount />
      <SeperateButtonCount />

      <h1>We Update Together</h1>
      <TogetherButton count={count} onClick={handleClick} />
      <TogetherButton count={count} onClick={handleClick} />
    </div>
  );
}



export default App;
