import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Gallery } from "@/components/gallery";
import { ContactForm } from "@/components/contact-form";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <Section
          id="hero"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="/banner-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center max-w-4xl mx-auto mt-12 bg-background/70 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Honesty, Integrity, and Success
              <span className="text-primary block">Nakagiri Real Estate</span>
            </h1>
            <Image
              src="/bnakagiri-profile.jpg"
              alt="Brian Nakagiri"
              width={200}
              height={200}
              className="rounded-full mb-8 mx-auto block"
            />
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Brian Nakagiri is an agent who specializes in buying and selling
              properties in the Greater Los Angeles Area. He is backed by a team
              of experienced real estate professionals who are dedicated to
              providing the best possible service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#contact">Book Appointment</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="#gallery">View Our Work</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" background="muted">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                About Nakagiri Real Estate
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Come and join the journey to hassle free, comprehensive, and
                honest service for your entire residential, multi-family, or
                commercial real estate needs.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Take advantage of having Brian Nakagiri working on your side.
                Also, enjoy an entire team of resources that are dedicated to
                ensuring that your personal best interests are always kept at
                the forefront of every decision and/or direction, your
                transaction may require.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Depending on your needs, your resource team might consist of
                other real estate agent specialists, escrow companies, title
                companies, mortgage brokers, clean up crews, rehab/repair
                contractors, tax consultants, attorneys, property managers, etc.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    30+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    4.9★
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Rating (369 reviews)
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/res-curtis-front.jpg"
                alt="Residential property front yard in Los Angeles on Curtis Avenue"
                width={800}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Services & Specialties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nakagiri Real Estate specializes in buying and selling properties
              in the Greater Los Angeles Area. We are a team of experienced real
              estate professionals who are dedicated to providing our clients
              with the best possible service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Estate Issues (taxes, trusts, etc)
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Property tax appeals & reassessment</li>
                <li>• Trust transfers & probate sales</li>
                <li>• Inheritance & estate planning</li>
                <li>• Tax liens & 1031 exchanges</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Title Issues
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Liens, easements & encumbrances</li>
                <li>• Boundary & chain of title disputes</li>
                <li>• Cloud on title resolution</li>
                <li>• Missing heirs & vesting corrections</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Tenancy Issues
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Evictions & lease disputes</li>
                <li>• Tenant rights & rent control</li>
                <li>• Security deposits & move-out</li>
                <li>• Occupancy at close coordination</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Clean up/Rehab Issues
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Code violations & permits</li>
                <li>• Contractor coordination & bids</li>
                <li>• Staging & deferred maintenance</li>
                <li>• Cosmetic vs structural assessment</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Price Evaluation
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Comparative market analysis (CMA)</li>
                <li>• Appraisal review & appeal</li>
                <li>• Market trends & condition adjustments</li>
                <li>• Lot value & investment analysis</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Escrow Process
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Timeline & document coordination</li>
                <li>• Contingency removal & closing costs</li>
                <li>• Title insurance & final walk-through</li>
                <li>• Key handover & recording</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Gallery Section */}
        <Section id="gallery">
          <Gallery />
        </Section>

        {/* Contact Section */}
        <Section id="contact" background="primary">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Brian Nakagiri
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:briannakagiri@gmail.com">
                      <p className="text-muted-foreground">
                        briannakagiri@gmail.com
                      </p>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Los Angeles</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:(310)-902-4475">
                      <p className="text-muted-foreground">310-902-4475</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
