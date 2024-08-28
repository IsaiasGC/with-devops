import React from 'react';

const Hours = () => {
  const hours = {
    0: '9 a.m. - 8 p.m.', 
    1: '10 a.m. - 4 p.m.',
    2: '10 a.m. - 4 p.m.',
    3: '10 a.m. - 4 p.m.',
    4: '10 a.m. - 4 p.m.',
    5: '10 a.m. - 4 p.m.',
    6: '9 a.m. - 8 p.m.', 
  };

  const today = new Date().getDay();

  const todayHours = hours[today];

  return (
    <div className="hours">
      <p>The shelter is open today from {todayHours}</p>
    </div>
  );
};

export default Hours;
