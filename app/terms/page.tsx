import { Button } from "@/components/ui/button";
import { Scale, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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

      {/* Terms Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            Last updated: January 12, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              By accessing or using Legal AI's services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms,
              you are prohibited from using or accessing our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              2. Description of Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Legal AI provides artificial intelligence-powered tools and services for legal professionals,
              including but not limited to document analysis, legal research, compliance monitoring,
              contract drafting assistance, and predictive analytics. Our services are designed to
              assist legal professionals but do not constitute legal advice.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              3. User Accounts
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              To access our services, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              4. Acceptable Use
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6 space-y-2">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services or servers</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Reverse engineer or attempt to extract our source code</li>
              <li>Share your account credentials with unauthorized parties</li>
              <li>Use our services to compete with us or build similar products</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Legal AI and its licensors own all rights, title, and interest in the services, including
              all intellectual property rights. You retain ownership of your data and content, and you
              grant us a limited license to use it solely to provide our services to you.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              6. Fees and Payment
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Access to certain services requires payment of fees. You agree to pay all applicable fees
              as described on our pricing page. Fees are non-refundable except as required by law or
              as explicitly stated in these terms. We reserve the right to change our fees with 30 days'
              notice.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              7. Free Trial
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We may offer a free trial period for new users. At the end of the trial period, you will
              be automatically enrolled in a paid subscription unless you cancel before the trial ends.
              We will notify you before charging your payment method.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              8. Termination
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              You may terminate your account at any time through your account settings. We may suspend
              or terminate your access to our services if you violate these terms or for any other
              reason at our discretion. Upon termination, your right to use our services will immediately
              cease.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              9. Disclaimers
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              OUR SERVICES DO NOT CONSTITUTE LEGAL ADVICE AND SHOULD NOT BE USED AS A SUBSTITUTE FOR
              CONSULTATION WITH A QUALIFIED ATTORNEY.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEGAL AI SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
              WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
              INTANGIBLE LOSSES.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              11. Indemnification
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              You agree to indemnify and hold harmless Legal AI and its officers, directors, employees,
              and agents from any claims, damages, losses, liabilities, and expenses arising out of your
              use of our services or violation of these terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              12. Governing Law
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              These terms shall be governed by and construed in accordance with the laws of the State
              of California, without regard to its conflict of law provisions. Any disputes shall be
              resolved in the courts located in San Francisco, California.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of material
              changes via email or through our services. Your continued use of our services after such
              modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              14. Contact Information
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Email:{" "}
              <a href="mailto:legal@legalai.com" className="text-blue-600 hover:underline">
                legal@legalai.com
              </a>
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Address: 123 Innovation Drive, San Francisco, CA 94105, United States
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
