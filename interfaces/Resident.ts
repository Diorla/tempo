export default interface Resident {
  id: string;
  roomNumber: number;
  name: string;
  morningMeds: boolean;
  afternoonMeds: boolean;
  eveningMeds: boolean;
  nightMeds: boolean;
  glucoCheck: boolean;
  lastMorningMed: number;
  lastAfternoonMed: number;
  lastEveningMed: number;
  lastNightMed: number;
  preBreakfastGlucoCheck: number;
  postBreakfastGlucoCheck: number;
  postDinnerfastGlucoCheck: number;
  preSleepGlucoCheck: number;
  notes: {
    [key: string]: {
      [key: string]: {
        content: string;
        completed?: number;
      };
    };
  };
}
