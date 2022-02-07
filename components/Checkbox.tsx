// Checkbox.tsx

export default function Checkbox({
  checked,
  onCheck,
  label,
}: {
  checked: boolean;
  onCheck: (e?: any) => void;
  label: string;
}) {
  const a =
    'cls-' + label + Math.floor(Math.random() * 1000000000) + Date.now();
  return (
    <div>
      <input
        id={a}
        checked={checked}
        onClick={() => onCheck()}
        type="checkbox"
      />
      <label htmlFor={a}>{label}</label>
      <style jsx>{`
        div {
          display: inline-flex;
          padding: 4px;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
