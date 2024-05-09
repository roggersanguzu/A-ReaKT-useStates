import React, { useState } from 'react';

const ControlledInputs = () => {
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleAddPerson = (e) => {
    e.preventDefault();
    if (firstname && email) {
      const person = { firstname, email };
      setPeople((prevPeople) => [...prevPeople, person]);
      setEmail('');
      setFirstName('');
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleAddPerson}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {
          people.map((person) => {
            const { firstname, email } = person; // Corrected destructuring
            return (
              <div key={person.firstname + person.email}> 
                <h4>{firstname}</h4>
                <p>{email}</p>
              </div>
            );
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
