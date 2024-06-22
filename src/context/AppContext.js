// src/context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Robert Fox' });
  const [statistics, setStatistics] = useState({
    timeSpent: { Sunday: 8, Monday: 12, Tuesday: 6, Wednesday: 8, Thursday: 12, Friday: 4, Saturday: 0 },
    completion: { completed: 40, inProgress: 40, notStarted: 20 },
  });

  return (
    <AppContext.Provider value={{ user, statistics, setUser, setStatistics }}>
      {children}
    </AppContext.Provider>
  );
};
