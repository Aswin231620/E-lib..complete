"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { books, categories } from "@/lib/data";
import type { Book, Category } from "@/lib/types";

function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/books/${book.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              fill
              className="object-cover"
              data-ai-hint={book.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="font-headline text-lg mb-1">{book.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{book.author}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        if (!selectedCategory) return true;
        return book.category.id === selectedCategory;
      })
      .filter((book) => {
        const term = searchTerm.toLowerCase();
        return (
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.category.name.toLowerCase().includes(term)
        );
      });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="sticky top-24">
            <h2 className="font-headline text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left p-2 rounded-md transition-colors ${
                    selectedCategory === null
                      ? "bg-primary/20 text-primary-foreground font-semibold"
                      : "hover:bg-primary/10"
                  }`}
                >
                  All
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary/20 text-primary-foreground font-semibold"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="w-full md:w-3/4 lg:w-4/5">
          <div className="mb-8">
            <Input
              type="text"
              placeholder="Search by title, author, or category..."
              className="w-full text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="font-headline text-2xl">No Books Found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
