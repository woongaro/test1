import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Scale, Briefcase, User, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Use Cases - Legal AI",
  description: "Discover how Legal AI helps different types of legal practices",
};

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4">Use Cases</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Trusted by Legal Professionals
            <span className="text-blue-600 block mt-2">Worldwide</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            From solo practitioners to large law firms, Legal AI adapts to your needs
            and helps you deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Corporate Law Firms */}
          <Card className="hover:shadow-xl transition">
            <CardHeader>
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">Corporate Law Firms</CardTitle>
              <CardDescription className="text-base">
                Streamline M&A due diligence, contract review, and compliance management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400">
                Large corporate law firms use Legal AI to handle complex transactions
                and manage high volumes of documents efficiently.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Reduce document review time by 70%
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Identify critical issues faster with AI-powered analysis
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Automate compliance checks across jurisdictions
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Manage large-scale M&A due diligence efficiently
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Litigation Practices */}
          <Card className="hover:shadow-xl transition">
            <CardHeader>
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">Litigation Practices</CardTitle>
              <CardDescription className="text-base">
                Enhance case research, e-discovery, and outcome prediction capabilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400">
                Litigation teams leverage Legal AI to find relevant precedents faster
                and make data-driven strategic decisions.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Find relevant precedents in seconds, not hours
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Predict case outcomes with AI-powered analytics
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Streamline e-discovery and document review
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Get insights on judges and opposing counsel
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* In-House Legal Teams */}
          <Card className="hover:shadow-xl transition">
            <CardHeader>
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">In-House Legal Teams</CardTitle>
              <CardDescription className="text-base">
                Manage contracts, track compliance, and reduce external legal costs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400">
                In-house counsel use Legal AI to handle more work internally and
                focus on strategic initiatives that drive business value.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Automate routine contract reviews and approvals
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Track compliance across multiple regulations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Reduce dependence on external counsel by 50%
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Centralize knowledge and improve team efficiency
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solo Practitioners */}
          <Card className="hover:shadow-xl transition">
            <CardHeader>
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">Solo Practitioners</CardTitle>
              <CardDescription className="text-base">
                Access enterprise-grade tools at an affordable price point
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400">
                Solo practitioners and small firms compete with larger firms by
                leveraging AI to deliver exceptional service to their clients.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Access powerful AI tools at affordable pricing
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Handle more cases without hiring additional staff
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Provide big-firm quality service to clients
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Focus on client relationships, not admin work
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Success by the Numbers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Real results from real legal professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
              <p className="text-slate-600 dark:text-slate-400">Average time saved on document review</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <p className="text-slate-600 dark:text-slate-400">Reduction in external legal costs</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-slate-600 dark:text-slate-400">User satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of legal professionals who are already seeing results with Legal AI.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
