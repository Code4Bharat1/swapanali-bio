import Head from "next/head";
import React from "react";

export default function SEO({
  title = "Biology with Swapanali",

  type = "website",
}) {
  return (
    <Head>

      {/* Favicon & Apple Touch Icon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
}