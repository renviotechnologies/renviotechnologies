// components/admin/ContactsManager.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
  Eye,
  Trash2,
  Reply,
  Search,
  Filter,
  Download,
} from "lucide-react";
import Link from "next/link";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "replied" | "archived";
  createdAt: string;
  source?: string;
}

const sampleContacts: Contact[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    subject: "Project Collaboration",
    message: "I would like to discuss a potential collaboration...",
    status: "unread",
    createdAt: "2024-01-20T10:30:00",
    source: "Contact Form",
  },
];

export default function ContactsManager() {
  const [contacts, setContacts] = useState<Contact[]>(sampleContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "unread" | "read" | "replied" | "archived"
  >("all");
  const [replyModal, setReplyModal] = useState<Contact | null>(null);

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || contact.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleStatusUpdate = (id: number, status: Contact["status"]) => {
    setContacts(contacts.map((c) => (c.id === id ? { ...c, status } : c)));
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this contact message?")) {
      setContacts(contacts.filter((c) => c.id !== id));
      if (selectedContact?.id === id) setSelectedContact(null);
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Subject",
      "Message",
      "Status",
      "Date",
    ];
    const csvData = contacts.map((c) => [
      c.name,
      c.email,
      c.phone,
      c.subject,
      c.message,
      c.status,
      c.createdAt,
    ]);
    const csvContent = [headers, ...csvData]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts_export.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const unreadCount = contacts.filter((c) => c.status === "unread").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Contact Form Submissions
          </h1>
          <p className="text-gray-500 mt-1">
            Manage and respond to contact inquiries
          </p>
        </div>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Download size={18} />
          Export CSV
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">
            {contacts.length}
          </div>
          <div className="text-sm text-gray-500">Total Submissions</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-red-600">{unreadCount}</div>
          <div className="text-sm text-gray-500">Unread</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {contacts.filter((c) => c.status === "replied").length}
          </div>
          <div className="text-sm text-gray-500">Replied</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">98%</div>
          <div className="text-sm text-gray-500">Response Rate</div>
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
            placeholder="Search contacts..."
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
          <option value="unread">Unread</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div className="flex gap-6">
        {/* Contacts List */}
        <div className="flex-1 space-y-4">
          {filteredContacts.map((contact) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => {
                setSelectedContact(contact);
                if (contact.status === "unread") {
                  handleStatusUpdate(contact.id, "read");
                }
              }}
              className={`bg-white rounded-xl p-4 shadow-sm border cursor-pointer transition-all hover:shadow-md ${
                selectedContact?.id === contact.id
                  ? "border-gray-400 shadow-md"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {contact.name}
                    </h3>
                    {contact.status === "unread" && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                        New
                      </span>
                    )}
                    {contact.status === "replied" && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                        Replied
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {contact.subject}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Mail size={12} />
                      {contact.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={12} />
                      {contact.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setReplyModal(contact);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Reply size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(contact.id);
                    }}
                    className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Details Panel */}
        {selectedContact && (
          <div className="w-96 bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit sticky top-4">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Message Details</h3>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase font-semibold">
                  From
                </label>
                <p className="font-medium text-gray-900">
                  {selectedContact.name}
                </p>
                <p className="text-sm text-gray-500">{selectedContact.email}</p>
                <p className="text-sm text-gray-500">{selectedContact.phone}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase font-semibold">
                  Subject
                </label>
                <p className="font-medium text-gray-900">
                  {selectedContact.subject}
                </p>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase font-semibold">
                  Message
                </label>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  {selectedContact.message}
                </p>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase font-semibold">
                  Received
                </label>
                <p className="text-sm text-gray-600">
                  {new Date(selectedContact.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2 pt-4">
                <button
                  onClick={() => setReplyModal(selectedContact)}
                  className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                >
                  Reply
                </button>
                <button
                  onClick={() =>
                    handleStatusUpdate(selectedContact.id, "archived")
                  }
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Archive
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reply Modal */}
      {replyModal && (
        <ReplyModal
          contact={replyModal}
          onClose={() => setReplyModal(null)}
          onSend={(message: string) => {
            handleStatusUpdate(replyModal.id, "replied");
            setReplyModal(null);
            alert(`Reply sent to ${replyModal.email}\n\nMessage: ${message}`);
          }}
        />
      )}
    </div>
  );
}

function ReplyModal({ contact, onClose, onSend }: any) {
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Reply to {contact.name}
        </h2>
        <p className="text-sm text-gray-500 mb-4">To: {contact.email}</p>
        <textarea
          placeholder="Type your reply..."
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
        />
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => onSend(message)}
            disabled={!message.trim()}
            className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50"
          >
            Send Reply
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
