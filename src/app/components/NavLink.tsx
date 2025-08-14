import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  children,
  className = '',
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition-colors duration-200 group tracking-[1px] font-bold font-heading uppercase ${className}`}>
      <span
        className={
          isActive
            ? 'content-primary'
            : 'content-default group-hover:text-zinc-800 dark:group-hover:text-white'
        }>
        {children}
      </span>
    </Link>
  );
}
