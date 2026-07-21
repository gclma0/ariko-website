import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { COMPANY } from "@/data/company";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ARIKO International for export, import, ship breaking, and solar power inquiries. Our team responds within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach our trade and operations team — we respond within one business day."
        breadcrumb={[{ label: "Contact Us" }]}
        image="/hero-port.jpg"
        tag="Get In Touch"
      />

      <ScrollRevealWrapper>
        <section className={`section ${styles.contactSection}`}>
          <div className="container">
            {/* Top Form + Quick Info */}
            <div className={styles.contactGrid}>
              {/* Form */}
              <div className={`${styles.formWrap} reveal-left`}>
                <div className="divider" />
                <p className={styles.eyebrow}>Send a Message</p>
                <h2 className={styles.formTitle}>
                  Let&apos;s Start a <span className="text-gradient">Conversation</span>
                </h2>
                <p className={styles.formSubtitle}>
                  Fill in the form and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>

              {/* Direct Contact Card */}
              <aside className={`${styles.sidebar} reveal-right`} style={{ transitionDelay: "0.25s" }}>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Direct Contact</h3>
                  <div className={styles.contactPersonHeader}>
                    <strong>{COMPANY.managingDirector.name}</strong>
                    <span className={styles.contactPersonSub}>{COMPANY.managingDirector.role}</span>
                  </div>
                  <ul className={styles.infoList}>
                    <li className={styles.infoItem}>
                      <div className={styles.infoIcon}><Phone size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>Phone</span>
                        <a href={`tel:${COMPANY.managingDirector.phone}`} className={styles.infoValue}>{COMPANY.managingDirector.phone}</a>
                      </div>
                    </li>
                    <li className={styles.infoItem}>
                      <div className={styles.infoIcon}><Mail size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>Email</span>
                        {COMPANY.managingDirector.emails.map((email) => (
                          <a key={email} href={`mailto:${email}`} className={styles.infoValue} style={{ display: 'block' }}>{email}</a>
                        ))}
                      </div>
                    </li>
                    <li className={styles.infoItem}>
                      <div className={styles.infoIcon}><Globe size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>Website</span>
                        {COMPANY.managingDirector.websites.map((web) => (
                          <a key={web} href={`https://${web}`} target="_blank" rel="noopener noreferrer" className={styles.infoValue} style={{ display: 'block' }}>{web}</a>
                        ))}
                      </div>
                    </li>
                    <li className={styles.infoItem}>
                      <div className={styles.infoIcon}><Clock size={18} /></div>
                      <div>
                        <span className={styles.infoLabel}>Business Hours</span>
                        <span className={styles.infoValue}>Sun–Thu, 9:00 AM – 6:00 PM BST</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>

            {/* Bottom Full-Width Offices Section */}
            <div className={`${styles.officesSection} reveal`} style={{ transitionDelay: "0.3s" }}>
              <div className="divider" />
              <p className={styles.eyebrow}>Global Locations</p>
              <h2 className={styles.officesTitle}>
                Our <span className="text-gradient">Offices</span>
              </h2>

              <div className={styles.officesGrid}>
                {COMPANY.offices.map((office, i) => (
                  <div key={office.id} className={`${styles.officeCard} reveal`} style={{ transitionDelay: `${0.4 + i * 0.2}s` }}>
                    <div className={styles.officeHeader}>
                      <MapPin size={16} className={styles.officePin} />
                      <span className={styles.officeLabel}>{office.label}</span>
                    </div>
                    <p className={styles.officeAddress}>{office.address}</p>

                    {office.contactPerson && (
                      <p className={styles.officePerson}>Contact: <strong>{office.contactPerson}</strong></p>
                    )}

                    <div className={styles.officeDetails}>
                      <div className={styles.officeDetailRow}>
                        <span className={styles.detailLabel}>Email:</span>
                        <a href={`mailto:${office.email}`} className={styles.detailValue}>{office.email}</a>
                      </div>
                      {office.altEmail && (
                        <div className={styles.officeDetailRow}>
                          <span className={styles.detailLabel}>Alt Email:</span>
                          <a href={`mailto:${office.altEmail}`} className={styles.detailValue}>{office.altEmail}</a>
                        </div>
                      )}
                      {office.phone && (
                        <div className={styles.officeDetailRow}>
                          <span className={styles.detailLabel}>Phone:</span>
                          <span className={styles.detailValue}>{office.phone}</span>
                        </div>
                      )}
                      {office.fax && (
                        <div className={styles.officeDetailRow}>
                          <span className={styles.detailLabel}>Fax:</span>
                          <span className={styles.detailValue}>{office.fax}</span>
                        </div>
                      )}
                      {office.skype && (
                        <div className={styles.officeDetailRow}>
                          <span className={styles.detailLabel}>Skype:</span>
                          <span className={styles.detailValue}>{office.skype}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>
    </>
  );
}
