'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, ReactNode } from 'react';
import BackLink from './BackLink';
import PageTitle from './PageTitle';
import PasswordDialog from './PasswordDialog';
import { usePasswordProtect } from './PasswordProtectContext';
import { getValidatedWorks, getValidatedWork } from '@/lib/works';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface WorkTemplateProps {
  slug: string;
  children: ReactNode;
}

const WorkTemplate = ({ slug, children }: WorkTemplateProps) => {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const { isUnlocked, setShowPasswordDialog, setPendingWorkSlug } = usePasswordProtect();

  const work = getValidatedWork(slug);
  const allWorks = getValidatedWorks();
  const currentIndex = allWorks.findIndex((work) => work.slug === slug);
  const previousWork = allWorks[currentIndex - 1];
  const nextWork = allWorks[currentIndex + 1];

  useEffect(() => {
    const loadCoverImage = async () => {
      try {
        const image = await import(`@/app/works/${slug}/img/cover.png`);
        setCoverImage(image.default);
      } catch (error) {
        console.error(`Failed to load cover image for ${slug}:`, error);
        setCoverImage(null);
      }
    };
    loadCoverImage();
  }, [slug]);

  useEffect(() => {
    if (work?.protected && !isUnlocked) {
      setPendingWorkSlug(slug);
      setShowPasswordDialog(true);
    }
  }, [work, isUnlocked, setShowPasswordDialog, setPendingWorkSlug, slug]);

  const handlePasswordSuccess = () => {
    // Toast is now handled in PasswordDialog component
  };

  if (!work) {
    return <p>Work not found.</p>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto grow">
        <BackLink link="/works" label="Back to all works" />
        <PageTitle title={work.title} />
        <div className="w-full">
          {coverImage ? (
            <Image
              width={800}
              height={200}
              src={coverImage}
              alt={`${work.title} cover image`}
            />
          ) : (
            <div className="flex justify-center items-center w-full h-48 bg-zinc-200">
              <span className="text-zinc-500">Loading cover image...</span>
            </div>
          )}
        </div>
        <div className="work-details">
          <h1>{work.title}</h1>
          <p>{work.desc}</p>
          <p>
            <strong>Owner:</strong> {work.owner}
          </p>
          <p>
            <strong>Role:</strong> {work.role}
          </p>
          <p>
            <strong>Platform:</strong> {work.platform}
          </p>
          <p>
            <strong>Year:</strong> {work.year}
          </p>
          <p>
            <strong>Duration:</strong> {work.duration}
          </p>
          {/* Add other details as needed */}
        </div>
        <div className="work-content">{children}</div>
        <div className="work-navigation">
          {previousWork && (
            <Link href={`/works/${previousWork.slug}`}>
              Previous: {previousWork.title}
            </Link>
          )}
          {nextWork && (
            <Link href={`/works/${nextWork.slug}`}>Next: {nextWork.title}</Link>
          )}
        </div>
      </div>
      <Footer />

      <PasswordDialog
        workTitle={work.title}
        onSuccess={handlePasswordSuccess}
      />
    </>
  );
};

export default WorkTemplate;
