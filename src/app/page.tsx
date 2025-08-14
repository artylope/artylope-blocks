import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import TestimonialSection from '@/app/components/HomePage/TestimonialSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
