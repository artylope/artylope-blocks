import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPostSchema, BlogPostMetadataSchema, type BlogPost, type BlogPostMetadata } from './schemas';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getAllPosts(): BlogPostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      const postMetadata = {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '1970-01-01',
      };

      try {
        return BlogPostMetadataSchema.parse(postMetadata);
      } catch (error) {
        console.error(`Blog post metadata validation failed for ${slug}:`, error);
        return postMetadata as BlogPostMetadata;
      }
    })
    .filter((post) => {
      const fullPath = path.join(postsDirectory, `${post.slug}.md`);
      const mdxPath = path.join(postsDirectory, `${post.slug}.mdx`);
      
      let filePath: string;
      if (fs.existsSync(fullPath)) {
        filePath = fullPath;
      } else if (fs.existsSync(mdxPath)) {
        filePath = mdxPath;
      } else {
        return false; // Default to unpublished if file not found
      }

      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      // Default to unpublished (false) if not specified
      return data.published === true;
    })
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  
  let filePath: string;
  if (fs.existsSync(fullPath)) {
    filePath = fullPath;
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Return null if post is not published (default to unpublished)
  if (data.published !== true) {
    return null;
  }

  const blogPost = {
    slug,
    title: data.title || 'Untitled',
    date: data.date || '1970-01-01',
    content,
  };

  try {
    return BlogPostSchema.parse(blogPost);
  } catch (error) {
    console.error(`Blog post validation failed for ${slug}:`, error);
    return blogPost as BlogPost;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''))
    .filter((slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
      
      let filePath: string;
      if (fs.existsSync(fullPath)) {
        filePath = fullPath;
      } else if (fs.existsSync(mdxPath)) {
        filePath = mdxPath;
      } else {
        return false; // Default to unpublished if file not found
      }

      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      // Default to unpublished (false) if not specified
      return data.published === true;
    });
}