// components/admin/ServicesManager.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  DollarSign,
  Eye,
  Search,
  Tag,
  Star,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  icon: string;
  isPopular?: boolean;
  status: "active" | "inactive";
  order: number;
}

const sampleServices: Service[] = [
  {
    id: 1,
    title: "App Development",
    description:
      "Custom mobile applications that engage users and drive business growth.",
    price: 4999,
    features: ["iOS & Android", "React Native", "Flutter"],
    icon: "zap",
    isPopular: true,
    status: "active",
    order: 1,
  },
];

export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>(sampleServices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((s) => s.id !== id));
    }
  };

  const toggleStatus = (id: number) => {
    setServices(
      services.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "active" ? "inactive" : "active" }
          : s,
      ),
    );
  };

  const updateOrder = (id: number, direction: "up" | "down") => {
    const index = services.findIndex((s) => s.id === id);
    if (direction === "up" && index > 0) {
      const newServices = [...services];
      [newServices[index], newServices[index - 1]] = [
        newServices[index - 1],
        newServices[index],
      ];
      setServices(newServices);
    } else if (direction === "down" && index < services.length - 1) {
      const newServices = [...services];
      [newServices[index], newServices[index + 1]] = [
        newServices[index + 1],
        newServices[index],
      ];
      setServices(newServices);
    }
  };

  const totalRevenue = services.reduce((sum, s) => sum + s.price, 0);
  const activeServices = services.filter((s) => s.status === "active").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Services Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your service offerings and pricing
          </p>
        </div>
        <button
          onClick={() => {
            setEditingService(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          <Plus size={18} />
          Add Service
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">
            {services.length}
          </div>
          <div className="text-sm text-gray-500">Total Services</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {activeServices}
          </div>
          <div className="text-sm text-gray-500">Active Services</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">
            ${totalRevenue.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Total Value</div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-600 w-16">
                Order
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Service
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Price
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Features
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
            {filteredServices.map((service, idx) => (
              <tr
                key={service.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateOrder(service.id, "up")}
                      className="p-1 hover:bg-gray-200 rounded"
                      disabled={idx === 0}
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => updateOrder(service.id, "down")}
                      className="p-1 hover:bg-gray-200 rounded"
                      disabled={idx === filteredServices.length - 1}
                    >
                      ↓
                    </button>
                  </div>
                </td>
                <td className="p-4">
                  <div>
                    <p className="font-medium text-gray-900">{service.title}</p>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {service.description}
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <DollarSign size={16} className="text-gray-400" />
                    <span className="font-semibold text-gray-900">
                      {service.price.toLocaleString()}
                    </span>
                  </div>
                  {service.isPopular && (
                    <span className="text-xs text-yellow-600">Popular</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="text-xs text-gray-400">
                        +{service.features.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => toggleStatus(service.id)}
                    className={`px-2 py-1 text-xs rounded-full ${
                      service.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {service.status}
                  </button>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingService(service);
                        setIsModalOpen(true);
                      }}
                      className="p-1.5 hover:bg-gray-100 rounded-lg"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="p-1.5 hover:bg-red-50 text-red-600 rounded-lg"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingService(null);
        }}
        onSave={(service: Service) => {
          if (editingService) {
            setServices(
              services.map((s) => (s.id === service.id ? service : s)),
            );
          } else {
            setServices([
              ...services,
              { ...service, id: Date.now(), order: services.length + 1 },
            ]);
          }
          setIsModalOpen(false);
          setEditingService(null);
        }}
        service={editingService}
      />
    </div>
  );
}

function ServiceModal({ isOpen, onClose, onSave, service }: any) {
  const [features, setFeatures] = useState<string[]>(service?.features || [""]);
  const [formData, setFormData] = useState({
    title: service?.title || "",
    description: service?.description || "",
    price: service?.price || "",
    isPopular: service?.isPopular || false,
    status: service?.status || "active",
  });

  if (!isOpen) return null;

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (idx: number) =>
    setFeatures(features.filter((_, i) => i !== idx));
  const updateFeature = (idx: number, value: string) => {
    const newFeatures = [...features];
    newFeatures[idx] = value;
    setFeatures(newFeatures);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
          <h2 className="text-xl font-bold text-gray-900">
            {service ? "Edit Service" : "Add New Service"}
          </h2>
        </div>
        <div className="p-4 space-y-4">
          <input
            type="text"
            placeholder="Service Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
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
            type="number"
            placeholder="Price (USD)"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />

          {/* Features Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Features
            </label>
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => updateFeature(idx, e.target.value)}
                  placeholder="Feature"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
                />
                <button
                  onClick={() => removeFeature(idx)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={addFeature}
              className="text-sm text-green-600 hover:text-green-700 mt-2"
            >
              + Add Feature
            </button>
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.isPopular}
              onChange={(e) =>
                setFormData({ ...formData, isPopular: e.target.checked })
              }
              className="rounded"
            />
            <span className="text-sm text-gray-700">Mark as Popular</span>
          </label>

          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
          <button
            onClick={() =>
              onSave({
                ...formData,
                features: features.filter((f) => f.trim()),
                id: service?.id,
              })
            }
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
