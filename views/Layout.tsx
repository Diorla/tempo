import Head from 'next/head';
import Nav from '../components/Nav';
import HeaderLink from '../components/HeaderLink';
import FAB from '../components/FAB';
import Modal from '../components/Modal';
import TextInput from '../components/TextInput';
import Checkbox from '../components/Checkbox';
import Submit from '../components/Submit';
import React from 'react';

export default function Layout({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState({
    name: '',
    roomNumber: 0,
    morningMeds: true,
    afternoonMeds: true,
    eveningMeds: true,
    nightMeds: true,
    glucoCheck: false,
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Modal visible={visible} onClose={() => setVisible(!visible)}>
          <TextInput
            label="Name"
            value={value.name}
            onChange={(name) =>
              setValue({
                ...value,
                name,
              })
            }
          />
          <TextInput
            type="number"
            label="Room number"
            value={value.roomNumber}
            onChange={(roomNumber) =>
              setValue({
                ...value,
                roomNumber,
              })
            }
          />
          <Checkbox
            label="Morning meds"
            checked={value.morningMeds}
            onCheck={() =>
              setValue({
                ...value,
                morningMeds: !value.morningMeds,
              })
            }
          />
          <Checkbox
            label="Afternoon meds"
            checked={value.afternoonMeds}
            onCheck={() =>
              setValue({
                ...value,
                afternoonMeds: !value.afternoonMeds,
              })
            }
          />
          <Checkbox
            label="Evening meds"
            checked={value.eveningMeds}
            onCheck={() =>
              setValue({
                ...value,
                eveningMeds: !value.eveningMeds,
              })
            }
          />
          <Checkbox
            label="Night meds"
            checked={value.nightMeds}
            onCheck={() =>
              setValue({
                ...value,
                nightMeds: !value.nightMeds,
              })
            }
          />
          <Checkbox
            label="Glucose check"
            checked={value.glucoCheck}
            onCheck={() =>
              setValue({
                ...value,
                glucoCheck: !value.glucoCheck,
              })
            }
          />
          <Submit
            onClick={() => {
              console.log(value);
              setVisible(false);
            }}
          />
        </Modal>
        <Nav>
          <span>TT</span>
          <div className="navlinks">
            <HeaderLink href="/" title="Home" active={path === 'home'} />
            <HeaderLink
              href="/residents"
              title="Residents"
              active={path === 'resident'}
            />
          </div>
        </Nav>
        <div>{children}</div>

        <FAB title="+" onClick={() => setVisible(!visible)} />
      </main>
      <style jsx>{``}</style>
    </div>
  );
}
