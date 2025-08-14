import { WorkSchema, type Work } from './schemas';
import { z } from 'zod';
import worksData from '@/data/works.json';

const WorksArraySchema = z.array(WorkSchema);

export function getValidatedWorks(): Work[] {
  try {
    return WorksArraySchema.parse(worksData);
  } catch (error) {
    console.error('Works data validation failed:', error);
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.issues);
    }
    return [];
  }
}

export function getValidatedWork(slug: string): Work | null {
  const works = getValidatedWorks();
  return works.find(work => work.slug === slug) || null;
}

export function getFeaturedWorks(): Work[] {
  const works = getValidatedWorks();
  return works
    .filter((work) => work.featured && work.published)
    .sort((a, b) => a.order - b.order);
}

export function getAllWorks(): Work[] {
  const works = getValidatedWorks();
  return works.sort((a, b) => a.order - b.order);
}