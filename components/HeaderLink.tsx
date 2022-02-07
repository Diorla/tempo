import Link from 'next/link';

export default function HeaderLink({
  href,
  title,
  active = false,
}: {
  href: string;
  title: string;
  active?: boolean;
}) {
  return (
    <>
      <Link href={href}>
        <a className={active && 'active'}>{title}</a>
      </Link>
      <style jsx>{`
      a {
        color: cornflowerblue;
        margin: 4px;
      }
      a:hover {
        color: cadetblue;
        text-decoration: none;
      }
      a.active {
        font-weight: bold;
      }
      `}</style>
    </>
  );
}
