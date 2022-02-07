import Link from 'next/link';
import React from 'react';
import Resident from '../interfaces/Resident';
import checkActivity from '../scripts/checkActivity';
import formatTask from '../scripts/formatTask';
import Checkbox from './Checkbox';
import Submit from './Submit';
import TextArea from './TextArea';

export default function ResidentCard(resident: Resident) {
  const [visible, setVisible] = React.useState(false);
  const [note, setNote] = React.useState('');
  return (
    <div className="card">
      <div className="top">
        <Link href={`/resident/${resident.id}`}>{resident.name}</Link>
        <img
          src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-document-edit-icon.png"
          onClick={() => setVisible(!visible)}
        />
      </div>
      {visible && (
        <TextArea value={note} onChange={(val) => setNote(val)} label="Note" />
      )}
      {note.trim() && (
        <Submit
          onClick={() => {
            console.log('note created');
            setVisible(!visible);
          }}
        />
      )}
      <div className="bottom">
        {formatTask({ ...resident })
          .sort((prev, next) => next.tastImportance - prev.tastImportance)
          .map((task) => (
            <div>
              <Checkbox
                label={task.taskName}
                onCheck={() => checkActivity(task)}
                checked={false}
              />
            </div>
          ))}
      </div>
      <style jsx>{`.card {
        box-shadow: 0 0 4px silver;
        margin: 8px 4px;
        padding: 4px;
      }
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        padding-bottom: 2px;
        border-bottom: 1px solid silver;
        font-weight: 500;
      }
      img {
        height: 25px;
        width: 25px;
        cursor: pointer;
      }
      `}</style>
    </div>
  );
}
