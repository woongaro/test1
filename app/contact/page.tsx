import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, ArrowLeft, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-950/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900 dark:text-white">Legal AI</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Mail className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    General inquiries:
                  </p>
                  <a href="mailto:info@legalai.com" className="text-blue-600 hover:underline">
                    info@legalai.com
                  </a>
                  <p className="text-slate-600 dark:text-slate-400 mt-4 mb-2">
                    Support:
                  </p>
                  <a href="mailto:support@legalai.com" className="text-blue-600 hover:underline">
                    support@legalai.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    Sales & Support:
                  </p>
                  <a href="tel:+1-800-LEGAL-AI" className="text-blue-600 hover:underline text-lg">
                    +1 (800) LEGAL-AI
                  </a>
                  <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm">
                    Monday - Friday: 9AM - 6PM EST<br />
                    Weekend: Emergency support only
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Legal AI Headquarters<br />
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Sales Inquiries
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Interested in Legal AI for your firm?
                </p>
                <Link href="/demo">
                  <Button variant="outline" className="w-full">
                    Schedule a Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Technical Support
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Need help with your account?
                </p>
                <a href="mailto:support@legalai.com">
                  <Button variant="outline" className="w-full">
                    Email Support
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Media & Press
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Press inquiries and media kit
                </p>
                <a href="mailto:press@legalai.com">
                  <Button variant="outline" className="w-full">
                    Contact Press Team
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
