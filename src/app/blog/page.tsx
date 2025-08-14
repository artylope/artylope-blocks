import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className="container grow h-full flex flex-col">
        <div className="w-full mx-auto py-12">
          <h1 className="heading-1-responsive font-heading content-primary">Blog</h1>
          <div className='py-8'>
          {posts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts found.</p>
        ) : (
          <div className="">
            {posts.map((post) => (
              <article
                key={post.slug}
                className=" border-b last:border-b-0 ">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block transition-colors hover:text-primary flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-6 lg:items-center py-6 lg:py-10">
                
                  <time className="content-default lg:w-40">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>  <h2 className="content-strong heading-6-responsive">{post.title}</h2>
                </Link>
              </article>
            ))}
          </div>
        )}
          </div>
        </div>

       
      </div>
      <Footer />
    </div>
  );
}
