import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BackLink from '@/app/components/BackLink';
import BlogContent from '@/components/blog/BlogContent';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="container">
        <BackLink link="/blog" label="Back" />


        <article className="max-w-xl mx-auto lg:py-16 py-8 lg:space-y-8 space-y-4">
          <header className="space-y-4 text-center">
            <h1 className=" heading-1-responsive font-heading font-semibold text-balance content-strong">{post.title}</h1>
            <time className="content-default">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          <div className="lg:py-8 py-4">
            <BlogContent source={post.content} />
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
