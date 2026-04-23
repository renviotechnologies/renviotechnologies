import { notFound } from 'next/navigation';
import { getBlogBySlug, getAllSlugs } from '@/lib/blogData';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog slugs
export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return { title: 'Blog Not Found | MarkTale' };
    }

    return {
        title: `${blog.title} | MarkTale Blog`,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image],
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative w-full h-[55vh] md:h-[65vh] bg-kestone-black overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kestone-black via-kestone-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-16 lg:px-24 max-w-5xl mx-auto w-full">
                    {/* Back Link */}
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold uppercase tracking-widest mb-6 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Blogs
                    </Link>

                    {/* Category Badge */}
                    <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 bg-kestone-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                            <Tag size={11} />
                            {blog.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-6 max-w-4xl">
                        {blog.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm font-medium uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                            <User size={14} />
                            {blog.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {blog.date}
                        </span>
                        {blog.readTime && (
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} />
                                {blog.readTime}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
                {/* Excerpt / Lead */}
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12 border-l-4 border-kestone-red pl-6">
                    {blog.excerpt}
                </p>

                {/* Content */}
                <article
                    className="prose prose-lg max-w-none
                        prose-headings:font-heading prose-headings:font-bold prose-headings:text-kestone-black
                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                        prose-strong:text-kestone-black
                        prose-em:text-gray-700
                        prose-a:text-kestone-red prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Footer / CTA */}
                <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-kestone-black hover:text-kestone-red font-bold uppercase tracking-widest text-sm transition-colors"
                    >
                        <ArrowLeft size={16} />
                        All Articles
                    </Link>

                    <Link
                        href="/contact"
                        className="bg-kestone-red text-white px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-kestone-black transition-colors rounded"
                    >
                        Work With Us →
                    </Link>
                </div>
            </div>
        </main>
    );
}
