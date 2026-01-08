"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Have questions or feedback? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="mt-12">
        <form className="grid grid-cols-1 gap-y-6">
          <div>
            <Label htmlFor="name" className="sr-only">
              Full name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Full name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
            />
          </div>
          <div>
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message"
            />
          </div>
          <div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Send Message
            </Button>
          </div>
        </form>
      </div>

       <div className="mt-16 text-center text-sm text-muted-foreground p-8 border-t">
        <h2 className="font-headline text-lg font-semibold text-foreground mb-4">Library Usage Policy</h2>
        <div className="space-y-4 text-left max-w-prose mx-auto">
          <div>
            <h3 className="font-bold text-foreground">Copyright Rules</h3>
            <p>All materials in this e-library are for personal and educational use only. Unauthorized distribution or reproduction is strictly prohibited.</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground">User Responsibilities</h3>
            <p>Users are responsible for safeguarding their account information. Please do not share your login credentials.</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground">Download Limits</h3>
            <p>To ensure fair access for all users, there is a limit of 10 downloads per user per week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
