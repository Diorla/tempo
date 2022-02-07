export default function TextInput({
  type = 'text',
  value,
  onChange,
  label,
}: {
  type?: string;
  value: any;
  onChange: (e: any) => void;
  label: string;
}) {
  const a =
    'cls-' + label + Math.floor(Math.random() * 1000000000) + Date.now();
  return (
    <div>
      <label htmlFor={a}>{label}</label>
      <textarea
        id={a}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
      />
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          padding: 4px;
        }
        textarea {
          font-size: 16px;
          outline: none;
          resize: vertical;
        }
      `}</style>
    </div>
  );
}
