"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./TestimonialSlider.module.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import testimonials from "@/data/testimonials";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (!sliderRef.current) return;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    if (!sliderRef.current) return;
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToSlide(prevIndex);
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ce spun clienții noștri</h2>
        <p className={styles.subtitle}>
          Experiențele reale ale clienților noștri
        </p>

        {/* Mobile Slider */}
        <div className={styles.sliderContainer}>
          <div
            ref={sliderRef}
            className={styles.slider}
            style={{
              transform: isMobile
                ? `translateX(-${currentIndex * 100}%)`
                : "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.slide}>
                <TestimonialCard
                  name={testimonial.name}
                  text={testimonial.text}
                  location={testimonial.location}
                  rating={5}
                />
              </div>
            ))}
          </div>

          {isMobile && (
            <>
              <button
                onClick={prevSlide}
                className={styles.navButton}
                aria-label="Testimonial anterior"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className={styles.navButton}
                aria-label="Testimonial următor"
              >
                <FiChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Desktop Grid */}
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.gridItem}>
              <TestimonialCard
                name={testimonial.name}
                text={testimonial.text}
                location={testimonial.location}
                rating={5}
              />
            </div>
          ))}
        </div>

        {/* Dots Navigation (Mobile only) */}
        {isMobile && (
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => scrollToSlide(index)}
                aria-label={`Arată testimonialul ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
