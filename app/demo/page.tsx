import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, ArrowLeft, Calendar, Video, Clock } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
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

      {/* Demo Request Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Schedule a Demo
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              See Legal AI in action with a personalized demo from our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Demo Request Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request Your Demo</CardTitle>
                <CardDescription>
                  Fill out the form and we'll be in touch within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john.doe@lawfirm.com"
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your Law Firm"
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="firmSize" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Firm Size
                    </label>
                    <select
                      id="firmSize"
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option>Solo Practitioner</option>
                      <option>2-10 attorneys</option>
                      <option>11-50 attorneys</option>
                      <option>51-200 attorneys</option>
                      <option>200+ attorneys</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      What are you interested in?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your needs and what you'd like to see in the demo..."
                      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Demo Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Video className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Live walkthrough of Legal AI platform features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Personalized demo based on your practice area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Q&A session with our product experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Discussion of pricing and implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Demo Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Our demos typically last 30-45 minutes, with additional time for questions.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    We'll work with your schedule to find the perfect time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our team responds to all demo requests within 24 hours, typically much sooner.
                    You'll receive a calendar invite with all the details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Watch Pre-recorded Demo */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Can't wait? Watch a pre-recorded demo
                </h3>
                <p className="text-blue-100 mb-6">
                  Get an immediate overview of Legal AI's key features
                </p>
                <Button size="lg" variant="secondary">
                  Watch Video Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
