import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
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

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose the plan that fits your practice. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Starter Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for solo practitioners</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">$99</span>
                <span className="text-slate-600 dark:text-slate-400">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Link href="/register">
                <Button className="w-full mb-6">Start Free Trial</Button>
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">1 user account</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">100 document analyses/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Basic legal research AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">10GB storage</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="relative border-blue-600 border-2 shadow-lg">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
            <CardHeader>
              <CardTitle>Professional</CardTitle>
              <CardDescription>Ideal for small to medium firms</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">$299</span>
                <span className="text-slate-600 dark:text-slate-400">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Link href="/register">
                <Button className="w-full mb-6">Start Free Trial</Button>
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">5 user accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Unlimited document analyses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Advanced legal research AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Priority email & chat support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">100GB storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Team collaboration tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Predictive analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large firms and organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <Link href="/demo">
                <Button className="w-full mb-6" variant="outline">Contact Sales</Button>
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Unlimited users</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Unlimited everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Custom AI training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">24/7 phone support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Unlimited storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Advanced integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Custom SLA</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I change plans later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately,
                  and we'll prorate the charges accordingly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  We accept all major credit cards (Visa, MasterCard, American Express) and can arrange
                  for bank transfers for Enterprise plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is my data secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Absolutely. We use bank-level encryption and comply with all major data protection
                  regulations including GDPR and CCPA. Your data is never shared with third parties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens after the trial ends?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  After your 14-day trial, you'll be automatically enrolled in your chosen plan unless
                  you cancel. We'll send you reminders before the trial ends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
