import React from "react";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import {
  TabletPatternBottomDesktop,
  TabletPatternBottomMobile,
  TabletPatternTop,
} from "@/components/TabletPattern";
import {
  features,
  navigations,
  navItems,
  otherNavigations,
  reviews,
  socials,
} from "@/data";
import { HeroComponent } from "@/components/HeroComponent";
import { FeatureComponent } from "@/components/FeatureComponent";
import { ReviewsComponent } from "@/components/ReviewsComponent/ReviewsComponent";
import { TaglineComponent } from "@/components/TaglineComponent/TaglineComponent";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage</title>
        <meta
          name="description"
          content="Bring everyone together to build better products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative overflow-hidden min-h-screen">
        <TabletPatternTop />
        <div className="max-w-6xl mx-auto px-8 relative">
          <Navbar navItems={navItems} />
          <div className="flex flex-col gap-24 lg:gap-20">
            <section>
              <HeroComponent />
            </section>
            <section>
              <FeatureComponent features={features} />
            </section>
            <section>
              <ReviewsComponent reviews={reviews} />
            </section>
          </div>
        </div>
        <TaglineComponent />
        <Footer
          socials={socials}
          navigations={navigations}
          otherNavigations={otherNavigations}
        />
        <TabletPatternBottomDesktop />
        <TabletPatternBottomMobile />
      </main>
    </>
  );
}
