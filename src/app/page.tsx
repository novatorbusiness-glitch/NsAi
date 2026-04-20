import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/home/Hero";
import BlockUnique from "@/components/home/BlockUnique";
import BlockBenefit from "@/components/home/BlockBenefit";
import BlockProof from "@/components/home/BlockProof";
import BlockWhy from "@/components/home/BlockWhy";
import BlockEnemy from "@/components/home/BlockEnemy";
import BlockNow from "@/components/home/BlockNow";
import BlockTrust from "@/components/home/BlockTrust";
import BlockMechanism from "@/components/home/BlockMechanism";
import BlockVsMarket from "@/components/home/BlockVsMarket";
import BlockHowI from "@/components/home/BlockHowI";
import BlockCases from "@/components/home/BlockCases";
import BlockPricing from "@/components/home/BlockPricing";
import Offer from "@/components/home/Offer";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <hr className="dv" />
        <BlockUnique />
        <hr className="dv" />
        <BlockBenefit />
        <hr className="dv" />
        <BlockProof />
        <hr className="dv" />
        <BlockWhy />
        <hr className="dv" />
        <BlockEnemy />
        <hr className="dv" />
        <BlockNow />
        <hr className="dv" />
        <BlockTrust />
        <hr className="dv" />
        <BlockMechanism />
        <hr className="dv" />
        <BlockVsMarket />
        <hr className="dv" />
        <BlockHowI />
        <hr className="dv" />
        <BlockCases />
        <hr className="dv" />
        <BlockPricing />
        <hr className="dv" />
        <Offer />
        <Footer />
      </main>
    </>
  );
}
