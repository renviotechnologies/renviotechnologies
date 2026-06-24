// components/admin/Analytics.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MousePointer,
  DollarSign,
  Calendar,
  Download,
} from "lucide-react";

interface Metric {
  label: string;
  value: string;
  change: number;
  icon: any;
  color: string;
}

const metrics: Metric[] = [
  {
    label: "Total Visitors",
    value: "45.2K",
    change: 12.5,
    icon: Users,
    color: "text-blue-600",
  },
  {
    label: "Page Views",
    value: "128.3K",
    change: 8.3,
    icon: Eye,
    color: "text-green-600",
  },
  {
    label: "Conversion Rate",
    value: "3.2%",
    change: -1.2,
    icon: MousePointer,
    color: "text-purple-600",
  },
  {
    label: "Revenue",
    value: "$84.5K",
    change: 23.5,
    icon: DollarSign,
    color: "text-emerald-600",
  },
];

const weeklyData = [65, 78, 82, 91, 88, 95, 102];
const monthlyData = [
  2450, 2680, 2820, 2950, 3120, 3350, 3580, 3720, 3890, 4050, 4280, 4520,
];

export default function Analytics() {
  const [timeframe, setTimeframe] = useState<"week" | "month" | "year">(
    "month",
  );
  const data = timeframe === "week" ? weeklyData : monthlyData;

  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Track your website performance and growth metrics
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Download size={18} />
          Export Report
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 bg-gray-100 rounded-lg ${metric.color}`}>
                <metric.icon size={20} />
              </div>
              <div
                className={`flex items-center gap-1 text-sm ${metric.change >= 0 ? "text-green-600" : "text-red-600"}`}
              >
                {metric.change >= 0 ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {Math.abs(metric.change)}%
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metric.value}
            </div>
            <div className="text-sm text-gray-500">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Traffic Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              Traffic Overview
            </h2>
            <div className="flex gap-2">
              {(["week", "month", "year"] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                    timeframe === tf
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tf.charAt(0).toUpperCase() + tf.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 flex items-end gap-2">
            {data.map((value, idx) => {
              const height = (value / maxValue) * 100;
              return (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: idx * 0.02 }}
                    className="w-full bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-gray-400">
                    {timeframe === "week"
                      ? ["M", "T", "W", "T", "F", "S", "S"][idx]
                      : `M${idx + 1}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Traffic Sources
          </h2>
          <div className="space-y-4">
            {[
              {
                source: "Organic Search",
                percentage: 45,
                color: "from-blue-500 to-blue-600",
              },
              {
                source: "Social Media",
                percentage: 28,
                color: "from-purple-500 to-purple-600",
              },
              {
                source: "Direct",
                percentage: 15,
                color: "from-green-500 to-green-600",
              },
              {
                source: "Referral",
                percentage: 8,
                color: "from-orange-500 to-orange-600",
              },
              {
                source: "Email",
                percentage: 4,
                color: "from-pink-500 to-pink-600",
              },
            ].map((source, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{source.source}</span>
                  <span className="font-medium text-gray-900">
                    {source.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${source.percentage}%` }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`h-full bg-gradient-to-r ${source.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            {
              action: "New blog post published",
              time: "2 hours ago",
              user: "Admin",
            },
            {
              action: 'Project "Delhi059" updated',
              time: "5 hours ago",
              user: "Editor",
            },
            {
              action: "New contact form submission",
              time: "1 day ago",
              user: "System",
            },
            {
              action: "Payment received from Local Ride",
              time: "2 days ago",
              user: "Finance",
            },
            {
              action: "Service pricing updated",
              time: "3 days ago",
              user: "Admin",
            },
          ].map((activity, idx) => (
            <div
              key={idx}
              className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.user}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar size={14} />
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
