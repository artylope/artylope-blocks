import { ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';
import Link from 'next/link';
import {
  type EducationBlockProps,
  type CommunityBlockProps,
  type LikeAndDislikeBlockProps,
  type SkillsBlockProps,
  type ExperienceBlockProps,
  type MediaMentionBlockProps,
  type StoryBlockProps,
} from '@/lib/schemas';

interface TitleIconProps {
  icon: ReactNode;
}

interface SectionBlockTitleProps {
  title: string;
}

export const TitleIcon = ({ icon }: TitleIconProps) => (
  <div className="flex justify-center items-center w-10 h-10 bg-opacity-10 rounded-md bg-primary-100">
    <div className="flex justify-center items-center w-6 h-6 content-primary">
      {icon}
    </div>
  </div>
);

export const SectionBlockTitle = ({ title }: SectionBlockTitleProps) => (
  <div className="flex gap-x-3 justify-start items-center mb-4">
    <h1 className="content-primary text-lg font-semibold uppercase tracking-[1px]">
      {title}
    </h1>
  </div>
);

interface SectionBlockContainerProps {
  children: ReactNode;
}

interface BlockContainerProps {
  children: ReactNode;
}

interface YearSourceProps {
  year: string;
  source: string;
}

export const SectionBlockContainer = ({
  children,
}: SectionBlockContainerProps) => (
  <div className="flex flex-col gap-y-4">{children}</div>
);

const BlockContainer = ({ children }: BlockContainerProps) => (
  <div className="flex flex-col gap-0.5">{children}</div>
);

const YearSource = ({ year, source }: YearSourceProps) => (
  <div className="flex flex-col items-start justify-start sm:flex-row gap-y-0.5">
    <span className="sm:basis-[2.2rem] content-default">{year}</span>
    <span className="sm:ml-3 content-strong">{source}</span>
  </div>
);

export const EducationBlock = ({
  year,
  title,
  source,
}: EducationBlockProps) => (
  <BlockContainer>
    <div className="font-semibold content-strong">{title}</div>
    <YearSource year={year} source={source} />
  </BlockContainer>
);

export const CommunityBlock = ({
  year,
  title,
  source,
}: CommunityBlockProps) => (
  <BlockContainer>
    <div className="font-semibold content-strong">{title}</div>
    <YearSource year={year} source={source} />
  </BlockContainer>
);

export const LikeAndDislikeBlock = ({
  isLike,
  tags,
}: LikeAndDislikeBlockProps) => (
  <BlockContainer>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-2 py-1 rounded text-sm font-medium ${
            isLike
              ? 'bg-success-50 text-success-700'
              : 'text-danger-700 bg-danger-50'
          }`}>
          {tag}
        </span>
      ))}
    </div>
  </BlockContainer>
);

export const SkillsBlock = ({ title, tags }: SkillsBlockProps) => (
  <BlockContainer>
    <div className="font-semibold content-strong">{title}</div>
    <div className="flex flex-wrap gap-2 my-2">
      {tags
        .sort((a, b) => a.localeCompare(b))
        .map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm rounded surface-backdrop content-default">
            {tag}
          </span>
        ))}
    </div>
  </BlockContainer>
);

export const ExperienceBlock = ({ company, roles }: ExperienceBlockProps) => (
  <BlockContainer>
    <div className="font-semibold content-strong">{company}</div>
    <div className="flex flex-col gap-y-3 py-1">
      {roles.map((role, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-start gap-y-0.5">
          <span className="content-strong">{role.title}</span>{' '}
          <span className="content-default">{role.period}</span>
        </div>
      ))}
    </div>
  </BlockContainer>
);

export const MediaMentionBlock = ({
  year,
  title,
  link,
  source,
  translation,
}: MediaMentionBlockProps) => (
  <BlockContainer>
    <div className="font-semibold cursor-pointer">
      <Link href={link} target="_blank">
        <div className="flex justify-start items-start content-primary">
          <span className="mr-2 w-full content-strong grow">{title}</span>
          <span className="flex justify-center items-center w-6 h-6">
            <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </div>
    {translation && (
      <div className="mt-1 text-sm italic text-zinc-500">{translation}</div>
    )}
    <YearSource year={year} source={source} />
  </BlockContainer>
);

export const StoryBlock = ({
  year,
  title,
  story,
  position = 'center',
}: StoryBlockProps) => (
  <BlockContainer>
    <div className="flex flex-row gap-x-4">
      <div className="flex flex-col justify-center items-center">
        <div
          className={` basis-[1rem] w-0.5 h-full bg-zinc-100 ${
            position === 'start' ? 'invisible' : ''
          }`}></div>
        <div className={`flex justify-center items-center w-3 h-3 basis-3`}>
          <div
            className={`w-3 h-3 bg-white rounded-full border-2 border-primary-500`}></div>
        </div>
        <div
          className={`grow w-0.5 h-full bg-zinc-100 ${
            position === 'end' ? 'invisible' : ''
          }`}></div>
      </div>
      <div className={`flex flex-col pt-2 pb-8 space-y-1`}>
        <span className="mb-1 content-default">{year}</span>
        <span className="text-xl font-semibold content-strong">{title}</span>
        <span className="leading-relaxed content-default">{story}</span>
      </div>
    </div>
  </BlockContainer>
);
