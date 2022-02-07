import React from 'react';
import residents from '../../mock/residents';
import checkActivity from '../../scripts/checkActivity';
import formatTask from '../../scripts/formatTask';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from '../../components/Nav';
import TextArea from '../../components/TextArea';
import Submit from '../../components/Submit';
import Checkbox from '../../components/Checkbox';

export default function Resident() {
  const {
    query: { id },
  } = useRouter();

  const residentId = Array.isArray(id) ? id[0] : id;
  const [visible, setVisible] = React.useState(false);
  const [note, setNote] = React.useState('');
  const resident = Array.isArray(id) ? '' : residents[id];
  if (resident)
    return (
      <main>
        <Nav>
          {resident.name}
          <Link href="/residents">&larr; Back</Link>
        </Nav>
        <div>
          <img
            src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-document-edit-icon.png"
            onClick={() => setVisible(!visible)}
          />
          {visible && (
            <TextArea
              value={note}
              onChange={(val) => setNote(val)}
              label="Note"
            />
          )}
          {note.trim() && (
            <Submit
              onClick={() => {
                console.log('note created');
                setVisible(!visible);
              }}
            />
          )}
        </div>
        <div style={{ marginLeft: 8 }}>
          {formatTask(resident)
            .sort((prev, next) => next.tastImportance - prev.tastImportance)
            .map(({ ...task }) => (
              <div>
                <Checkbox
                  onCheck={() => checkActivity({ ...task, id: residentId })}
                  checked={false}
                  label={task.taskName}
                />
              </div>
            ))}
        </div>
        <style jsx>{`
        img {
          height: 50px;
          width: 50px;
          cursor: pointer;
        }`}</style>
      </main>
    );
  return <div>Resident not found</div>;
}
