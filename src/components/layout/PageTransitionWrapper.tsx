"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./PageTransitionWrapper.module.css";

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 850);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div key={pathname} className={styles.wrapper}>
      {children}
    </div>
  );
}
