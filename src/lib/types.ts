export interface Category {
  id: string;
  name: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  category: Category;
  subject: string;
  language: string;
  academicLevel: string;
  description: string;
  coverImage: string;
  imageHint: string;
  fileUrl: string; // Dummy URL for download/read
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  memberSince: string;
}
