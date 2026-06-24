// // lib/db/models.ts
// import { ObjectId } from 'mongodb';

// export interface Project {
//     _id?: ObjectId;
//     title: string;
//     category: string;
//     description: string;
//     imageUrl: string;
//     link?: string;
//     status: 'active' | 'completed';
//     date: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

// export interface Blog {
//     _id?: ObjectId;
//     title: string;
//     slug: string;
//     category: string;
//     excerpt: string;
//     content: string;
//     imageUrl: string;
//     author: string;
//     date: string;
//     readTime: string;
//     status: 'draft' | 'published';
//     views: number;
//     createdAt: Date;
//     updatedAt: Date;
// }

// export interface Reel {
//     _id?: ObjectId;
//     title: string;
//     brand: string;
//     thumbnail: string;
//     videoUrl?: string;
//     instagramUrl?: string;
//     youtubeUrl?: string;
//     views: string;
//     likes: string;
//     duration: string;
//     description: string;
//     platform: 'instagram' | 'youtube';
//     engagement: string;
//     status: 'published' | 'draft';
//     date: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

// export interface Contact {
//     _id?: ObjectId;
//     name: string;
//     email: string;
//     phone: string;
//     subject: string;
//     message: string;
//     status: 'unread' | 'read' | 'replied' | 'archived';
//     createdAt: Date;
// }

// export interface Service {
//     _id?: ObjectId;
//     title: string;
//     description: string;
//     price: number;
//     originalPrice?: number;
//     features: string[];
//     icon: string;
//     isPopular: boolean;
//     status: 'active' | 'inactive';
//     order: number;
//     createdAt: Date;
//     updatedAt: Date;
// }

// export interface Payment {
//     _id?: ObjectId;
//     client: string;
//     amount: number;
//     status: 'pending' | 'completed' | 'failed' | 'refunded';
//     method: 'credit_card' | 'paypal' | 'bank_transfer' | 'crypto';
//     date: string;
//     project: string;
//     transactionId: string;
//     createdAt: Date;
// }

// export interface Invoice {
//     _id?: ObjectId;
//     invoiceNumber: string;
//     client: string;
//     clientEmail: string;
//     amount: number;
//     dueDate: string;
//     status: 'paid' | 'pending' | 'overdue';
//     project: string;
//     items: Array<{
//         description: string;
//         quantity: number;
//         price: number;
//     }>;
//     createdAt: Date;
//     updatedAt: Date;
// }

// export interface User {
//     _id?: ObjectId;
//     email: string;
//     password: string;
//     name: string;
//     role: 'admin' | 'editor' | 'viewer';
//     createdAt: Date;
//     lastLogin?: Date;
// }

// export interface SiteSettings {
//     _id?: ObjectId;
//     siteName: string;
//     siteDescription: string;
//     siteEmail: string;
//     sitePhone: string;
//     address: string;
//     socialLinks: {
//         instagram: string;
//         twitter: string;
//         linkedin: string;
//         youtube: string;
//         facebook?: string;
//     };
//     seo: {
//         metaTitle: string;
//         metaDescription: string;
//         googleAnalytics: string;
//     };
//     notifications: {
//         emailAlerts: boolean;
//         contactNotifications: boolean;
//         weeklyReports: boolean;
//     };
//     appearance: {
//         primaryColor: string;
//         secondaryColor: string;
//         logo: string;
//         favicon: string;
//     };
//     updatedAt: Date;
// }