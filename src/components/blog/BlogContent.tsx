'use client';

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXComponents } from './MDXComponents';
import { useEffect, useState } from 'react';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface BlogContentProps {
  source: string;
}

export default function BlogContent({ source }: BlogContentProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const processMDX = async () => {
      const serialized = await serialize(source);
      setMdxSource(serialized);
    };
    processMDX();
  }, [source]);

  if (!mdxSource) {
    return <div>Loading...</div>;
  }

  return <MDXRemote {...mdxSource} components={MDXComponents} />;
}