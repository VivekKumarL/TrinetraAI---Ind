"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactCards() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <Card className="max-w-sm mx-auto w-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <Mail size={20} />
            </span>
            <h3 className="text-lg font-semibold">Email Us</h3>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Have a question? Send us an email and we'll get back to you within 24 hours.
            </p>
          </CardContent>

          <CardFooter>
            <Button variant="secondary" className="w-full">
              Send Email
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="max-w-sm mx-auto w-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <span className="bg-green-100 text-green-600 p-2 rounded-full">
              <Phone size={20} />
            </span>
            <h3 className="text-lg font-semibold">Call Us</h3>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Prefer to talk? Give us a call and our team will assist you right away.
            </p>
          </CardContent>

          <CardFooter>
            <Button variant="secondary" className="w-full">
              Call Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
