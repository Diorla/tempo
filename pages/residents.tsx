import Layout from '../views/Layout';
import residents from '../mock/residents';
import React from 'react';
import ResidentCard from '../components/ResidentCard';

export default function Residents() {
  return (
    <Layout path="resident">
      <div>
        {Object.keys(residents).map((itemKey) => (
          <ResidentCard {...residents[itemKey]} id={itemKey} />
          // <div>
          //   <div>
          //     <Link href={`/resident/${itemKey}`}>
          //       {residents[itemKey].name}
          //     </Link>
          //     <button
          //       onClick={() => console.log('opens a modal for add new note')}
          //     >
          //       Add note
          //     </button>
          //   </div>
          //   <div style={{ marginLeft: 8 }}>
          //     {formatTask({ ...residents[itemKey], id: itemKey })
          //       .sort((prev, next) => next.tastImportance - prev.tastImportance)
          //       .map((task) => (
          //         <div>
          //           <input
          //             type="checkbox"
          //             onClick={() => checkActivity(task)}
          //           />
          //           {task.taskName}
          //         </div>
          //       ))}
          //   </div>
          // </div>
        ))}
      </div>
    </Layout>
  );
}
