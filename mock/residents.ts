export default {
  a1: {
    roomNumber: 1,
    name: 'Roy Armstrong',
    morningMeds: true,
    afternoonMeds: true,
    eveningMeds: true,
    nightMeds: true,
    difficulty: 0,
    covert: true,
    glucoCheck: false,
    // dynamic
    notes: {
      // it will be date string
      note1: {
        content: 'This is the first note',
        completed: Date.now(),
      },
      note2: {
        content: 'This is the first note',
      },
    },
    lastMorningMed: Date.now(),
    lastAfternoonMed: undefined,
    lastEveningMed: "yesterday's date",
    lastNightMed: undefined,
    preBreakfastGlucoCheck: Date.now(),
    postBreakfastGlucoCheck: 8,
    postDinnerfastGlucoCheck: Date.now(),
    preSleepGlucoCheck: 1,
  },
  a2: {
    roomNumber: 2,
    name: 'Colette Snelling',
    morningMeds: true,
    afternoonMeds: true,
    eveningMeds: true,
    nightMeds: true,
    difficulty: 0,
    covert: true,
    glucoCheck: true,
    // dynamic
    notes: {
      // it will be date string
      note1: {
        content: 'This is the first note',
        completed: new Date(),
      },
      note2: {
        content: 'This is the second note',
      },
    },
    lastMorningMed: new Date(),
    lastAfternoonMed: undefined,
    lastEveningMed: "yesterday's date",
    lastNightMed: undefined,
    preBreakfastGlucoCheck: new Date(),
    postBreakfastGlucoCheck: 8,
    postDinnerfastGlucoCheck: new Date(),
    preSleepGlucoCheck: 1,
  },
};
