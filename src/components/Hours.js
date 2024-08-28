import React from 'react';

const Hours = () => {
  // Define the opening hours for each day of the week
  const hours = {
    0: '9 a.m. - 8 p.m.',   // Sunday
    1: '10 a.m. - 4 p.m.',  // Monday
    2: '10 a.m. - 4 p.m.',  // Tuesday
    3: '10 a.m. - 4 p.m.',  // Wednesday
    4: '10 a.m. - 4 p.m.',  // Thursday
    5: '10 a.m. - 4 p.m.',  // Friday
    6: '9 a.m. - 8 p.m.',   // Saturday
  };

  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const today = new Date().getDay();

  // Get the hours for the current day
  const todayHours = hours[today];

  return (
    <div className="hours">
      <p>The shelter is open today from {todayHours}</p>
    </div>
  );
};

export default Hours;
