import { Button } from "@/components/ui/button";
import { Scale, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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

      {/* Privacy Policy Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            Last updated: January 12, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Legal AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our
              services, including our website and software applications.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6 space-y-2">
              <li>Name, email address, and contact information</li>
              <li>Account credentials and authentication information</li>
              <li>Payment and billing information</li>
              <li>Legal documents and data you upload to our platform</li>
              <li>Communications with our support team</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Train and improve our AI models (with appropriate safeguards)</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6 space-y-2">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection and privacy</li>
              <li>Compliance with SOC 2, GDPR, and other relevant standards</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We do not sell your personal information. We may share your information only in the
              following circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6 space-y-2">
              <li>With your consent or at your direction</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, property, or safety and that of our users</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              7. Data Retention
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We retain your information for as long as necessary to provide our services and fulfill
              the purposes outlined in this Privacy Policy, unless a longer retention period is required
              by law.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              8. International Data Transfers
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Your information may be transferred to and processed in countries other than your country
              of residence. We ensure appropriate safeguards are in place to protect your information
              in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Our services are not intended for individuals under the age of 18. We do not knowingly
              collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              10. Changes to This Policy
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              11. Contact Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Email:{" "}
              <a href="mailto:privacy@legalai.com" className="text-blue-600 hover:underline">
                privacy@legalai.com
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
