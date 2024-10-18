"use client"
import React from 'react'
import Image from 'next/image'
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  
const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    nav: true,
    navText: ["", ""],
};


function BannerSlider() {
  return (
    <div className="col-md-8 col-12">
        <div className="home-slide">
            <OwlCarousel className="banner-list owl-theme" {...options}>
                <div className="item">
                    <a href="">
                        <Image src="https://cdn.mediamart.vn/images/banner/sale-than-toc-giam-gia-soc-xem-ngay_4e79b684.png" alt="Ocean" width={640} height={450} />
                    </a>
                </div>
                <div className="item">
                    <a href="">
                        <Image src="https://cdn.mediamart.vn/images/banner/20-10-deal-hoi-thay-yeu-thuong-xem-ngay_f711dfae.png" alt="Ocean" width={640} height={450} />
                    </a>
                </div>
                <div className="item">
                    <a href="">
                        <Image src="https://cdn.mediamart.vn/images/banner/iphone-16-coming-soon-xem-ngay_437e1a81.png" alt="Ocean" width={640} height={450} />
                    </a>
                </div>
            </OwlCarousel>
        </div>
    </div>
  )
}

export default BannerSlider
