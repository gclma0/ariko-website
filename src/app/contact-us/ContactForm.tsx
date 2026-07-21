"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./page.module.css";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [website, setWebsite] = useState("");
  const [loadTime] = useState(() => Math.floor(Date.now() / 1000));
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formState,
          website,
          ts: loadTime,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.status === "success") {
          setStatus("success");
          setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
          setWebsite("");
        } else {
          setStatus("error");
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successMsg} role="alert">
        <CheckCircle size={32} className={styles.successIcon} />
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for reaching out. We&apos;ll get back to you within one business day.</p>
        <button className={styles.resetBtn} onClick={() => setStatus("idle")}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
      {/* Honeypot field (hidden from humans, visible to basic bots) */}
      <div style={{ position: "absolute", left: "-9999px", height: "1px", width: "1px", overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="contact-website">Leave this field blank</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor="contact-name" className={styles.label}>Full Name *</label>
          <input id="contact-name" type="text" name="name" required placeholder="John Smith"
            value={formState.name} onChange={handleChange} className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="contact-email" className={styles.label}>Email Address *</label>
          <input id="contact-email" type="email" name="email" required placeholder="john@company.com"
            value={formState.email} onChange={handleChange} className={styles.input} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor="contact-phone" className={styles.label}>Phone No</label>
          <input id="contact-phone" type="tel" name="phone" placeholder="+880 1XXX-XXXXXX"
            value={formState.phone} onChange={handleChange} className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="contact-subject" className={styles.label}>Subject *</label>
          <select id="contact-subject" name="subject" required value={formState.subject}
            onChange={handleChange} className={styles.select}>
            <option value="">Select a topic…</option>
            <option value="Export Inquiry">Export Inquiry</option>
            <option value="Import Inquiry">Import Inquiry</option>
            <option value="Ship Breaking">Ship Breaking</option>
            <option value="Solar Power">Solar Power</option>
            <option value="Partnership">Partnership / Business</option>
            <option value="General">General Inquiry</option>
          </select>
        </div>
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="contact-message" className={styles.label}>Message *</label>
        <textarea id="contact-message" name="message" required rows={6}
          placeholder="Tell us about your requirements, quantities, destination port, etc."
          value={formState.message} onChange={handleChange} className={styles.textarea} />
      </div>

      {status === "error" && (
        <div className={styles.errorMsg} role="alert">
          <AlertCircle size={18} />
          <span>Something went wrong. Please try again or email us directly.</span>
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "loading"} id="contact-submit">
        {status === "loading" ? <span className={styles.spinner} /> : <><Send size={16} />Send Message</>}
      </button>
    </form>
  );
}
