import { z } from 'zod';

// Core Data Models
export const WorkSchema = z.object({
  order: z.number(),
  title: z.string().min(1),
  desc: z.string(),
  owner: z.string(),
  background: z.string(),
  foreground: z.string(),
  thumbnailClassName: z.string().optional(),
  tags: z.array(z.string()),
  team: z.string(),
  role: z.string(),
  contribution: z.string(),
  platform: z.string(),
  year: z.string(),
  duration: z.string(),
  slug: z.string().min(1),
  protected: z.boolean(),
  published: z.boolean(),
  featured: z.boolean().optional(),
});

export const BlogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  date: z.string(),
  content: z.string(),
});

export const BlogPostMetadataSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  date: z.string(),
});

// API Request/Response Schemas
export const PasswordVerificationRequestSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

export const PasswordVerificationSuccessSchema = z.object({
  success: z.literal(true),
});

export const PasswordVerificationErrorSchema = z.object({
  error: z.string(),
});

// About Page Schemas
export const RoleSchema = z.object({
  title: z.string(),
  period: z.string(),
});

export const EducationBlockPropsSchema = z.object({
  year: z.string(),
  title: z.string(),
  source: z.string(),
});

export const CommunityBlockPropsSchema = z.object({
  year: z.string(),
  title: z.string(),
  source: z.string(),
});

export const LikeAndDislikeBlockPropsSchema = z.object({
  isLike: z.boolean(),
  tags: z.array(z.string()),
});

export const SkillsBlockPropsSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
});

export const ExperienceBlockPropsSchema = z.object({
  company: z.string(),
  roles: z.array(RoleSchema),
});

export const MediaMentionBlockPropsSchema = z.object({
  year: z.string(),
  title: z.string(),
  link: z.string().url(),
  source: z.string(),
  translation: z.string().optional(),
});

export const StoryBlockPropsSchema = z.object({
  year: z.string(),
  title: z.string(),
  story: z.string(),
  position: z.enum(['start', 'center', 'end']).optional(),
});

// Toast System Schema
export const ToastSchema = z.object({
  id: z.string(),
  message: z.string(),
  type: z.enum(['success', 'error']),
});

// Component Props Schemas (for form validation)
export const BackLinkPropsSchema = z.object({
  link: z.string(),
  label: z.string(),
});

export const PageTitlePropsSchema = z.object({
  title: z.string(),
});

export const WorkCardPropsSchema = z.object({
  work: WorkSchema,
});

export const PasswordDialogPropsSchema = z.object({
  workTitle: z.string(),
});

// Exported TypeScript types inferred from Zod schemas
export type Work = z.infer<typeof WorkSchema>;
export type BlogPost = z.infer<typeof BlogPostSchema>;
export type BlogPostMetadata = z.infer<typeof BlogPostMetadataSchema>;
export type PasswordVerificationRequest = z.infer<typeof PasswordVerificationRequestSchema>;
export type PasswordVerificationSuccess = z.infer<typeof PasswordVerificationSuccessSchema>;
export type PasswordVerificationError = z.infer<typeof PasswordVerificationErrorSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type EducationBlockProps = z.infer<typeof EducationBlockPropsSchema>;
export type CommunityBlockProps = z.infer<typeof CommunityBlockPropsSchema>;
export type LikeAndDislikeBlockProps = z.infer<typeof LikeAndDislikeBlockPropsSchema>;
export type SkillsBlockProps = z.infer<typeof SkillsBlockPropsSchema>;
export type ExperienceBlockProps = z.infer<typeof ExperienceBlockPropsSchema>;
export type MediaMentionBlockProps = z.infer<typeof MediaMentionBlockPropsSchema>;
export type StoryBlockProps = z.infer<typeof StoryBlockPropsSchema>;
export type Toast = z.infer<typeof ToastSchema>;
export type BackLinkProps = z.infer<typeof BackLinkPropsSchema>;
export type PageTitleProps = z.infer<typeof PageTitlePropsSchema>;
export type WorkCardProps = z.infer<typeof WorkCardPropsSchema>;
export type PasswordDialogProps = z.infer<typeof PasswordDialogPropsSchema>;