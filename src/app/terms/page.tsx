"use client";

import { Separator } from "@/components/ui/separator";

export default function TermsOfServicePage() {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-[#5D2DFD] mb-6">
        TrinetraAI Terms and Conditions
      </h1>
      <p className="text-muted-foreground text-base mb-10">
        Last updated: June 4, 2025
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-base text-muted-foreground">
            Welcome to TrinetraAI . These Terms and
            Conditions Terms govern your access to and use of our services,
            including the TrinetraAI website, mobile application, and browser
            extension . By accessing or using the
            Services, you agree to be bound by these Terms. If you do not agree
            with these Terms, you must refrain from using the Services.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
          <p className="text-base text-muted-foreground">
            To use the Services, you must be at least 13 years of age. To access
            premium features or process payments, you must be at least 18 years
            of age. By using the Services, you represent and warrant that you
            meet these eligibility requirements.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Account Registration and Security
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Certain features of the Services may require you to create an
            account. You agree to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Provide accurate, current, and complete information during
              registration and keep your account details updated.
            </li>
            <li>
              Maintain the confidentiality of your login credentials and
              promptly notify us of any unauthorized access.
            </li>
            <li>
              Use optional security features, such as Google SSO, OTP, or 2FA,
              to enhance account security.
            </li>
          </ul>
          <p className="text-base text-muted-foreground mt-4">
            We reserve the right to suspend or terminate your account for
            unauthorized use, fraudulent activity, or violations of these Terms.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Do not use the Services for illegal, unauthorized, or unethical
              purposes.
            </li>
            <li>
              Do not hack, reverse-engineer, or interfere with our systems.
            </li>
            <li>Do not upload malware, viruses, or infringing content.</li>
            <li>Do not use automated bots or scripts without permission.</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Subscription and Payment Terms
          </h2>
          <p className="text-base text-muted-foreground mb-2">
            Certain features, like code scanning or extended reporting, are
            available to premium subscribers. Payments are processed via
            Razorpay or Stripe.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>All fees are non-refundable unless specified in writing.</li>
            <li>You must provide valid and up-to-date payment details.</li>
            <li>TrinetraAI is not liable for third-party payment issues.</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Usage Limits for Free and Paid Plans
          </h2>
          <p className="text-base text-muted-foreground mb-2">
            Free users have limited access (e.g., 3 phishing scans/day). Premium
            users get enhanced limits and features.
          </p>
          <p className="text-base text-muted-foreground">
            We reserve the right to modify limits or features anytime, with or
            without notice.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Intellectual Property
          </h2>
          <p className="text-base text-muted-foreground mb-2">
            All content, trademarks, software, and models are the exclusive
            property of TrinetraAI or its licensors.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>No reproduction or distribution without written consent.</li>
            <li>
              Feedback and suggestions may be used by us without obligation.
            </li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Privacy and Data Protection
          </h2>
          <p className="text-base text-muted-foreground">
            Our Privacy Policy governs your data use. By using our Services, you
            consent to the practices outlined in it.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p className="text-base text-muted-foreground mb-2">
            We may suspend or terminate your access for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Violating these Terms.</li>
            <li>Illegal or harmful activity.</li>
            <li>Prolonged inactivity or misuse.</li>
          </ul>
          <p className="text-base text-muted-foreground mt-4">
            You can request account deletion via our support team, subject to
            identity verification.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
          <p className="text-base text-muted-foreground">
            Services are provided without warranties. We do not
            guarantee scan result accuracy, uninterrupted access, or complete
            security. Use at your own risk.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            11. Limitation of Liability
          </h2>
          <p className="text-base text-muted-foreground">
            TrinetraAI and its affiliates are not liable for indirect,
            incidental, or consequential damages from using our Services, scan
            results, or data loss.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            12. Modifications to Terms and Services
          </h2>
          <p className="text-base text-muted-foreground">
            We may modify these Terms or Services at any time. Major changes
            will be notified via email or through the platform. Continued use
            means acceptance.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            13. Governing Law and Dispute Resolution
          </h2>
          <p className="text-base text-muted-foreground">
            These Terms are governed by Indian law. Disputes shall be settled in
            the courts of Gurugram, Haryana, India.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            14. Contact Information
          </h2>
          <p className="text-base text-muted-foreground mb-2">
            Email:{" "}
            <a
              href="mailto:support@TrinetraAI.com"
              className="text-[#5D2DFD] hover:underline"
            >
              support@TrinetraAI.com
            </a>
          </p>
          <p className="text-base text-muted-foreground">
            Address: TrinetraAI Private Limited,  Gurugram, Haryana, India
          </p>
        </section>
      </div>
    </div>
  );
}
