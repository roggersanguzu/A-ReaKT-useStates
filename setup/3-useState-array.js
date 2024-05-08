import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deleteAll = () => {
    setPeople([]);
  };

  const removeItem = (id) => {
    const updatedPeople = people.filter((person) => person.id!== id);
    setPeople(updatedPeople);
  };

  return (
    <>
      {
        people.map((person) => {
          const { id, name } = person;
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <h4>{id}</h4>
              <button onClick={() => removeItem(id)}>Delete</button>
            </div>
          );
        })
      }
      <button type='button' className='btn' onClick={deleteAll}>Round Completed</button>
    </>
  );
};

export default UseStateArray;
