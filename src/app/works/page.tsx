'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Lock, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAllWorks } from '@/lib/works';
import { type Work } from '@/lib/schemas';
import PasswordDialog from '@/app/components/PasswordDialog';
import { usePasswordProtect } from '@/app/components/PasswordProtectContext';
import { useToast } from '@/app/components/Toast';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  const isUnpublished = !work.published;
  const isProtected = work.protected;
  const [thumbnailImage, setThumbnailImage] = useState<string | null>(null);
  const { isUnlocked, setShowPasswordDialog, setPendingWorkSlug } =
    usePasswordProtect();
  const { addToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(
          `@/app/works/${work.slug}/img/thumbnail.png`
        );
        setThumbnailImage(image.default);
      } catch (error) {
        console.error(`Failed to load thumbnail for ${work.slug}:`, error);
        setThumbnailImage(null);
      }
    };
    loadImage();
  }, [work.slug]);

  const handleWorkClick = (e: React.MouseEvent) => {
    if (isProtected && !isUnlocked) {
      e.preventDefault();
      setPendingWorkSlug(work.slug);
      setShowPasswordDialog(true);
    }
  };

  const handlePasswordSuccess = () => {
    // Toast is now handled in PasswordDialog component
    router.push(`/works/${work.slug}`);
  };

  const cardContent = (
    <div
      className={`overflow-hidden transition-all hover:shadow-lg h-full relative group ${isUnpublished ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } work-card work-card-${work.slug}`}
      style={{ backgroundColor: work.background }}>

      {/* Title in top left */}
      <div className="absolute top-4 left-4 z-10">
        <h3
          className="text-2xl font-semibold tracking-tight"
          style={{ color: work.foreground }}>
          {work.title}
        </h3>
      </div>

      {/* Thumbnail with hover effect and CSS override support */}
      <div className="relative w-full h-full flex items-center justify-center work-thumbnail-container">
        {thumbnailImage ? (
          <Image
            src={thumbnailImage}
            alt={`${work.title} thumbnail`}
            width={400}
            height={200}
            className={cn(
              "absolute -bottom-16 object-contain max-w-full max-h-full transition-transform duration-100 ease-out group-hover:scale-105",
              work.thumbnailClassName
            )}
          />
        ) : (
          <div
            className="flex justify-center items-center w-32 h-32 opacity-20"
            style={{ color: work.foreground }}>
            <span className="text-sm">Loading...</span>
          </div>
        )}
      </div>

      {/* Status overlays */}
      {isUnpublished && (
        <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-50">
          <div className="flex gap-2 items-center px-3 py-1 bg-white rounded-full">
            <Clock size={16} />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
        </div>
      )}
      {isProtected && work.published && (
        <div className="absolute top-2 right-2">
          <Badge variant="destructive" className="gap-1">
            <Lock size={12} />
            Requires Password
          </Badge>
        </div>
      )}
    </div>
  );

  if (isUnpublished) {
    return (
      <>
        <div>{cardContent}</div>
        <PasswordDialog
          workTitle={work.title}
          onSuccess={handlePasswordSuccess}
        />
      </>
    );
  }

  return (
    <>
      <Link href={`/works/${work.slug}`} onClick={handleWorkClick}>
        {cardContent}
      </Link>
      <PasswordDialog
        workTitle={work.title}
        onSuccess={handlePasswordSuccess}
      />
    </>
  );
};

export default function Works() {
  const allWorks = getAllWorks();
  const sortedWorks = allWorks.filter(work => work.published);

  return (
    <>
      <Header />
      <div className="container py-8 mx-auto">
        <h1 className="mb-8 text-6xl font-heading">Works</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden">
          {sortedWorks.map((work) => (
            <div key={work.slug} className="h-80">
              <WorkCard work={work} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
