import Link from 'next/link';
import { ArrowLeft, ChevronLeft } from 'lucide-react';

interface BackLinkProps {
  link: string;
  label: string;
}

const BackLink = ({ link, label }: BackLinkProps) => {
  return (
    <Link
      href={link}
      className="-ml-2 inline-flex items-center mb-4 transition-colors content-default  tracking-tighter text-2xl">
      <ChevronLeft size={24} />
      {label}
    </Link>
  );
};

export default BackLink;
