"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Book, Sparkles, Folder, Library } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { books } from "@/lib/data";
import { Book as BookType } from "@/lib/types";

function BookCard({ book }: { book: BookType }) {
  return (
    <Link href={`/books/${book.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-secondary border-secondary">
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

  return (
    <>
      <section className="relative text-center py-20 sm:py-32 md:py-40 flex flex-col items-center justify-center">
        <div className="container z-10">
          <Badge variant="secondary" className="bg-white/10 text-white backdrop-blur-sm border-white/20">
            <Sparkles className="mr-2 h-3 w-3 text-accent" />
            Your Digital Knowledge Hub
          </Badge>
          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mt-6 text-white">
            Discover Your Next <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Great Read
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Access thousands of academic books, research papers, and study materials.
            Your complete digital library at your fingertips.
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search books, authors, subjects..."
                className="w-full h-14 pl-12 pr-32 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-full bg-primary hover:bg-primary/90 px-6">
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center items-center gap-8 text-white">
              <div className="flex items-center gap-2">
                  <Library className="h-5 w-5" />
                  <span className="font-medium">10,000+ Books</span>
              </div>
              <div className="flex items-center gap-2">
                  <Folder className="h-5 w-5" />
                  <span className="font-medium">50+ Categories</span>
              </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.07] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </section>
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="font-headline text-3xl font-bold mb-6 text-white">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.slice(0, 10).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
