"use client";

import { FaStar, FaGoogle, FaDirections, FaClock } from "react-icons/fa";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isUserInteracting = false;

    const startScrolling = () => {
      if (isUserInteracting) return;
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 40); // Increased interval for slower scroll and potentially smoother animation on iOS
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    const handleMouseEnter = () => {
      isUserInteracting = true;
      stopScrolling();
    };

    const handleMouseLeave = () => {
      isUserInteracting = false;
      startScrolling();
    };

    const handleTouchStart = () => {
      isUserInteracting = true;
      stopScrolling();
    };

    const handleTouchEnd = () => {
      isUserInteracting = false;
      setTimeout(() => {
        if (!isUserInteracting) {
          startScrolling();
        }
      }, 2000);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    scrollContainer.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    startScrolling();

    return () => {
      stopScrolling();
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Sample reviews data
  // Reviews data fetched from Google Reviews
  const sampleReviews: Review[] = [
    {
      author_name: "Keerthana",
      rating: 5,
      text: "Excellent service and reliable quality—these t-shirts hold up well after multiple washes. We’ll definitely continue ordering in bulk.",
      relative_time_description: "a month ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Keerthana&background=BC6C25&color=fff&size=128",
    },
    {
      author_name: "Vinoth M",
      rating: 5,
      text: "I recently purchased 240gsm oversized for my clothing brand at best price to compare other the fabrics are really good and they have unique colors too that really good and best price",
      relative_time_description: "a month ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Vinoth+M&background=606C38&color=fff&size=128",
    },
    {
      author_name: "Akshaykumar M",
      rating: 5,
      text: "Best experience on buying bulk orders the quality of the cloths & Delivery were good!",
      relative_time_description: "a month ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Akshaykumar+M&background=DDA15E&color=fff&size=128",
    },
    {
      author_name: "Kokila Kokilamani",
      rating: 5,
      text: "The product quality is worth and product arrived quickly.",
      relative_time_description: "a month ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Kokila+Kokilamani&background=283618&color=fff&size=128",
    },
  ];

  const averageRating = 4.8;
  const totalReviews = 4;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-1">{renderStars(5)}</div>
            <span className="text-2xl font-bold text-black">
              {averageRating}
            </span>
          </div>
          <p className="text-gray-700 text-lg">
            Based on {totalReviews} reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 py-4 max-w-7xl mx-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
        >
          {sampleReviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Reviewer Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-black">
                    {review.author_name}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-black leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons - Responsive and Consistent */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-4">
          <a
            href="https://www.google.com/search?client=safari&hs=enj9&sca_esv=f26a4e8abbd57b5a&cs=1&output=search&kgmid=%2Fg%2F11t43xtk7q&q=Koresfabrics&shndl=30&source=sh%2Fx%2Fkp%2Flocal%2Fm1%2F1&kgs=a0dc79143f6e2637"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#001639] hover:bg-[#7a9177] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(139,161,134,0.3)] hover:shadow-[0_15px_40px_rgba(139,161,134,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaGoogle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="whitespace-nowrap">View All Reviews</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Koresfabrics/@12.971626,77.594166,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1c4b3b3b3b3b:0x3b3b3b3b3b3b3b3b!8m2!3d12.971626!4d77.596355!16s%2Fg%2F11t43xtk7q"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#001639] hover:bg-[#7a9177] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(139,161,134,0.3)] hover:shadow-[0_15px_40px_rgba(139,161,134,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaDirections className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="whitespace-nowrap">Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
}
