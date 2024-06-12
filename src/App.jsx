import React from 'react';
import UserDetails from '../Components/UserDetails';
import Summary from '../Components/Summary';
import WorkExp from '../Components/WorkExp';
import Education from '../Components/Education';
import AddInfo from '../Components/AddInfo';

const App = () => {
  return (
    <div className='container-fluid'>
      <UserDetails/>
      <Summary/>
      <WorkExp/>
      <Education/>
      <AddInfo/>
    </div>
  );
};

export default App;
