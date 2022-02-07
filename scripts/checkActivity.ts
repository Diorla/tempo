import Task from '../interfaces/Task';

const checkActivity = (item: Task) => {
  const { name, roomNumber, taskId, id } = item;
  console.log(
    `${item.name}-`,
    item.roomNumber,
    'clicked',
    'you have 5 seconds to undo before updating database using id'
  );

  if (taskId === 'lastMorningMed') {
    console.log('lastMorningMed', name, roomNumber, id);
  } else if (taskId === 'lastAfternoonMed') {
    console.log('lastAfternoonMed', name, roomNumber, id);
  } else if (taskId === 'lastEveningMed') {
    console.log('lastEveningMed', name, roomNumber, id);
  } else if (taskId === 'lastNightMed') {
    console.log('lastNightMed', name, roomNumber, id);
  } else if (taskId === 'preBreakfastGlucoCheck') {
    console.log('preBreakfastGlucoCheck', name, roomNumber, id);
  } else if (taskId === 'postBreakfastGlucoCheck') {
    console.log('postBreakfastGlucoCheck', name, roomNumber, id);
  } else if (taskId === 'postDinnerfastGlucoCheck') {
    console.log('postDinnerfastGlucoCheck', name, roomNumber, id);
  } else if (taskId === 'preSleepGlucoCheck') {
    console.log('preSleepGlucoCheck', name, roomNumber, id);
  } else {
    // This is a note
    console.log('notes', name, roomNumber, taskId, id);
  }
};

export default checkActivity;
