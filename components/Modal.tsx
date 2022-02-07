export default function Modal({
  children,
  visible,
  onClose,
}: {
  children: React.ReactNode;
  visible: boolean;
  onClose: (e: any) => void;
}) {
  if (visible)
    return (
      <div
        className="backdrop"
        onClick={(e: any) => {
          if (e.target?.className?.includes('backdrop')) onClose(e);
        }}
      >
        <div className="box">{children}</div>
        <style jsx>{`
        .backdrop {
          position: fixed;
          top: 0;
          height: 100vh;
          width: 100vw;
          background-color: #00000080;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }
        .box {
          background: white;
          width: clamp(240px, 80%, 760px);
          min-height: 240px;
          border-radius: 4px;
          padding: 2px;
          box-shadow: 0 0 4px black;
        }
        `}</style>
      </div>
    );
  return null;
}
