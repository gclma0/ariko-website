"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  if (sent) {
    return (
      <p className={styles.newsletterThanks}>
        ✓ Thank you! We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit} id="newsletter-form">
      <input
        type="email"
        placeholder="Your email address"
        className={styles.newsletterInput}
        aria-label="Email address for newsletter"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className={styles.newsletterBtn}>
        Subscribe
      </button>
    </form>
  );
}
