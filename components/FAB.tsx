export default function FAB({
  title,
  onClick,
}: {
  title: string;
  onClick: (e: any) => void;
}) {
  return (
    <button onClick={onClick}>
      {title}
      <style jsx>{`button {
        position: fixed;
        right: 25px;
        bottom: 70px;
        background: red;
        color: white;
        border: none;
        border-radius: 50%;
        min-width: 50px;
        min-height: 50px;
        font-size: 36px;
        cursor: pointer;
        box-shadow: 0 0 4px black;
  }`}</style>
    </button>
  );
}
