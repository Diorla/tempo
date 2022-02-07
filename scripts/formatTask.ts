import Resident from '../interfaces/Resident';
import Task from '../interfaces/Task';
import isToday from './isToday';

const formatTask = (resident: Resident) => {
  const taskList: Task[] = [];
  const {
    id,
    roomNumber,
    name,
    morningMeds,
    afternoonMeds,
    eveningMeds,
    lastMorningMed,
    lastAfternoonMed,
    lastEveningMed,
    lastNightMed,
    nightMeds,
    glucoCheck,
    preBreakfastGlucoCheck,
    postBreakfastGlucoCheck,
    postDinnerfastGlucoCheck,
    preSleepGlucoCheck,
    notes,
  } = resident;

  if (morningMeds && !isToday(lastMorningMed)) {
    taskList.push({
      name,
      roomNumber,
      taskName: 'Morning medication',
      tastImportance: 4,
      id,
      taskId: 'lastMorningMed',
    });
  }
  if (afternoonMeds && !isToday(lastAfternoonMed)) {
    taskList.push({
      name,
      roomNumber,
      taskName: 'Afternoon medication',
      tastImportance: 3,
      id,
      taskId: 'lastAfternoonMed',
    });
  }
  if (eveningMeds && !isToday(lastEveningMed)) {
    taskList.push({
      name,
      roomNumber,
      taskName: 'Evening medication',
      tastImportance: 2,
      id,
      taskId: 'lastEveningMed',
    });
  }
  if (nightMeds && !isToday(lastNightMed)) {
    taskList.push({
      name,
      roomNumber,
      taskName: 'Night medication',
      tastImportance: 1,
      id,
      taskId: 'lastNightMed',
    });
  }
  if (glucoCheck && !isToday(preBreakfastGlucoCheck)) {
    taskList.push({
      name,
      roomNumber,
      taskName: 'Pre breakfast Glucose check',
      tastImportance: 5,
      id,
      taskId: 'preBreakfastGlucoCheck',
    });
  }
  if (glucoCheck && !isToday(postBreakfastGlucoCheck)) {
    taskList.push({
      name,
      roomNumber,
      taskName: 'Post breakfast Glucose check',
      tastImportance: 4,
      id,
      taskId: 'postBreakfastGlucoCheck',
    });
  }

  if (glucoCheck && !isToday(postDinnerfastGlucoCheck)) {
    taskList.push({
      name,
      roomNumber,
      taskName: 'After dinner glucose check',
      tastImportance: 2,
      id,
      taskId: 'postDinnerfastGlucoCheck',
    });
  }
  if (glucoCheck && !isToday(preSleepGlucoCheck)) {
    taskList.push({
      name,
      roomNumber,
      taskName: 'Before sleep glucose check',
      tastImportance: 1,
      id,
      taskId: 'preSleepGlucoCheck',
    });
  }
  Object.keys(notes).forEach((noteKey) => {
    if (!notes[noteKey].completed) {
      taskList.push({
        name,
        roomNumber,
        taskName: notes[noteKey].content,
        tastImportance: 5,
        id,
        taskId: noteKey,
      });
    }
  });
  return taskList;
};

export default formatTask;
