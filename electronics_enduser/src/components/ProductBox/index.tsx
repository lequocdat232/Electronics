"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductBanner from '../ProductBanner';
import ProductItem from '../ProductItem';

const product = Array.from(Array(20).keys()) // Chỉ giả lập, khi gọi API sẽ xóa

const ProductBox = () => {
  return (
        <>
            <div className="clearfix" />
            <div className="wrapbox-pList">
                <ul className="list-unstyled wrapbox-pNavCate wrapbox-pNavCates">
                    <li
                        className="wrapbox-getProducts active"
                        data-w={3}
                        data-cid={17}
                    >
                        <h3>
                        <a href="">Điện lạnh</a>
                        </h3>
                    </li>
                </ul>
                <div className="wrapbox-loadProducts wrapbox-loadProducts-3">
                    <div className="wrapbox-loadProduct wrapbox-loadProduct-3-17">
                        <ProductBanner />

                        <Swiper
                        className='product-list pList-olw'
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={5}
                        loop = { true }
                        breakpoints={{
                            1200: {
                                slidesPerView: 5,
                            },
                            1024: {
                            slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            0: {
                                slidesPerView: 2,
                            },
                        }}
                        navigation
                        >
                            {/* Giả lập có dữ liệ khi map, gọi API thì xóa  */}
                            {
                                product?.map( (index) => {
                                    return(
                                        <SwiperSlide key = {index}>
                                            <ProductItem />
                                        </SwiperSlide>
                                    )
                                } )
                            }
                        </Swiper>

                    
                        <a className="viewmore viewmorecate" href="/dien-lanh">
                            <span>Xem tất cả Điện lạnh</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
  )
}

export default ProductBox
