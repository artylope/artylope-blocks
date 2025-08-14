import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackLinkProps {
  link: string;
  label: string;
}

const BackLink = ({ link, label }: BackLinkProps) => {
  return (
    <Link
      href={link}
      className="inline-flex gap-2 items-center mb-4 transition-colors content-default">
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
};

export default BackLink;
