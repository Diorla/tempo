export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      {children}
      <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        min-height: 50px;
        box-shadow: 0 0 4px silver;
        align-items: center;
        padding: 4px;
        position: sticky;
        top: 0;
        background: white;
      }
  `}</style>
    </nav>
  );
}
