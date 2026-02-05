import { useEffect, useState } from 'react';
import { Download, Heart, ChevronDown } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#1a1a1a] to-[#0a0a0a]"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#c9a876] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-40 right-20 w-48 h-48 border border-[#c9a876] rounded-full animate-pulse-slower" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-[#c9a876] rounded-full animate-pulse-slow" />
        </div>

        <div className={`relative z-10 text-center px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <Heart className="w-16 h-16 text-[#c9a876] mx-auto mb-6 animate-float" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-[#c9a876] tracking-wide animate-fade-in">
            Obaapanin
          </h1>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 animate-fade-in-delay">
            Mercy Abena Adomaa
          </h2>

          <div className="space-y-2 mb-12 animate-fade-in-delay-2">
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-widest">
              1942 — 2025
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#c9a876]" />
              <p className="text-sm md:text-base text-[#c9a876] uppercase tracking-widest">In Loving Memory</p>
              <div className="h-px w-16 bg-[#c9a876]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('ceremony')}
              className="px-8 py-4 bg-[#c9a876] text-[#0a0a0a] font-semibold rounded-sm hover:bg-[#d4b589] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a876]/20"
            >
              Ceremony Details
            </button>
            <button
              onClick={() => scrollToSection('brochure')}
              className="px-8 py-4 border-2 border-[#c9a876] text-[#c9a876] font-semibold rounded-sm hover:bg-[#c9a876] hover:text-[#0a0a0a] transition-all duration-300"
            >
              View Brochure
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#c9a876]" />
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h3 className="font-serif text-4xl md:text-5xl mb-4 text-[#c9a876]">A Life Celebrated</h3>
              <div className="h-1 w-32 bg-[#c9a876] mx-auto" />
            </div>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-lg md:text-xl font-light text-center italic">
              "A remarkable woman whose life was defined by love, sacrifice, faith and service."
            </p>

            <div className="bg-[#151515] p-8 md:p-12 rounded-lg border border-gray-800 hover:border-[#c9a876] transition-all duration-500">
              <p className="mb-6">
                Obaapanin Mercy Abena Adomaa was born and raised in Techiman, in Ghana's Bono East Region,
                where her early years forged the strong values of compassion, resilience, and integrity that
                would later define her life.
              </p>

              <p className="mb-6">
                Following the passing of her husband, Aunty Mercy, as affectionately known by all, selflessly
                devoted her life to raising her six children. She stood firmly in the role of both mother and
                father, pouring her strength, love, and unwavering commitment into ensuring her children were
                nurtured, disciplined, and guided on the right path.
              </p>

              <p className="mb-6">
                A devoted Seventh-day Adventist, she instilled in her children the importance of knowing God,
                living a God-fearing life, and upholding strong moral values. Her faith was not merely spoken—it
                was lived daily through her actions.
              </p>

              <p className="text-[#c9a876] font-semibold italic text-center mt-8">
                "Her memory will forever remain alive in our hearts, and her impact will continue to echo through generations."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ceremony" className="py-24 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h3 className="font-serif text-4xl md:text-5xl mb-4 text-[#c9a876]">Funeral Service</h3>
              <div className="h-1 w-32 bg-[#c9a876] mx-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#151515] p-8 rounded-lg border border-gray-800 hover:border-[#c9a876] transition-all duration-500 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c9a876]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#c9a876]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#c9a876]">Date</h4>
                <p className="text-gray-300 text-lg">Sunday</p>
                <p className="text-gray-300 text-2xl font-bold mb-1">8th February</p>
                <p className="text-gray-400">2026</p>
              </div>
            </div>

            <div className="bg-[#151515] p-8 rounded-lg border border-gray-800 hover:border-[#c9a876] transition-all duration-500 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c9a876]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#c9a876]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#c9a876]">Time</h4>
                <p className="text-gray-300 text-3xl font-bold">6:00 AM</p>
                <p className="text-gray-400 mt-2">Service begins promptly</p>
              </div>
            </div>

            <div className="bg-[#151515] p-8 rounded-lg border border-gray-800 hover:border-[#c9a876] transition-all duration-500 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c9a876]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#c9a876]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#c9a876]">Location</h4>
                <p className="text-gray-300 font-semibold">Tigies Gardens</p>
                <p className="text-gray-300">Community 9, Tema</p>
                <p className="text-gray-400 mt-2">Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brochure" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h3 className="font-serif text-4xl md:text-5xl mb-4 text-[#c9a876]">Funeral Brochure</h3>
              <div className="h-1 w-32 bg-[#c9a876] mx-auto" />
            </div>
          </div>

          <div className="bg-[#151515] p-8 md:p-12 rounded-lg border-2 border-gray-800 hover:border-[#c9a876] transition-all duration-500">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-[#c9a876]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-[#c9a876]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-300 text-lg mb-8">
                Download or view the complete funeral service brochure with order of service, tributes, and photo memories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/obaapanyin_final_for_print.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a876] text-[#0a0a0a] font-semibold rounded-sm hover:bg-[#d4b589] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a876]/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Brochure
              </a>
              <a
                href="/obaapanyin_final_for_print.pdf"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#c9a876] text-[#c9a876] font-semibold rounded-sm hover:bg-[#c9a876] hover:text-[#0a0a0a] transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Heart className="w-12 h-12 text-[#c9a876] mx-auto mb-6 animate-float" />
          </div>

          <p className="font-serif text-2xl md:text-3xl mb-6 text-gray-300 italic">
            "Rest in perfect peace, Auntie Mercy."
          </p>
          <p className="text-xl text-gray-400 mb-8">
            Your work on earth is done.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-24 bg-[#c9a876]" />
            <p className="text-[#c9a876] font-semibold">Forever in Our Hearts</p>
            <div className="h-px w-24 bg-[#c9a876]" />
          </div>

          <p className="text-gray-500 text-sm">
            May her soul rest in eternal peace
          </p>
        </div>
      </section>

      <footer className="py-8 px-6 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>In Loving Memory of Obaapanin Mercy Abena Adomaa</p>
          <p className="mt-2">1942 - 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
