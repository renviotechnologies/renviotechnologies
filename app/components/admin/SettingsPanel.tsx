// components/admin/SettingsPanel.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Settings,
  Globe,
  Mail,
  Shield,
  Bell,
  Database,
  Users,
  Palette,
  Save,
  RefreshCw,
  
} from "lucide-react";

interface SettingsData {
  siteName: string;
  siteDescription: string;
  siteEmail: string;
  sitePhone: string;
  address: string;
  socialLinks: {
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    googleAnalytics: string;
  };
  notifications: {
    emailAlerts: boolean;
    contactNotifications: boolean;
    weeklyReports: boolean;
  };
  appearance: {
    primaryColor: string;
    secondaryColor: string;
    logo: string;
    favicon: string;
  };
}

export default function SettingsPanel() {
  const [activeSection, setActiveSection] = useState("general");
  const [settings, setSettings] = useState<SettingsData>({
    siteName: "Aerovince Technologies",
    siteDescription: "AI-Powered Marketing Agency",
    siteEmail: "hello@Aerovince.com",
    sitePhone: "+1 (555) 123-4567",
    address: "Indore, India",
    socialLinks: {
      instagram: "https://instagram.com/aerovince.io",
      twitter: "https://twitter.com/Aerovince",
      linkedin: "https://linkedin.com/company/Aerovince",
      youtube: "https://youtube.com/Aerovince",
    },
    seo: {
      metaTitle: "Aerovince - AI-Powered Marketing Agency",
      metaDescription:
        "Transform your brand with AI-driven marketing solutions",
      googleAnalytics: "UA-XXXXX-X",
    },
    notifications: {
      emailAlerts: true,
      contactNotifications: true,
      weeklyReports: false,
    },
    appearance: {
      primaryColor: "#1a1a1a",
      secondaryColor: "#10b981",
      logo: "/logo.png",
      favicon: "/favicon.ico",
    },
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSaveMessage("Settings saved successfully!");
    setIsSaving(false);
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const sections = [
    { id: "general", label: "General", icon: Settings },
    { id: "social", label: "Social Links", icon: Globe },
    { id: "seo", label: "SEO", icon: Mail },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1">
            Manage your website configuration and preferences
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50"
        >
          {isSaving ? (
            <RefreshCw size={18} className="animate-spin" />
          ) : (
            <Save size={18} />
          )}
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {saveMessage && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
          <CheckCircle size={18} />
          {saveMessage}
        </div>
      )}

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-4 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <section.icon size={18} />
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {activeSection === "general" && (
            <GeneralSettings settings={settings} setSettings={setSettings} />
          )}
          {activeSection === "social" && (
            <SocialSettings settings={settings} setSettings={setSettings} />
          )}
          {activeSection === "seo" && (
            <SEOSettings settings={settings} setSettings={setSettings} />
          )}
          {activeSection === "notifications" && (
            <NotificationSettings
              settings={settings}
              setSettings={setSettings}
            />
          )}
          {activeSection === "appearance" && (
            <AppearanceSettings settings={settings} setSettings={setSettings} />
          )}
          {activeSection === "security" && <SecuritySettings />}
        </div>
      </div>
    </div>
  );
}

function GeneralSettings({ settings, setSettings }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">General Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Site Name
          </label>
          <input
            type="text"
            value={settings.siteName}
            onChange={(e) =>
              setSettings({ ...settings, siteName: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Site Description
          </label>
          <textarea
            rows={3}
            value={settings.siteDescription}
            onChange={(e) =>
              setSettings({ ...settings, siteDescription: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Email
          </label>
          <input
            type="email"
            value={settings.siteEmail}
            onChange={(e) =>
              setSettings({ ...settings, siteEmail: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            value={settings.sitePhone}
            onChange={(e) =>
              setSettings({ ...settings, sitePhone: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            value={settings.address}
            onChange={(e) =>
              setSettings({ ...settings, address: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

function SocialSettings({ settings, setSettings }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Social Media Links</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instagram
          </label>
          <input
            type="url"
            value={settings.socialLinks.instagram}
            onChange={(e) =>
              setSettings({
                ...settings,
                socialLinks: {
                  ...settings.socialLinks,
                  instagram: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Twitter
          </label>
          <input
            type="url"
            value={settings.socialLinks.twitter}
            onChange={(e) =>
              setSettings({
                ...settings,
                socialLinks: {
                  ...settings.socialLinks,
                  twitter: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn
          </label>
          <input
            type="url"
            value={settings.socialLinks.linkedin}
            onChange={(e) =>
              setSettings({
                ...settings,
                socialLinks: {
                  ...settings.socialLinks,
                  linkedin: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          // components/admin/SettingsPanel.tsx (continued)
          <label className="block text-sm font-medium text-gray-700 mb-1">
            YouTube
          </label>
          <input
            type="url"
            value={settings.socialLinks.youtube}
            onChange={(e) =>
              setSettings({
                ...settings,
                socialLinks: {
                  ...settings.socialLinks,
                  youtube: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

function SEOSettings({ settings, setSettings }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">SEO Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meta Title
          </label>
          <input
            type="text"
            value={settings.seo.metaTitle}
            onChange={(e) =>
              setSettings({
                ...settings,
                seo: { ...settings.seo, metaTitle: e.target.value },
              })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <p className="text-xs text-gray-400 mt-1">
            Recommended length: 50-60 characters
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meta Description
          </label>
          <textarea
            rows={3}
            value={settings.seo.metaDescription}
            onChange={(e) =>
              setSettings({
                ...settings,
                seo: { ...settings.seo, metaDescription: e.target.value },
              })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
          <p className="text-xs text-gray-400 mt-1">
            Recommended length: 150-160 characters
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Google Analytics ID
          </label>
          <input
            type="text"
            value={settings.seo.googleAnalytics}
            onChange={(e) =>
              setSettings({
                ...settings,
                seo: { ...settings.seo, googleAnalytics: e.target.value },
              })
            }
            placeholder="UA-XXXXX-X or G-XXXXXX"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

function NotificationSettings({ settings, setSettings }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">
        Notification Preferences
      </h2>
      <div className="space-y-4">
        <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
          <div>
            <p className="font-medium text-gray-900">Email Alerts</p>
            <p className="text-sm text-gray-500">
              Receive email notifications for important updates
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.emailAlerts}
            onChange={(e) =>
              setSettings({
                ...settings,
                notifications: {
                  ...settings.notifications,
                  emailAlerts: e.target.checked,
                },
              })
            }
            className="w-5 h-5 rounded border-gray-300"
          />
        </label>
        <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
          <div>
            <p className="font-medium text-gray-900">
              Contact Form Submissions
            </p>
            <p className="text-sm text-gray-500">
              Get notified when someone submits a contact form
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.contactNotifications}
            onChange={(e) =>
              setSettings({
                ...settings,
                notifications: {
                  ...settings.notifications,
                  contactNotifications: e.target.checked,
                },
              })
            }
            className="w-5 h-5 rounded border-gray-300"
          />
        </label>
        <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
          <div>
            <p className="font-medium text-gray-900">Weekly Reports</p>
            <p className="text-sm text-gray-500">
              Receive weekly analytics and performance reports
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.weeklyReports}
            onChange={(e) =>
              setSettings({
                ...settings,
                notifications: {
                  ...settings.notifications,
                  weeklyReports: e.target.checked,
                },
              })
            }
            className="w-5 h-5 rounded border-gray-300"
          />
        </label>
      </div>
    </div>
  );
}

function AppearanceSettings({ settings, setSettings }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Appearance Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Primary Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={settings.appearance.primaryColor}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  appearance: {
                    ...settings.appearance,
                    primaryColor: e.target.value,
                  },
                })
              }
              className="w-12 h-12 rounded border border-gray-200 cursor-pointer"
            />
            <input
              type="text"
              value={settings.appearance.primaryColor}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  appearance: {
                    ...settings.appearance,
                    primaryColor: e.target.value,
                  },
                })
              }
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Secondary Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={settings.appearance.secondaryColor}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  appearance: {
                    ...settings.appearance,
                    secondaryColor: e.target.value,
                  },
                })
              }
              className="w-12 h-12 rounded border border-gray-200 cursor-pointer"
            />
            <input
              type="text"
              value={settings.appearance.secondaryColor}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  appearance: {
                    ...settings.appearance,
                    secondaryColor: e.target.value,
                  },
                })
              }
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Logo URL
          </label>
          <input
            type="text"
            value={settings.appearance.logo}
            onChange={(e) =>
              setSettings({
                ...settings,
                appearance: { ...settings.appearance, logo: e.target.value },
              })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Favicon URL
          </label>
          <input
            type="text"
            value={settings.appearance.favicon}
            onChange={(e) =>
              setSettings({
                ...settings,
                appearance: { ...settings.appearance, favicon: e.target.value },
              })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    if (newPassword.length < 8) {
      setMessage("Password must be at least 8 characters");
      return;
    }
    setMessage("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>

      {message && (
        <div
          className={`p-3 rounded-lg flex items-center gap-2 ${
            message.includes("success")
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message.includes("success") ? (
            <CheckCircle size={16} />
          ) : (
            <AlertCircle size={16} />
          )}
          {message}
        </div>
      )}

      <form onSubmit={handlePasswordChange} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          Update Password
        </button>
      </form>

      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Two-Factor Authentication
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          Add an extra layer of security to your account by enabling two-factor
          authentication.
        </p>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          Enable 2FA
        </button>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
        <div className="p-4 bg-red-50 rounded-lg">
          <p className="text-sm text-red-700 mb-3">
            Once you delete your account, there is no going back. This action is
            permanent.
          </p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

// Missing imports for CheckCircle and AlertCircle
import { CheckCircle, AlertCircle } from "lucide-react";
