'use client';

import React from 'react';
import PageHero from '@/components/ui/PageHero';
import BlogGrid from '@/components/blogs/BlogGrid';
import TeamCTA from '@/components/TeamCTA';

export default function BlogsPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Insights"
                subtitle="The MarkTale Blog"
                description="Expert perspectives on marketing, technology, and startup growth."
            />
            <BlogGrid />
            <TeamCTA />
        </div>
    );
}