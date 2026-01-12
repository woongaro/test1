import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, ArrowLeft, Users, Target, Award, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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

      {/* About Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Legal AI
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Transforming the legal industry through artificial intelligence
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Founded in 2020, Legal AI was born from a simple observation: legal professionals spend
              too much time on repetitive tasks that could be automated, leaving less time for the
              strategic thinking and client relationships that truly matter.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Our founding team brought together decades of experience in both law and technology.
              We understood the challenges facing modern legal practices and saw an opportunity to
              leverage cutting-edge AI to create meaningful solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Today, Legal AI serves over 10,000 legal professionals across 500+ law firms worldwide,
              helping them work smarter, faster, and more accurately. Our platform processes millions
              of legal documents annually, saving countless hours and improving outcomes for clients.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  To democratize access to advanced legal technology, empowering law firms of all
                  sizes to deliver exceptional service to their clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  A future where AI handles routine legal work, freeing professionals to focus on
                  strategy, creativity, and human connection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  A diverse group of legal experts, AI researchers, and software engineers united
                  by a passion for innovation and excellence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Accuracy, security, transparency, and unwavering commitment to our customers'
                  success guide everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2020</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Founded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Law Firms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Support</div>
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Join the Legal AI Revolution
              </h3>
              <p className="text-blue-100 mb-6">
                See how we can transform your legal practice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" variant="secondary">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
