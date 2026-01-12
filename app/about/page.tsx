import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Award, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - Legal AI",
  description: "Learn about Legal AI's mission to transform legal practice with artificial intelligence",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4">About Legal AI</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Transforming the Future of
            <span className="text-blue-600 block mt-2">Legal Practice</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            We're on a mission to make advanced AI technology accessible to law firms of all sizes,
            enabling better outcomes for clients while improving efficiency and reducing costs.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Legal AI was born from a simple observation: the legal industry, despite its critical
              importance to society, was falling behind in adopting modern technology. Legal
              professionals spent countless hours on repetitive tasks that could be automated,
              while lacking access to the data-driven insights that could improve their decision-making.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Founded in 2020 by a team of legal professionals and AI experts, we set out to change
              that. We combine cutting-edge natural language processing, machine learning, and
              deep learning technologies to create tools that truly understand legal context and
              provide actionable insights.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Today, Legal AI serves over 500 law firms and 10,000+ legal professionals worldwide,
              helping them save time, reduce costs, and deliver better outcomes for their clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-100 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">2020</h3>
              <p className="text-slate-600 dark:text-slate-400">Founded</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-slate-600 dark:text-slate-400">Law Firms</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10K+</h3>
              <p className="text-slate-600 dark:text-slate-400">Legal Professionals</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-slate-600 dark:text-slate-400">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Precision
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We strive for accuracy and reliability in every feature we build.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Empathy
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We understand the challenges legal professionals face every day.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We constantly push the boundaries of what's possible with AI.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Excellence
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We're committed to delivering the highest quality products.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the revolution in legal technology. Start using Legal AI today.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
