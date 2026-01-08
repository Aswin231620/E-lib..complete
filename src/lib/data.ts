import type { Book, Category, User } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return image ? image.imageUrl : 'https://picsum.photos/seed/default/600/800';
}
const getImageHint = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return image ? image.imageHint : 'book cover';
}

export const categories: Category[] = [
  { id: 'sci-fi', name: 'Science Fiction' },
  { id: 'history', name: 'History' },
  { id: 'cs', name: 'Computer Science' },
  { id: 'fantasy', name: 'Fantasy' },
  { id: 'philosophy', name: 'Philosophy' },
  { id: 'lit', name: 'Literature' },
];

export const books: Book[] = [
  {
    id: '1',
    title: 'Dune',
    author: 'Frank Herbert',
    publicationYear: 1965,
    category: categories[0],
    subject: 'Political Ecology',
    language: 'English',
    academicLevel: 'Undergraduate',
    description: 'A mythic and emotionally charged hero\'s journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in theuniverse to ensure the future of his family and his people.',
    coverImage: getImageUrl('book-cover-1'),
    imageHint: getImageHint('book-cover-1'),
    fileUrl: '/path/to/dune.pdf',
  },
  {
    id: '2',
    title: 'A People\'s History of the United States',
    author: 'Howard Zinn',
    publicationYear: 1980,
    category: categories[1],
    subject: 'American History',
    language: 'English',
    academicLevel: 'Graduate',
    description: 'A comprehensive history of the United States from the perspective of and for the common people, including Native Americans, slaves, and laborers.',
    coverImage: getImageUrl('book-cover-2'),
    imageHint: getImageHint('book-cover-2'),
    fileUrl: '/path/to/peoples_history.pdf',
  },
  {
    id: '3',
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Harold Abelson and Gerald Jay Sussman',
    publicationYear: 1985,
    category: categories[2],
    subject: 'Programming Languages',
    language: 'English',
    academicLevel: 'Graduate',
    description: 'A classic computer science textbook that teaches fundamental principles of programming, including recursion, abstraction, modularity, and programming language design and implementation.',
    coverImage: getImageUrl('book-cover-3'),
    imageHint: getImageHint('book-cover-3'),
    fileUrl: '/path/to/sicp.pdf',
  },
  {
    id: '4',
    title: 'A Wizard of Earthsea',
    author: 'Ursula K. Le Guin',
    publicationYear: 1968,
    category: categories[3],
    subject: 'Coming of Age',
    language: 'English',
    academicLevel: 'High School',
    description: 'The first book in the Earthsea series, it follows a young wizard named Ged as he attends a school of wizardry and grapples with a shadow beast he accidentally unleashes.',
    coverImage: getImageUrl('book-cover-4'),
    imageHint: getImageHint('book-cover-4'),
    fileUrl: '/path/to/earthsea.pdf',
  },
  {
    id: '5',
    title: 'Critique of Pure Reason',
    author: 'Immanuel Kant',
    publicationYear: 1781,
    category: categories[4],
    subject: 'Metaphysics',
    language: 'German',
    academicLevel: 'Postgraduate',
    description: 'One of the most influential works in the history of philosophy. In it, Kant seeks to determine the limits and scope of metaphysics.',
    coverImage: getImageUrl('book-cover-5'),
    imageHint: getImageHint('book-cover-5'),
    fileUrl: '/path/to/critique.pdf',
  },
  {
    id: '6',
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    publicationYear: 1967,
    category: categories[5],
    subject: 'Magical Realism',
    language: 'Spanish',
    academicLevel: 'Undergraduate',
    description: 'The multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founds the town of Macondo, the metaphoric Colombia.',
    coverImage: getImageUrl('book-cover-6'),
    imageHint: getImageHint('book-cover-6'),
    fileUrl: '/path/to/solitude.pdf',
  },
  {
    id: '7',
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell and Peter Norvig',
    publicationYear: 1995,
    category: categories[2],
    subject: 'Artificial Intelligence',
    language: 'English',
    academicLevel: 'Undergraduate',
    description: 'The leading textbook in Artificial Intelligence. It is used in over 1,500 universities in 135 countries. It is considered the standard text in the field.',
    coverImage: getImageUrl('book-cover-7'),
    imageHint: getImageHint('book-cover-7'),
    fileUrl: '/path/to/aima.pdf',
  },
  {
    id: '8',
    title: 'The Power Broker',
    author: 'Robert A. Caro',
    publicationYear: 1974,
    category: categories[1],
    subject: 'Biography',
    language: 'English',
    academicLevel: 'Graduate',
    description: 'A biography of Robert Moses, the "master builder" of mid-20th century New York City, Long Island, Rockland County, and Westchester County, in New York.',
    coverImage: getImageUrl('book-cover-8'),
    imageHint: getImageHint('book-cover-8'),
    fileUrl: '/path/to/power_broker.pdf',
  }
];

export const users: User[] = [
    { id: 'user-1', name: 'Alice Johnson', email: 'alice@example.com', role: 'admin', memberSince: '2023-01-15' },
    { id: 'user-2', name: 'Bob Williams', email: 'bob@example.com', role: 'member', memberSince: '2023-03-22' },
    { id: 'user-3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'member', memberSince: '2023-05-30' },
    { id: 'user-4', name: 'Diana Prince', email: 'diana@example.com', role: 'member', memberSince: '2023-08-11' },
];
