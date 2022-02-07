export default function Submit({ onClick }: { onClick: (e: any) => void }) {
  return (
    <div>
      <button onClick={onClick}>Submit</button>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
        button {
          border: none;
          padding: 4px 8px;
          background: teal;
          color: white;
          box-shadow: 0 0 2px teal;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
