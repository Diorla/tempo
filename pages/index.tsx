import Layout from '../views/Layout';
import residents from '../mock/residents';
import Task from '../interfaces/Task';
import formatTask from '../scripts/formatTask';
import React from 'react';
import TaskCard from '../components/TaskCard';

export default function Home() {
  const taskList: Task[] = Object.keys(residents)
    .map((item) => formatTask({ ...residents[item], id: item }))
    .flat();

  return (
    <Layout path="home">
      <div>
        {taskList
          .sort(
            (prevItem, nextItem) => prevItem.roomNumber - nextItem.roomNumber
          )
          .sort(
            (prevItem, nextItem) =>
              nextItem.tastImportance - prevItem.tastImportance
          )
          .map((item) => (
            <TaskCard {...item} />
          ))}
      </div>
    </Layout>
  );
}
