"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { books } from "@/lib/data";
import { Download, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MyDownloadsPage() {
  // For demonstration, we'll show a subset of books as "downloaded"
  const downloadedBooks = books.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white">My Downloads</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Books you have downloaded for offline reading.
        </p>
      </div>

      {downloadedBooks.length > 0 ? (
        <div className="space-y-6">
          {downloadedBooks.map((book) => (
            <Card key={book.id} className="bg-secondary border-secondary flex flex-col md:flex-row items-center overflow-hidden">
                <div className="relative aspect-[3/4] w-full md:w-32 flex-shrink-0">
                   <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint={book.imageHint}
                  />
                </div>
                <CardHeader className="w-full p-4 md:p-6">
                    <Link href={`/books/${book.id}`}>
                        <CardTitle className="font-headline text-xl mb-1 hover:text-primary transition-colors">{book.title}</CardTitle>
                    </Link>
                    <CardDescription>{book.author}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row gap-3 items-center">
                    <Button asChild className="w-full sm:w-auto">
                        <a href={book.fileUrl} download={`${book.title.replace(/\s/g, '_')}.pdf`}>
                            <BookOpen className="mr-2 h-4 w-4" />
                            Read Offline
                        </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                         <Link href={`/books/${book.id}`}>
                            View Details
                        </Link>
                    </Button>
                </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 rounded-lg border-2 border-dashed border-muted">
          <Download className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-headline text-2xl text-white">No Downloaded Books</h3>
          <p className="text-muted-foreground mt-2">
            Start exploring and download books to read them here.
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Browse Books</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
