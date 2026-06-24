// components/admin/BlogsManager.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye, Search } from "lucide-react";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  status: "draft" | "published";
}

const sampleBlogs: Blog[] = [
  {
    id: 1,
    title: "How AI is Transforming Marketing",
    category: "Industry Insights",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the marketing landscape...",
    content: "Full content here...",
    image: "/blogs/ai-marketing.jpg",
    author: "Admin User",
    date: "2024-01-15",
    readTime: "5 min read",
    status: "published",
  },
];

export default function BlogsManager() {
  const [blogs, setBlogs] = useState<Blog[]>(sampleBlogs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "draft" | "published"
  >("all");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || blog.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((b) => b.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blogs Management</h1>
          <p className="text-gray-500 mt-1">
            Create and manage your blog posts
          </p>
        </div>
        <button
          onClick={() => {
            setEditingBlog(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          <Plus size={18} />
          Write Blog
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as any)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Blogs Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-600">
                Title
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Category
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Author
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Date
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Status
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog) => (
              <tr
                key={blog.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-4">
                  <div>
                    <p className="font-medium text-gray-900">{blog.title}</p>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {blog.excerpt}
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {blog.category}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{blog.author}</td>
                <td className="p-4 text-gray-500 text-sm">{blog.date}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      blog.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingBlog(blog);
                        setIsModalOpen(true);
                      }}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-1.5 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Blog Modal would go here similar to Project Modal */}
    </div>
  );
}
