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

      {/* Leading Legal AI Platforms Section */}
      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Market-Leading Platforms</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Top Legal AI Platforms Comparison
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              In-depth analysis of leading legal AI tools transforming law firms and corporate legal departments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl">Harvey AI</CardTitle>
                <Badge variant="secondary" className="w-fit">Enterprise-Grade</Badge>
                <CardDescription className="mt-2">
                  Generative AI trained on legal data, case law, and firm-specific knowledge
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Assistant Tool:</strong> Analyzes voluminous contracts, regulatory filings, discovery documents</li>
                    <li>• <strong>Vault Tool:</strong> Parks, analyzes, and reviews vast document sets</li>
                    <li>• <strong>Workflows:</strong> Customizable workflows capturing firm differentiators</li>
                    <li>• <strong>Integration:</strong> Works directly in SharePoint, Microsoft 365 Copilot, Word</li>
                    <li>• <strong>Agentic Capabilities:</strong> Automates multi-step processes like contract review → risk report → compliance check</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Contract Review Capabilities:</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Rapidly reviews and summarizes lengthy contracts, identifies missing provisions, evaluates compliance against standards.
                    Reviews and drafts complex commercial agreements, identifying non-standard provisions and legal risks based on best practices.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-slate-500 italic">Pricing: Enterprise-only (contact for quote)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl">CoCounsel (Thomson Reuters)</CardTitle>
                <Badge variant="secondary" className="w-fit">$400/mo</Badge>
                <CardDescription className="mt-2">
                  GPT-4 powered AI assistant grounded in Westlaw legal content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Speed:</strong> CoCounsel 2.0 works 3x faster than first generation</li>
                    <li>• <strong>Agentic Workflows:</strong> Launched early 2026 with autonomous document review</li>
                    <li>• <strong>Deep Research:</strong> Advanced legal research grounded in Westlaw</li>
                    <li>• <strong>Integration:</strong> Seamlessly integrated with Westlaw platform</li>
                    <li>• <strong>Collaboration:</strong> OpenAI partnership for legal-specific GPT-4</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Performance:</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Generates answers in seconds, not minutes. Expedites legal research processes with AI specifically designed for legal work.
                    Combines generative AI with comprehensive legal database access.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-slate-500">Pricing: $400/month (annual subscription)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl">Lexis+ AI / Protégé</CardTitle>
                <Badge variant="secondary" className="w-fit">From $99/mo</Badge>
                <CardDescription className="mt-2">
                  Legal-specific AI with multiple specialized models and agentic workflows
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Personalization:</strong> Knows workflow preferences, firm standards, specializations</li>
                    <li>• <strong>Multi-Model:</strong> Multiple legal-tuned models for different tasks</li>
                    <li>• <strong>Protégé General AI:</strong> Access to general-purpose AI models alongside legal-specific</li>
                    <li>• <strong>Orchestrator Agent:</strong> AI-guided research with multi-agent collaboration</li>
                    <li>• <strong>ROI Proven:</strong> $1.2M in benefits, 284% ROI for corporate legal departments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Pricing Tiers:</h4>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Legal Search: $99</li>
                    <li>• GenAI Drafting: $250</li>
                    <li>• Document Upload & Review: $12</li>
                    <li>• Document Summarization: $250</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl">Kira Systems (Litera)</CardTitle>
                <Badge variant="secondary" className="w-fit">Contract Intelligence</Badge>
                <CardDescription className="mt-2">
                  Machine learning for contract extraction and analysis - acquired by Litera 2021
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Smart Fields:</strong> 1,000+ built-in fields for common clauses and data points</li>
                    <li>• <strong>Quick Study:</strong> Create custom smart fields for unique needs</li>
                    <li>• <strong>Workflow Management:</strong> Real-time editing and intuitive project management</li>
                    <li>• <strong>Extraction:</strong> Extract 1,400+ clauses across 40 legal areas</li>
                    <li>• <strong>Insights:</strong> Summarize and export data efficiently</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Best For:</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Large-scale document review, due diligence, M&A transactions, contract lifecycle management.
                    Ideal for teams processing hundreds or thousands of contracts simultaneously.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-blue-50 dark:bg-slate-800 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Emerging Competitive Landscape</h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Integrated Platforms:</strong> Thomson Reuters, LexisNexis, and Clio are building comprehensive AI/legal research ecosystems
                combining proprietary content with advanced AI capabilities.
              </p>
              <p>
                <strong>Specialized Providers:</strong> Harvey AI focuses on specialized AI with strategic partnerships,
                targeting enterprise law firms with custom workflows and firm-specific training.
              </p>
              <p>
                <strong>eDiscovery Leaders:</strong> Everlaw and Reveal dominate AI-powered litigation and eDiscovery,
                processing vast case data for disputes and investigations.
              </p>
              <p>
                <strong>Market Pressure:</strong> Specialty vendors face increasing pressure to integrate AI or face acquisition
                as large platforms consolidate the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI and Cost Savings Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">Financial Impact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Proven ROI and Cost Savings
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real-world financial impact from legal AI implementation across law firms and corporate legal departments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl font-bold text-blue-600 mb-2">284%</div>
              <CardTitle>Average ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                LexisNexis study: Lexis+ AI drives $1.2M in benefits and 284% ROI for corporate legal departments
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl font-bold text-blue-600 mb-2">420%</div>
              <CardTitle>Time Savings ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If AI saves 20 hours/week at $150/hour = $156,000/year saved. With $30,000 platform cost = 420% ROI
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl font-bold text-blue-600 mb-2">1-3 mo</div>
              <CardTitle>Time to ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                ROI often appears within 1-3 months for many legal AI applications, not years
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Real-World Cost Savings Examples</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Earthly - Contract Management</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <strong>90% cost savings</strong> on contracts
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Reduced time from draft to completion to just <strong>30 minutes</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
                    <FileSearch className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Bill Review AI</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <strong>Up to 10%</strong> cost savings
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>2-5X</strong> increase in billing guideline compliance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Open (Neo-Banking)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <strong>90% reduction</strong> in contract approval times
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Accelerated business velocity with AI-powered contract workflows
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Contract Lifecycle Management</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <strong>40% faster</strong> contract cycle times
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      AI integration reducing negotiation and execution timelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Adoption and Efficiency Statistics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge className="mt-1">Stat</Badge>
                    <div>
                      <p className="text-slate-900 dark:text-white font-semibold">84% of lawyers</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">State that generative AI tools can increase efficiency in the legal sector</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge className="mt-1">Stat</Badge>
                    <div>
                      <p className="text-slate-900 dark:text-white font-semibold">79% of law firms</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Use AI to boost efficiency, but only 6% pass savings to clients</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge className="mt-1">Stat</Badge>
                    <div>
                      <p className="text-slate-900 dark:text-white font-semibold">82% of firms</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Now investing in AI technology and infrastructure</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge className="mt-1">Growth</Badge>
                    <div>
                      <p className="text-slate-900 dark:text-white font-semibold">$10.82B by 2030</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Legal AI market projected growth from $3.11B in 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge className="mt-1">Gartner</Badge>
                    <div>
                      <p className="text-slate-900 dark:text-white font-semibold">75% of legal departments</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Will boost spending on legal tech by 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge className="mt-1">Premium</Badge>
                    <div>
                      <p className="text-slate-900 dark:text-white font-semibold">34% charge premium rates</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">For AI-enhanced legal work despite efficiency gains</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded">
            <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              ROI Measurement Challenges
            </h4>
            <p className="text-sm text-amber-800 dark:text-amber-300 mb-2">
              <strong>Forrester 2026 Prediction:</strong> Enterprises will defer 25% of planned AI spend into 2027 due to ROI concerns
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              Only 15% of AI decision-makers report EBITDA lift in the past 12 months. Firms maturing away from traditional
              'time saved' metrics toward billable-hour-aligned measurements.
            </p>
          </div>
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

      {/* Technology & Architecture Section */}
      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Technology Stack</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AI Architecture and Machine Learning Models
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Understanding the transformer architectures, NLP models, and deep learning systems powering legal AI in 2026
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core AI Technologies</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Large Language Models (LLMs)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    LLMs are Deep Learning-based NLP models trained on extensive text corpora to process and generate human-like language.
                    Based on Transformer architectures introduced in 2017's "Attention is All You Need" paper.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Self-Attention Mechanisms:</strong> Consider entire input sequence simultaneously</li>
                    <li>• <strong>Legal-Specific Training:</strong> Fine-tuned on case law, statutes, and legal documents</li>
                    <li>• <strong>GPT-4 Partnership:</strong> Harvey AI and CoCounsel leverage OpenAI's legal-tuned GPT-4</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    2026 AI Innovations
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Multimodal Models:</strong> Understand text, images, audio, and video inputs</li>
                    <li>• <strong>Chain-of-Thought Reasoning:</strong> Step-by-step logical analysis for complex legal questions</li>
                    <li>• <strong>Mixture-of-Experts:</strong> Balance cost and performance with specialized sub-models</li>
                    <li>• <strong>RAG (Retrieval-Augmented Generation):</strong> Combines generation with document retrieval</li>
                    <li>• <strong>Long Context Windows:</strong> Process entire case files and lengthy contracts</li>
                    <li>• <strong>Edge Models:</strong> On-device applications for enhanced privacy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Natural Language Processing for Legal Domain</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Current State (2026)</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    63% of legal AI solutions now powered by machine learning and deep learning, enabling sophisticated algorithms
                    to analyze vast legal datasets and automate complex processes.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Document Analysis</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                        Named entity recognition, clause extraction, risk identification using transformer-based models
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Legal Research</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                        Semantic search, case law retrieval, precedent analysis with vector embeddings
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Compliance</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                        Regulatory monitoring, change detection, impact assessment automation
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-slate-700 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Multi-Agent Architectures</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    Emerging multi-agent approaches feature three main components working collaboratively:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">Query Routing</Badge>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Routes questions to specialized agents for specific legal acts or jurisdictions
                      </p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Regulation Retrieval</Badge>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Fetches relevant statutes, case law, and regulatory guidance
                      </p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Reasoning Engine</Badge>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Generates insightful responses combining multiple data sources
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Challenges & Requirements</h4>
                  <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300">
                    <li>• <strong>Fairness & Bias:</strong> AI in legal applications must follow strict standards for accuracy and fairness</li>
                    <li>• <strong>Explainability:</strong> Black-box models insufficient - legal AI requires transparent reasoning</li>
                    <li>• <strong>Domain-Specific Training:</strong> General-purpose LLMs require additional fine-tuning for legal contexts</li>
                    <li>• <strong>Hallucination Prevention:</strong> Critical need for grounded outputs with source citations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">Security & Compliance</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            GDPR, AI Act & Data Protection Compliance
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Navigating the complex landscape of AI regulation, privacy laws, and data protection requirements in 2026
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">EU AI Act (August 2, 2026)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  The EU AI Act becomes fully applicable August 2, 2026, establishing risk-based obligations for high-impact AI systems.
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Requirements:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Risk Classification:</strong> High-risk AI systems require comprehensive assessments</li>
                    <li>• <strong>Transparency:</strong> Disclosure when AI influences legal decisions</li>
                    <li>• <strong>Human Oversight:</strong> Mandatory for significant legal determinations</li>
                    <li>• <strong>Technical Documentation:</strong> Architecture, training data, performance metrics</li>
                    <li>• <strong>Conformity Assessment:</strong> Third-party audits for high-risk systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white dark:from-slate-800 dark:to-slate-900">
              <CardHeader>
                <Scale className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">GDPR Evolution 2026</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  GDPR compliance requires evolution from reactive audits to proactive privacy engineering with AI-specific obligations.
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">AI-Specific Compliance:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• <strong>Legal Basis:</strong> Legitimate interests assessments for LLM deployments</li>
                    <li>• <strong>DPIAs Required:</strong> Data Protection Impact Assessments for high-risk processing</li>
                    <li>• <strong>Article 22:</strong> Safeguards for automated decision-making</li>
                    <li>• <strong>Training Data:</strong> Verification that data was lawfully obtained</li>
                    <li>• <strong>Anonymization:</strong> LLMs rarely achieve true anonymization standards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">US State Privacy Laws (2026)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-600 mb-4">Colorado AI Act (June 2026)</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Risk management policies required</li>
                  <li>• Impact assessments for high-risk systems</li>
                  <li>• Transparency requirements</li>
                  <li>• Consumer rights to correct decisions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-4">Illinois AI Employment Law (Jan 2026)</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Mandatory disclosure when AI influences employment</li>
                  <li>• Annual bias audits required</li>
                  <li>• $1,000 first violation penalties</li>
                  <li>• $5,000 subsequent violations</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Additional State Laws</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <Badge className="mb-2">Kentucky</Badge>
                  <p className="text-slate-600 dark:text-slate-400">Global Privacy Control recognition (Jan 1, 2026)</p>
                </div>
                <div>
                  <Badge className="mb-2">Rhode Island</Badge>
                  <p className="text-slate-600 dark:text-slate-400">Comprehensive privacy requirements (Jan 1, 2026)</p>
                </div>
                <div>
                  <Badge className="mb-2">California</Badge>
                  <p className="text-slate-600 dark:text-slate-400">AI companion chatbot safety (SB 243)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-8">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-200 mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Enforcement & Penalties
            </h3>
            <div className="space-y-3 text-sm text-red-800 dark:text-red-300">
              <p>
                <strong>€1.2 billion in GDPR fines</strong> issued during 2024, with cumulative penalties reaching €5.88 billion since GDPR took effect.
              </p>
              <p>
                <strong>2025 saw €2.3 billion</strong> in fines—a 38% year-over-year increase. Europe has issued 2,245 GDPR fines totaling €5.65 billion since 2018.
              </p>
              <p>
                <strong>2026 Priority Areas:</strong> Authorities focus on AI transparency, cross-border data controls, Records of Processing Activities,
                Consent Mode v2 compliance, and vendor contract updates.
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Immediate Compliance Actions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Technical Requirements</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ Verify Consent Mode v2 implementation</li>
                  <li>✓ Test consent interfaces for dark patterns</li>
                  <li>✓ Audit trails for all AI decisions</li>
                  <li>✓ Source-linked citations in AI outputs</li>
                  <li>✓ Explainable AI with reasoning transparency</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Documentation & Policy</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ AI use policy with data boundaries</li>
                  <li>✓ Legitimate interests assessments for LLMs</li>
                  <li>✓ Records of Processing Activities (ROPA)</li>
                  <li>✓ Vendor contracts with 2025 SCCs</li>
                  <li>✓ DPIA for high-risk AI systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap Section */}
      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Implementation Guide</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Legal AI Adoption Roadmap
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From pilots to production: Best practices for deploying AI in law firms and corporate legal departments
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">2026: The Transition Year</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The pilot phase is over. 2026 is the year AI moves from "interesting tool" to "operational infrastructure" for legal departments.
                Many legal departments will no longer debate whether to adopt Generative AI but how fast they can scale it.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Phase 1: Experimentation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                    2023-2024: Pilots, proof-of-concepts, vendor evaluations
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">Phase 2: Production (2026)</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                    Operational deployment, workflow integration, scale-up
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Phase 3: Agentic AI</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                    2027+: Autonomous multi-step task execution
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Implementation Best Practices</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-bold">1</div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg">Establish Strong Foundations</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm ml-13 mb-3">
                    Law firms with strong data and workflow foundations are successfully implementing AI, while firms without this groundwork risk falling behind.
                  </p>
                  <div className="ml-13 bg-slate-50 dark:bg-slate-700 rounded p-4">
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Develop technology roadmap aligned with business strategy</li>
                      <li>• Improve collaboration between legal and IT teams</li>
                      <li>• Adopt platform-centric approach vs. point solutions</li>
                      <li>• Ensure clean, organized, accessible data repositories</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-bold">2</div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg">Governance Becomes Mandatory</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm ml-13 mb-3">
                    Between EU AI Act (August 2026), Colorado AI Act (June 2026), and state requirements, formalized AI policies have moved from best practice to compliance obligation.
                  </p>
                  <div className="ml-13 bg-slate-50 dark:bg-slate-700 rounded p-4">
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Adopt AI use policy covering permissible tasks and data boundaries</li>
                      <li>• Require source-linked citations and fact checks</li>
                      <li>• Build explainable, auditable workflows</li>
                      <li>• Establish review attestations for AI-assisted work</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-bold">3</div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg">Human Oversight Remains Critical</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm ml-13 mb-3">
                    The highest-achieving legal teams have clear workflows and "thoughtful lawyer-in-the-loop design." AI won't replace legal judgment.
                  </p>
                  <div className="ml-13 bg-slate-50 dark:bg-slate-700 rounded p-4">
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Agentic systems tightly constrained with clear handoffs</li>
                      <li>• Escalation points defined for complex legal issues</li>
                      <li>• Human sign-off where legal risk sits</li>
                      <li>• Regular quality reviews and accuracy audits</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-bold">4</div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg">Integration and Workflow Focus</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm ml-13 mb-3">
                    By 2026, AI seamlessly embedded within daily tools (Microsoft Word, Outlook), eliminating workflow silos.
                  </p>
                  <div className="ml-13 bg-slate-50 dark:bg-slate-700 rounded p-4">
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Workflows become primary control surface for AI governance</li>
                      <li>• Structured, logged processes deliver more trust than autonomous systems</li>
                      <li>• Evaluate platforms on operational discipline vs. interface quality</li>
                      <li>• Prioritize explainable AI outputs with audit trails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Success Factors for 2026</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-3">What Works</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>✓ Platform-centric vs. point solutions</li>
                    <li>✓ Customizable agents and playbooks</li>
                    <li>✓ AI capabilities transparently communicated to clients</li>
                    <li>✓ Measured outcomes tied to business value</li>
                    <li>✓ Change management and training programs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-3">Common Pitfalls</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>✗ Lack of technology roadmap</li>
                    <li>✗ Insufficient IT-legal collaboration</li>
                    <li>✗ No AI use policy or boundaries</li>
                    <li>✗ Focusing on time-saved vs. billable-hour metrics</li>
                    <li>✗ Deploying without change management</li>
                  </ul>
                </div>
              </div>
            </div>
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
