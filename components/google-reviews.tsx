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
  const sampleReviews: Review[] = [
    {
      author_name: "Shy",
      rating: 5,
      text: "Extremely happy with the outcome. The team was professional, understood our vision and budget perfectly, and delivered a beautiful home. The post-installation support was also excellent. Highly recommended!",
      relative_time_description: "2 weeks ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Shy&background=BC6C25&color=fff&size=128",
    },
    {
      author_name: "Sahul Hameed",
      rating: 5,
      text: "Maya Interior has done an excellent job on the interiors of my newly built house. The design and materials they used are outstanding...",
      relative_time_description: "1 month ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Sahul+Hameed&background=606C38&color=fff&size=128",
    },
    {
      author_name: "LIC Dinagaran",
      rating: 5,
      text: "Great experience with Maya interior Mr.velu so convenient much they have progressed good quality professional service",
      relative_time_description: "3 weeks ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Dinagaran&background=DDA15E&color=fff&size=128",
    },
    {
      author_name: "Velmurugan Vel",
      rating: 4,
      text: "Well skilled and professional,Overall project was executed satisfied,Completed the work within time,Good and happy with their work",
      relative_time_description: "2 months ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Velmurugan+Vel&background=283618&color=fff&size=128",
    },
    {
      author_name: "Geetha B Balasundaram",
      rating: 5,
      text: "Mr.velu done very good job thanks to both designer and execution team project completed it nicely",
      relative_time_description: "1 week ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Geetha+Balasundaram&background=BC6C25&color=fff&size=128",
    },
    {
      author_name: "Dinesh M",
      rating: 5,
      text: "The interior design has added so much positive energy to the house. It feels calm, luxurious, and truly 'ours'.",
      relative_time_description: "3 days ago",
      profile_photo_url:
        "https://ui-avatars.com/api/?name=Dinesh&background=606C38&color=fff&size=128",
    },
  ];

  const averageRating = 4.9;
  const totalReviews = 847;

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
            href="#"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#001639] hover:bg-[#7a9177] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(139,161,134,0.3)] hover:shadow-[0_15px_40px_rgba(139,161,134,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaGoogle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="whitespace-nowrap">View All Reviews</span>
          </a>

          <a
            href="#"
            rel="noopener noreferrer"
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
