"use client";

import Image from "next/image";
import { useEffect } from "react";
import { getSupabaseBrowserClient } from '@/supabase-utils/browserClient';
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    supabase.storage.listBuckets().then((result) => {
      console.log("Bucket List", result)
    });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
