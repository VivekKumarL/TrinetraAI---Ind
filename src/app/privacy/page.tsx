"use client";

import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-[#5D2DFD] mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground text-base mb-10">
        Last updated: June 4, 2025
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-base text-muted-foreground">
            Welcome to TrinetraAI ("we," "us," or "our"). We are committed to
            protecting your privacy and being transparent about how we collect,
            use, and safeguard your data when you access our website, Android
            app, and browser extension ("Services"). By using our Services, you
            consent to the practices outlined in this Privacy Policy.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Personal Information: Full name, email, password, optional phone
              number and profile picture.
            </li>
            <li>
              Login Methods: Email/password, Google SSO, optional OTP or 2FA.
            </li>
            <li>
              Payment Info: Processed via Razorpay or Stripe, we don’t store
              card details.
            </li>
            <li>
              Scanned Data: URLs and reports retained temporarily to improve AI
              model accuracy.
            </li>
            <li>
              Device & Usage Data: Browser, OS version, IP, and geolocation data
              (if mobile app used).
            </li>
            <li>
              Cookies & Tracking: Session management, personalization, and
              analytics (future).
            </li>
            <li>
              Android App Permissions: Notifications, location (optional),
              storage, and network access.
            </li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-base text-muted-foreground">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li>Provide and improve our Services.</li>
            <li>Generate security reports and scan results.</li>
            <li>Train our AI models.</li>
            <li>Process payments securely.</li>
            <li>Communicate account updates and transactional emails.</li>
            <li>Maintain service security and prevent fraud.</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
          <p className="text-base text-muted-foreground">
            Data is retained only as long as necessary:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li>Scanned URLs and reports: up to 2 months.</li>
            <li>Downloadable reports: 1 month after creation.</li>
            <li>Backups: Retained for 1 extra month for data integrity.</li>
            <li>
              Data is securely deleted or anonymized after expiration unless
              required for legal compliance.
            </li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. User Rights</h2>
          <p className="text-base text-muted-foreground">
            You may have rights to access, correct, delete, or restrict your
            personal data. To exercise these, contact{" "}
            <a
              href="mailto:privacy@TrinetraAI.com"
              className="text-[#5D2DFD] hover:underline"
            >
              privacy@TrinetraAI.com
            </a>
            .
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Children’s Privacy</h2>
          <p className="text-base text-muted-foreground">
            Users must be 18+ to process payments. If personal data of minors is
            discovered, it will be promptly deleted.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Sharing of Information
          </h2>
          <p className="text-base text-muted-foreground">
            We share data only with:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li>Trusted payment processors like Razorpay.</li>
            <li>Cloud services (AWS, S3, MongoDB).</li>
            <li>Internal operations at TrinetraAI Pvt. Ltd.</li>
          </ul>
          <p className="text-base text-muted-foreground mt-4">
            We do not sell or rent your data for marketing purposes.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
          <p className="text-base text-muted-foreground">
            We employ encryption, secure storage, and access controls. While no
            system is 100% secure, we’ll notify users and authorities in case of
            a breach.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            9. International Data Transfers
          </h2>
          <p className="text-base text-muted-foreground">
            Data may be processed in India, the US, or other countries. We
            comply with applicable international transfer safeguards.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            10. Marketing and Communications
          </h2>
          <p className="text-base text-muted-foreground">
            Currently, no promotional emails are sent. If introduced in the
            future, you’ll have clear opt-out options.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            11. Changes to This Privacy Policy
          </h2>
          <p className="text-base text-muted-foreground">
            We may update this policy periodically. Significant changes will be
            communicated through email or in-app notifications.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p className="text-base text-muted-foreground">
            For inquiries or data requests, contact us at{" "}
            <a
              href="mailto:privacy@TrinetraAI.com"
              className="text-[#5D2DFD] hover:underline"
            >
              privacy@TrinetraAI.com
            </a>{" "}
            or via post at: TrinetraAI Private Limited, Gurugram, Haryana, India.
          </p>
        </section>
      </div>
    </div>
  );
}
