"use client";
import { 
  Header, 
  Hero, 
  BookingForm, 
  CarSelection, 
  Services, 
  WhyChooseUs, 
  Contact, 
  Testimonials, 
  Newsletter, 
  Footer 
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BookingForm />
      <CarSelection />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
 
  