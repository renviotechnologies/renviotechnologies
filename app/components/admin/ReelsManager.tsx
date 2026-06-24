// components/admin/ReelsManager.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Play,
  Eye,
  Heart,
  Calendar,
  Search,
  Filter,
  Youtube,
  Instagram,
} from "lucide-react";
import Image from "next/image";

interface Reel {
  id: number;
  title: string;
  brand: string;
  thumbnail: string;
  videoUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  views: string;
  likes: string;
  duration: string;
  description: string;
  platform: "instagram" | "youtube";
  engagement: string;
  status: "published" | "draft";
  date: string;
}

const sampleReels: Reel[] = [
  {
    id: 1,
    title: "Delhi059 Behind the Scenes",
    brand: "Delhi059",
    thumbnail: "/reels/delhi059.jpg",
    instagramUrl: "https://instagram.com/p/xxx",
    views: "125K",
    likes: "8.2K",
    duration: "0:45",
    description: "A day in the life at Canada's favorite restaurant",
    platform: "instagram",
    engagement: "6.5%",
    status: "published",
    date: "2024-01-20",
  },
];

export default function ReelsManager() {
  const [reels, setReels] = useState<Reel[]>(sampleReels);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReel, setEditingReel] = useState<Reel | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPlatform, setFilterPlatform] = useState<
    "all" | "instagram" | "youtube"
  >("all");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "published" | "draft"
  >("all");

  const filteredReels = reels.filter((reel) => {
    const matchesSearch =
      reel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reel.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform =
      filterPlatform === "all" || reel.platform === filterPlatform;
    const matchesStatus =
      filterStatus === "all" || reel.status === filterStatus;
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this reel?")) {
      setReels(reels.filter((r) => r.id !== id));
    }
  };

  // Calculate total stats
  const totalViews = reels.reduce(
    (sum, reel) => sum + parseInt(reel.views.replace("K", "000")),
    0,
  );
  const totalLikes = reels.reduce(
    (sum, reel) => sum + parseFloat(reel.likes.replace("K", "")) * 1000,
    0,
  );
  const avgEngagement = (
    reels.reduce((sum, reel) => sum + parseFloat(reel.engagement), 0) /
    reels.length
  ).toFixed(1);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reels Management</h1>
          <p className="text-gray-500 mt-1">
            Manage your video content across platforms
          </p>
        </div>
        <button
          onClick={() => {
            setEditingReel(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus size={18} />
          Add Reel
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{reels.length}</div>
          <div className="text-sm text-gray-500">Total Reels</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">
            {Math.floor(totalViews / 1000)}M+
          </div>
          <div className="text-sm text-gray-500">Total Views</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">
            {Math.floor(totalLikes / 1000)}K+
          </div>
          <div className="text-sm text-gray-500">Total Likes</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {avgEngagement}%
          </div>
          <div className="text-sm text-gray-500">Avg. Engagement</div>
        </div>
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
            placeholder="Search reels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <select
          value={filterPlatform}
          onChange={(e) => setFilterPlatform(e.target.value as any)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
        >
          <option value="all">All Platforms</option>
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
        </select>
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

      {/* Reels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredReels.map((reel) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-[9/16] bg-gray-100">
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Play
                    size={24}
                    className="text-gray-900 ml-0.5"
                    fill="gray-900"
                  />
                </div>
              </div>
              <div className="absolute top-3 left-3 flex gap-2">
                {reel.platform === "instagram" ? (
                  <Instagram size={16} className="text-white" />
                ) : (
                  <Youtube size={16} className="text-white" />
                )}
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded-md">
                <span className="text-white text-xs">{reel.duration}</span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                  {reel.title}
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    reel.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {reel.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{reel.brand}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    {reel.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={12} />
                    {reel.likes}
                  </span>
                </div>
                <span className="text-green-600">
                  {reel.engagement} engagement
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEditingReel(reel);
                    setIsModalOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-xs"
                >
                  <Edit size={12} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(reel.id)}
                  className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-xs"
                >
                  <Trash2 size={12} />
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reel Modal */}
      <ReelModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingReel(null);
        }}
        onSave={(reel: Reel) => {
          if (editingReel) {
            setReels(reels.map((r) => (r.id === reel.id ? reel : r)));
          } else {
            setReels([...reels, { ...reel, id: Date.now() }]);
          }
          setIsModalOpen(false);
          setEditingReel(null);
        }}
        reel={editingReel}
      />
    </div>
  );
}

function ReelModal({ isOpen, onClose, onSave, reel }: any) {
  const [formData, setFormData] = useState({
    title: reel?.title || "",
    brand: reel?.brand || "",
    description: reel?.description || "",
    thumbnail: reel?.thumbnail || "",
    instagramUrl: reel?.instagramUrl || "",
    youtubeUrl: reel?.youtubeUrl || "",
    platform: reel?.platform || "instagram",
    views: reel?.views || "",
    likes: reel?.likes || "",
    duration: reel?.duration || "",
    engagement: reel?.engagement || "",
    status: reel?.status || "published",
    date: reel?.date || new Date().toISOString().split("T")[0],
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
          <h2 className="text-xl font-bold text-gray-900">
            {reel ? "Edit Reel" : "Add New Reel"}
          </h2>
        </div>
        <div className="p-4 space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Brand"
            value={formData.brand}
            onChange={(e) =>
              setFormData({ ...formData, brand: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <textarea
            placeholder="Description"
            rows={3}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Thumbnail URL"
            value={formData.thumbnail}
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <select
            value={formData.platform}
            onChange={(e) =>
              setFormData({ ...formData, platform: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
          >
            <option value="instagram">Instagram</option>
            <option value="youtube">YouTube</option>
          </select>
          {formData.platform === "instagram" ? (
            <input
              type="text"
              placeholder="Instagram URL"
              value={formData.instagramUrl}
              onChange={(e) =>
                setFormData({ ...formData, instagramUrl: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
            />
          ) : (
            <input
              type="text"
              placeholder="YouTube URL"
              value={formData.youtubeUrl}
              onChange={(e) =>
                setFormData({ ...formData, youtubeUrl: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
            />
          )}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Views (e.g., 125K)"
              value={formData.views}
              onChange={(e) =>
                setFormData({ ...formData, views: e.target.value })
              }
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
            />
            <input
              type="text"
              placeholder="Likes (e.g., 8.2K)"
              value={formData.likes}
              onChange={(e) =>
                setFormData({ ...formData, likes: e.target.value })
              }
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Duration (e.g., 0:45)"
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
            />
            <input
              type="text"
              placeholder="Engagement (e.g., 6.5%)"
              value={formData.engagement}
              onChange={(e) =>
                setFormData({ ...formData, engagement: e.target.value })
              }
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
          <button
            onClick={() => onSave(formData)}
            className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
