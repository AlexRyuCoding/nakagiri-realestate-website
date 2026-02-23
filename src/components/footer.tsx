import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-secondary py-8 text-secondary-foreground">
      <div className="container">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/nakagiri-real-estate-logo-lg.png"
              alt="Nakagiri Real Estate"
              width={150}
              height={150}
              className="h-32 w-auto"
            />
          </div>
          <p className="text-secondary-foreground/80 mb-4">
            Brian Nakagiri is an agent who specializes in buying and selling
            properties in the Greater Los Angeles Area. He is backed by a team
            of experienced real estate professionals who are dedicated to
            providing the best possible service.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-secondary-foreground/80">
            <a href="#hero" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Services
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-secondary-foreground/20">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 Nakagiri Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
