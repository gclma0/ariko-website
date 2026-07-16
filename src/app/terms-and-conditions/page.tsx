import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import styles from "../privacy-policy/page.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "ARIKO International terms and conditions governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website or engaging our services."
        breadcrumb={[{ label: "Terms & Conditions" }]}
        image="/hero-port.jpg"
        tag="Legal"
      />

      <section className={`section ${styles.legalSection}`}>
        <div className="container">
          <div className={styles.legalContent}>
            <p className={styles.lastUpdated}>Last updated: January 1, 2025</p>

            <div className={styles.block}>
              <h2 className={styles.h2}>1. Acceptance of Terms</h2>
              <p>By accessing or using the website scrapbangla.com (&quot;the Website&quot;), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access the Website. These Terms apply to all visitors, users, and others who access or use the Website.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>2. Use of the Website</h2>
              <p>You agree to use this Website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul className={styles.list}>
                <li>Use the Website in any way that violates applicable local, national, or international laws or regulations</li>
                <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
                <li>Attempt to gain unauthorized access to any part of the Website or its related systems</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Website</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>3. Intellectual Property</h2>
              <p>The content, layout, design, data, databases, and graphics on this Website are protected by intellectual property laws. All content is the property of ARIKO International or its content suppliers. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>4. Disclaimer of Warranties</h2>
              <p>The Website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. ARIKO International makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Website or the information, products, services, or related graphics contained on the Website for any purpose.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>5. Limitation of Liability</h2>
              <p>In no event shall ARIKO International, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Website or the services offered.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>6. Business Transactions</h2>
              <p>Information on this Website is for general informational purposes only and does not constitute a binding business offer. All trade inquiries, pricing, and terms of business are subject to separate written agreements negotiated directly with ARIKO International. We reserve the right to modify, suspend, or discontinue any service or product without notice.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>7. Third-Party Links</h2>
              <p>The Website may contain links to external third-party websites. ARIKO International has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites. We strongly advise you to review the Terms and Privacy Policy of every site you visit.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>8. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the People&apos;s Republic of Bangladesh. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Bangladesh.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>9. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days&apos; notice prior to any new terms taking effect. Your continued use of the Website after any changes constitutes acceptance of the new Terms.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>10. Contact</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className={styles.contactBlock}>
                <strong>ARIKO International</strong><br />
                East Queen Group, Dhaka, Bangladesh<br />
                Email: <a href="mailto:info@scrapbangla.com" className={styles.link}>info@scrapbangla.com</a><br />
                Phone: <a href="tel:+8801713042261" className={styles.link}>+880 1713-042261</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
