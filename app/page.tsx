import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scale, FileSearch, Brain, Shield, Zap, Users, BookOpen, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-950/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900 dark:text-white">Legal AI</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Features</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">About</a>
              <a href="#use-cases" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Use Cases</a>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge className="mb-4" variant="secondary">
            <Zap className="h-3 w-3 mr-1" />
            Powered by Advanced AI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            The Future of Legal Practice is
            <span className="text-blue-600 block mt-2">AI-Powered Infrastructure</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
            2026 marks the transition from AI assistants to autonomous AI agents executing multi-step legal tasks.
            Join 52% of corporate legal teams already leveraging AI to reduce costs and accelerate workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">$1.89B</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">2026 Market Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">52%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Corporate Legal Adoption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Faster Contract Review</div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            2026: AI Becomes Legal Infrastructure
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Leveraging machine learning, NLP, and agentic AI to transform legal operations from automation to autonomous execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <FileSearch className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>AI Contract Review</CardTitle>
              <CardDescription>
                Extract 1,400+ clauses across 40 legal areas with 95% accuracy using advanced NLP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• 8x faster contract reviews</li>
                <li>• 50% reduction in review time</li>
                <li>• 240 hours saved per lawyer/year</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <Brain className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Agentic AI Workflows</CardTitle>
              <CardDescription>
                Autonomous AI agents execute multi-step legal tasks - 40% of enterprise apps by 2026
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Deep research capabilities</li>
                <li>• Autonomous document review</li>
                <li>• Multi-agent collaboration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <Shield className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>AI Compliance & Risk</CardTitle>
              <CardDescription>
                Colorado AI Act & Illinois AI Employment Law compliant - June 2026 ready
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Risk management policies</li>
                <li>• Impact assessments</li>
                <li>• 80% orgs with AI ethics policies</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Zero-Touch Contracting</CardTitle>
              <CardDescription>
                2026: Automated low-risk agreements with surgical redlining at 95% accuracy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• AI-generated playbooks</li>
                <li>• Automated negotiation</li>
                <li>• 40% faster contract cycles</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Predictive Legal Analytics</CardTitle>
              <CardDescription>
                Machine learning algorithms forecast case outcomes using historical legal data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Case outcome probability</li>
                <li>• Settlement value predictions</li>
                <li>• Historical pattern analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <Users className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>In-House AI Transformation</CardTitle>
              <CardDescription>
                64% of in-house teams expect to depend less on outside counsel using AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• 52% corporate adoption rate</li>
                <li>• Internal capability building</li>
                <li>• Cost reduction strategies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">2026 Legal AI Landscape</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              From Interesting Tool to Operational Infrastructure
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              2026 marks the pivotal year when AI transitions from pilot projects to mission-critical
              legal infrastructure. The shift from AI assistants to autonomous agentic AI represents
              the most significant technical evolution in legal technology, with Gartner predicting
              40% of enterprise applications will feature task-specific AI agents by year-end, up from less than 5% today.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Machine learning and deep learning now power 63% of legal AI solutions, enabling
              sophisticated algorithms to analyze vast legal datasets and automate complex processes.
              The rise of "full-stack AI" law firms—built from the ground up with AI at their core—signals
              a fundamental restructuring of legal service delivery.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">$8.09B</h3>
                <p className="text-slate-600 dark:text-slate-400">Market Size by 2035</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">17.3%</h3>
                <p className="text-slate-600 dark:text-slate-400">Annual Growth Rate (CAGR)</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">49%</h3>
                <p className="text-slate-600 dark:text-slate-400">North America Market Share</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">Use Cases</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by Legal Professionals Worldwide
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From solo practitioners to large law firms, Legal AI adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>AI-Native Law Firms</CardTitle>
              <CardDescription>
                Full-stack AI firms built from ground up like Crosby and Garfield AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Garfield AI: First fully AI-powered law firm authorized by UK's SRA. Crosby: Agentic AI-powered
                firm combining custom software with in-house lawyers achieving 100x productivity on specific tasks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Corporate Legal Departments</CardTitle>
              <CardDescription>
                52% adoption rate - doubling year-over-year with rapid internal capability building
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                64% of in-house teams expect to depend less on outside counsel. AI adoption in corporate
                legal jumped from 23% to 52% in one year, outpacing law firm adoption significantly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contract Lifecycle Management</CardTitle>
              <CardDescription>
                Reduce contract cycle times by 40%, review times by 50%, 8x faster reviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Tools like Kira extract 1,400+ clauses across 40 legal areas. Teams reclaim 240 hours per
                lawyer annually. Thomson Reuters CoCounsel and LexisNexis Protégé deploy specialized agent workflows.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance & Regulatory</CardTitle>
              <CardDescription>
                June 2026: Colorado AI Act compliance with risk assessments and transparency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                80% of organizations formalizing AI policies by 2026. Illinois AI Employment Law (Jan 2026)
                mandates disclosure. High-risk AI systems require impact assessments and ethical frameworks.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sources & Research Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Research & Data Sources</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Based on Industry-Leading Research
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              All statistics and insights are sourced from reputable legal technology research firms and industry analysts
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Key Research Sources:</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>• <a href="https://www.grandviewresearch.com/industry-analysis/legal-ai-market-report" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Grand View Research - Legal AI Market Report</a></li>
              <li>• <a href="https://natlawreview.com/article/85-predictions-ai-and-law-2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Law Review - 85 Predictions for AI and Law in 2026</a></li>
              <li>• <a href="https://pro.bloomberglaw.com/insights/technology/bloomberg-law-2026-key-legal-ai-trends/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bloomberg Law - 2026 Key Legal AI Trends</a></li>
              <li>• <a href="https://www.litera.com/blog/ai-legal-tech-5-predictions-2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Litera - AI in Legal Tech: 5 Predictions for 2026</a></li>
              <li>• <a href="https://www.sirion.ai/library/contract-ai/ai-legal-documents/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sirion - AI for Legal Documents Analysis Guide</a></li>
              <li>• <a href="https://www.marketsandmarkets.com/Market-Reports/legal-ai-software-market-88725278.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MarketsandMarkets - Legal AI Software Market Analysis</a></li>
              <li>• Gartner Research - Enterprise AI Agent Predictions</li>
              <li>• Harvard Law School Center on Legal Profession - AI Impact Studies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of legal professionals who are already using Legal AI to work smarter and faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free 14-Day Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            No credit card required • Full access to all features
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold text-white">Legal AI</span>
              </div>
              <p className="text-sm">
                Empowering legal professionals with advanced AI technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-8" />
          <div className="text-center text-sm">
            <p>&copy; 2026 Legal AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
