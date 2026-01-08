"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Book,
  Download,
  Star,
  User,
  Calendar,
  FileText,
  ChevronRight,
} from "lucide-react";

function Breadcrumbs({ book }: { book: (typeof books)[0] }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link
              href="/"
              className="ml-1 text-sm font-medium text-muted-foreground hover:text-primary md:ml-2"
            >
              Browse
            </Link>
          </div>
        </li>
         <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link
              href={`/?category=${book.category.id}`}
              className="ml-1 text-sm font-medium text-muted-foreground hover:text-primary md:ml-2"
            >
              {book.category.name}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="ml-1 text-sm font-medium text-foreground md:ml-2">
              {book.title}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
         <div className="mb-6">
            <Breadcrumbs book={book} />
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative aspect-[3/4.2] w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-xl group">
                 {book.isFeatured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400/90 font-semibold pl-2 pr-3 py-1">
                      <Star className="mr-1.5 h-4 w-4 fill-current" />
                      Featured
                    </Badge>
                  </div>
                )}
                <Image
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={book.imageHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Badge variant="outline" className="text-sm font-medium text-primary border-primary/50 mb-3">
              {book.category.name}
            </Badge>
            <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight">
              {book.title}
            </h1>
            <div className="mt-4 flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{book.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{book.publicationYear}</span>
              </div>
              <div className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                <span>{book.pages} pages</span>
              </div>
            </div>

            <div className="mt-8 prose max-w-none text-foreground/80">
              <h2 className="font-headline text-2xl font-semibold mb-2">
                About this book
              </h2>
              <p className="text-lg leading-relaxed">{book.description}</p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
                <div className="bg-secondary p-4 rounded-lg text-center flex-1">
                    <p className="text-2xl font-bold">{book.downloads}</p>
                    <p className="text-sm text-muted-foreground">Downloads</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg text-center flex-1">
                    <p className="text-2xl font-bold">{book.fileSize}</p>
                    <p className="text-sm text-muted-foreground">File Size</p>
                </div>
            </div>
            
             <div className="mt-8 flex flex-col space-y-3">
                <Button size="lg" className="w-full text-lg py-6" asChild>
                  <Link href={book.fileUrl} download>
                    <Download className="mr-3 h-5 w-5" />
                    Download Book
                  </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
