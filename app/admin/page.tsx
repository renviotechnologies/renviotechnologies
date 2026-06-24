"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Video,
  Mail,
  CreditCard,
  TrendingUp,
  Settings,
  Users,
  Star,
  Menu,
  X,
  LogOut,
} from "lucide-react";

// Dashboard Components
import ProjectsManager from "@/components/admin/ProjectsManager";
import BlogsManager from "@/components/admin/BlogsManager";
import ReelsManager from "@/components/admin/ReelsManager";
import ContactsManager from "@/components/admin/ContactsManager";
import ServicesManager from "@/components/admin/ServicesManager";
import PaymentsManager from "@/components/admin/PaymentsManager";
import Analytics from "@/components/admin/Analytics";
import SettingsPanel from "@/components/admin/SettingsPanel";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "blogs", label: "Blogs", icon: FileText },
  { id: "reels", label: "Reels", icon: Video },
  { id: "contacts", label: "Contact Forms", icon: Mail },
  { id: "services", label: "Services", icon: Star },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
  { id: "settings", label: "Settings", icon: Settings },
];

const dashboardStats = {
  totalProjects: 24,
  activeProjects: 12,
  totalBlogs: 18,
  totalReels: 32,
  unreadContacts: 5,
  monthlyRevenue: 84500,
  monthlyGrowth: 23.5,
  satisfaction: 98,
};

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "projects":
        return <ProjectsManager />;
      case "blogs":
        return <BlogsManager />;
      case "reels":
        return <ReelsManager />;
      case "contacts":
        return <ContactsManager />;
      case "services":
        return <ServicesManager />;
      case "payments":
        return <PaymentsManager />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <SettingsPanel />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b">
            <span className="text-xl font-bold">
              Aerovince<span className="text-green-600">Admin</span>
            </span>
          </div>

          {/* Menu */}
          <nav className="flex-1 py-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 ${
                  activeTab === item.id
                    ? "bg-gray-100 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon size={20} />
                {sidebarOpen && item.label}
              </button>
            ))}
          </nav>

          {/* Logout (now just UI button) */}
          <div className="p-4 border-t">
            <button className="w-full flex items-center gap-2 text-red-600">
              <LogOut size={20} />
              {sidebarOpen && "Logout"}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main */}
      <main
        className={`transition-all ${sidebarOpen ? "ml-[280px]" : "ml-[80px]"}`}
      >
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
          </button>

          <div className="flex items-center gap-3">
            <Mail />
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
              A
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">{renderContent()}</div>
      </main>
    </div>
  );
}

// Dashboard Overview
function DashboardOverview() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(dashboardStats).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">{key}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
