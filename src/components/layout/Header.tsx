"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS, NavItem } from "@/data/navigation";
import { COMPANY } from "@/data/company";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <a href={`tel:${COMPANY.phone}`} className={styles.topBarLink}>
              <Phone size={13} />
              <span>{COMPANY.phone}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className={styles.topBarLink}>
              <Mail size={13} />
              <span>{COMPANY.email}</span>
            </a>
          </div>
          <div className={styles.topBarRight}>
            <a href={COMPANY.webmail} className={styles.topBarLink}>
              Webmail
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.headerInner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="ARIKO International Logo"
              width={200}
              height={28}
              className={styles.logoImage}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.href}
                  className={styles.navItem}
                  ref={(el) => { dropdownRefs.current[item.label] = el; }}
                  onMouseEnter={() => {
                    if (closeTimer.current) clearTimeout(closeTimer.current);
                    if (item.children) setOpenDropdown(item.label);
                  }}
                  onMouseLeave={() => {
                    closeTimer.current = setTimeout(() => setOpenDropdown(null), 200);
                  }}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`${styles.chevron} ${openDropdown === item.label ? styles.chevronOpen : ""}`}
                        />
                      </button>
                      <div
                        className={`${styles.dropdown} ${openDropdown === item.label ? styles.dropdownOpen : ""}`}
                        role="menu"
                      >
                        <div className={styles.dropdownInner}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`${styles.dropdownLink} ${isActive(child.href) ? styles.active : ""}`}
                              role="menuitem"
                            >
                              <span className={styles.dropdownDot} />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Link href="/contact-us" className={styles.ctaBtn} id="header-cta">
            Get In Touch
          </Link>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileDrawerHeader}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="18,2 34,32 2,32" fill="none" stroke="url(#g3)" strokeWidth="2.5" strokeLinejoin="round"/>
                <polygon points="18,10 28,28 8,28" fill="url(#g4)" opacity="0.3"/>
                <defs>
                  <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00c8e8"/>
                    <stop offset="100%" stopColor="#0080ff"/>
                  </linearGradient>
                  <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00c8e8"/>
                    <stop offset="100%" stopColor="#0080ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>ARIKO</span>
              <span className={styles.logoSub}>INTERNATIONAL</span>
            </div>
          </Link>
          <button onClick={() => setMobileOpen(false)} className={styles.mobileClose} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <nav className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className={styles.mobileNavSection}>
              {item.children ? (
                <>
                  <button
                    className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ""}`}
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`${styles.chevron} ${mobileExpanded === item.label ? styles.chevronOpen : ""}`}
                    />
                  </button>
                  <div className={`${styles.mobileSubNav} ${mobileExpanded === item.label ? styles.mobileSubNavOpen : ""}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`${styles.mobileSubLink} ${isActive(child.href) ? styles.active : ""}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.mobileDrawerFooter}>
          <a href={`tel:${COMPANY.phone}`} className={styles.mobileContact}>
            <Phone size={16} />
            {COMPANY.phone}
          </a>
          <Link href="/contact-us" className={styles.mobileCtaBtn}>
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Spacer */}
      <div className={styles.headerSpacer} />
    </>
  );
}
