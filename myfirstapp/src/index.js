import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LogForm = () => {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + name);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <input type="submit" value="Submit" />

        <label>
          Age
          <input type="number" />
        </label>
        <label>
          Location
         <input type="text" />
        </label>
      </form>
      <div>
      </div>
    </> 
    );
}

ReactDOM.render(<LogForm />, document.getElementById('root'));