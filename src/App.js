import { useState } from 'react';
import './App.css';
import CollegeList from './collegeList/CollegeList';

function App() {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShowDetails(false)}>Hide</button>
      <button onClick={() => setShowDetails(true)}>Show</button>
      {showDetails && <CollegeList />}
    </div>
  );
}

export default App;
