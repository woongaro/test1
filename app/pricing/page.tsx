import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing - Legal AI",
  description: "Choose the perfect plan for your legal practice",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4">Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Choose the Perfect Plan
            <span className="text-blue-600 block mt-2">For Your Practice</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Transparent pricing with no hidden fees. All plans include 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription>Perfect for solo practitioners</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">$99</span>
                <span className="text-slate-600 dark:text-slate-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="outline">
                Start Free Trial
              </Button>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Up to 100 documents/month
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Basic document analysis
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Legal research AI
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Email support
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    1 user
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="h-5 w-5 text-slate-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-400 line-through">
                    Advanced analytics
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="h-5 w-5 text-slate-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-400 line-through">
                    API access
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="hover:shadow-xl transition border-2 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-blue-600 text-white">
                <Sparkles className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>For growing law firms</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">$299</span>
                <span className="text-slate-600 dark:text-slate-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                Start Free Trial
              </Button>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Up to 1,000 documents/month
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Advanced document analysis
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Legal research AI with citations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Priority email & chat support
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Up to 5 users
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Predictive analytics
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Team collaboration tools
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Unlimited documents
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Custom AI model training
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Dedicated account manager
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    24/7 phone support
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Unlimited users
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Full API access
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Custom integrations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    On-premise deployment option
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Can I change plans later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected
                  in your next billing cycle.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Is there a commitment period?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  No, all our plans are month-to-month. You can cancel at any time with no penalties.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  We accept all major credit cards (Visa, MasterCard, American Express) and ACH transfers
                  for Enterprise customers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer discounts for annual billing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! Save 20% when you choose annual billing instead of monthly billing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            No credit card required. Get full access to all features for 14 days.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
