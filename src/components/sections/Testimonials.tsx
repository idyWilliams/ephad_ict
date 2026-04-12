"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { fadeIn } from "@/lib/motion";

import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[var(--color-brand-steel)]/20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="text-[var(--color-brand-blue)] font-semibold tracking-wider uppercase text-sm mb-4 block">Student Success</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-6">
              Hear from our Graduates
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto pb-12"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full flex flex-col relative group hover:shadow-xl transition-all">
                  <Quote className="absolute top-6 right-6 text-[var(--color-brand-steel)] w-10 h-10 opacity-30 group-hover:text-[var(--color-brand-sky)] transition-colors" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[var(--color-brand-sky)] text-[var(--color-brand-sky)]" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-brand-navy)] flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-brand-navy)]">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
