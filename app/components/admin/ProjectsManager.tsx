// components/admin/ProjectsManager.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, ExternalLink, Search, Filter } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  status: "active" | "completed";
  date: string;
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Delhi059 Grand Opening",
    category: "Social Media",
    description: "Launch campaign that generated 10K+ impressions",
    image: "/projects/delhi059.jpg",
    link: "https://instagram.com/p/xxx",
    status: "completed",
    date: "2024-01-15",
  },
  // Add more sample projects
];

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "completed"
  >("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const handleSave = (project: Project) => {
    if (editingProject) {
      setProjects(projects.map((p) => (p.id === project.id ? project : p)));
    } else {
      setProjects([...projects, { ...project, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setEditingProject(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Projects Management
          </h1>
          <p className="text-gray-500 mt-1">Manage your portfolio projects</p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus size={18} />
          Add Project
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
            placeholder="Search projects..."
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
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <span
                className={`absolute top-3 right-3 px-2 py-1 text-xs rounded-full ${
                  project.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-green-600 font-medium">
                  {project.category}
                </span>
                <span className="text-xs text-gray-400">{project.date}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEditingProject(project);
                    setIsModalOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <Edit size={14} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSave}
        project={editingProject}
      />
    </div>
  );
}

// Project Modal Component
function ProjectModal({ isOpen, onClose, onSave, project }: any) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    category: project?.category || "",
    description: project?.description || "",
    image: project?.image || "",
    link: project?.link || "",
    status: project?.status || "active",
    date: project?.date || new Date().toISOString().split("T")[0],
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {project ? "Edit Project" : "Add New Project"}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <textarea
            placeholder="Description"
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Link (optional)"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => onSave({ ...formData, id: project?.id })}
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
