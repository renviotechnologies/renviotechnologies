// components/admin/PaymentsManager.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  CreditCard,
  TrendingUp,
  Download,
  Search,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

interface Payment {
  id: number;
  client: string;
  amount: number;
  status: "pending" | "completed" | "failed" | "refunded";
  method: "credit_card" | "paypal" | "bank_transfer" | "crypto";
  date: string;
  project: string;
  transactionId: string;
}

interface Invoice {
  id: number;
  client: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  project: string;
}

const samplePayments: Payment[] = [
  {
    id: 1,
    client: "Delhi059",
    amount: 12500,
    status: "completed",
    method: "credit_card",
    date: "2024-01-15",
    project: "Social Media Campaign",
    transactionId: "txn_123456",
  },
];

const sampleInvoices: Invoice[] = [
  {
    id: 1,
    client: "Local Ride",
    amount: 8500,
    dueDate: "2024-02-01",
    status: "pending",
    project: "App Development",
  },
];

export default function PaymentsManager() {
  const [payments, setPayments] = useState<Payment[]>(samplePayments);
  const [invoices, setInvoices] = useState<Invoice[]>(sampleInvoices);
  const [activeTab, setActiveTab] = useState<"payments" | "invoices">(
    "payments",
  );

  // Calculate totals
  const totalRevenue = payments.reduce(
    (sum, p) => sum + (p.status === "completed" ? p.amount : 0),
    0,
  );
  const pendingAmount = invoices.reduce(
    (sum, i) => sum + (i.status === "pending" ? i.amount : 0),
    0,
  );
  const monthlyGrowth = 23.5;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Payments & Invoicing
          </h1>
          <p className="text-gray-500 mt-1">
            Track payments, manage invoices, and monitor revenue
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
          <DollarSign size={18} />
          Create Invoice
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">
            ${totalRevenue.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Total Revenue</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">
            ${pendingAmount.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Pending Amount</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            +{monthlyGrowth}%
          </div>
          <div className="text-sm text-gray-500">Monthly Growth</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">
            {payments.length}
          </div>
          <div className="text-sm text-gray-500">Total Transactions</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("payments")}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === "payments"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Payments History
        </button>
        <button
          onClick={() => setActiveTab("invoices")}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === "invoices"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Invoices
        </button>
      </div>

      {activeTab === "payments" ? (
        <PaymentsTable payments={payments} />
      ) : (
        <InvoicesTable invoices={invoices} setInvoices={setInvoices} />
      )}
    </div>
  );
}

function PaymentsTable({ payments }: { payments: Payment[] }) {
  const getStatusColor = (status: Payment["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
        return "bg-red-100 text-red-700";
      case "refunded":
        return "bg-gray-100 text-gray-700";
    }
  };

  const getMethodIcon = (method: Payment["method"]) => {
    switch (method) {
      case "credit_card":
        return "💳";
      case "paypal":
        return "💰";
      case "bank_transfer":
        return "🏦";
      case "crypto":
        return "₿";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-4 font-semibold text-gray-600">
              Transaction ID
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Client
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Project
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Amount
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Method
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Status
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="p-4 font-mono text-sm">{payment.transactionId}</td>
              <td className="p-4 font-medium text-gray-900">
                {payment.client}
              </td>
              <td className="p-4 text-gray-600">{payment.project}</td>
              <td className="p-4 font-semibold text-gray-900">
                ${payment.amount.toLocaleString()}
              </td>
              <td className="p-4">
                <span className="text-lg">{getMethodIcon(payment.method)}</span>
              </td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${getStatusColor(payment.status)}`}
                >
                  {payment.status}
                </span>
              </td>
              <td className="p-4 text-gray-500">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InvoicesTable({
  invoices,
  setInvoices,
}: {
  invoices: Invoice[];
  setInvoices: (invoices: Invoice[]) => void;
}) {
  const getStatusColor = (status: Invoice["status"]) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "overdue":
        return "bg-red-100 text-red-700";
    }
  };

  const markAsPaid = (id: number) => {
    setInvoices(
      invoices.map((i) => (i.id === id ? { ...i, status: "paid" } : i)),
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-4 font-semibold text-gray-600">
              Invoice #
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Client
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Project
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Amount
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Due Date
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
          {invoices.map((invoice) => (
            <tr
              key={invoice.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="p-4 font-mono text-sm">
                INV-{invoice.id.toString().padStart(4, "0")}
              </td>
              <td className="p-4 font-medium text-gray-900">
                {invoice.client}
              </td>
              <td className="p-4 text-gray-600">{invoice.project}</td>
              <td className="p-4 font-semibold text-gray-900">
                ${invoice.amount.toLocaleString()}
              </td>
              <td className="p-4 text-gray-500">{invoice.dueDate}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${getStatusColor(invoice.status)}`}
                >
                  {invoice.status}
                </span>
              </td>
              <td className="p-4">
                {invoice.status === "pending" && (
                  <button
                    onClick={() => markAsPaid(invoice.id)}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700"
                  >
                    Mark Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
