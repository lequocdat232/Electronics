import Image from 'next/image'
import React from 'react'

const ProductItem = () => {
  return (
    <div className="card item mb-4">
        <a
        href="/tivi/smart-tivi-samsung-4k-55-inch-55au7700-uhd"
        data-id={131}
        className="product-item"
        >
        <div className="card-img-top">
            <span
            className="product-type product-type-11"
            style={{
                display: "block",
                position: "absolute",
                right: 6,
                top: 8,
                fontSize: 11,
                zIndex: 3,
                backgroundColor: "#f1f1f1",
                color: "#333",
                padding: "2px 5px",
                borderRadius: 3,
            }}
            >
            Trả góp 0%
            </span>
            
            <Image
                src="https://cdn.mediamart.vn/thumb/images/product/smart-tivi-samsung-4k-55-inch-55au7700-uhd_81068dbe.jpg"
                width={300}
                height={300}
                alt="Smart Tivi Samsung 4K 55 inch 55AU7700 UHD"
                priority
            />
        </div>
        <div className="card-body">
            <p className="product-specialtype-box">
            <Image
                src="https://cdn.mediamart.vn/images/catalog/2010_d503c72b.png"
                width={300}
                height={300}
                alt="Khuyến mại"
                priority
            />
            <span>-50%</span>
            </p>
            <p className="card-title product-name">
            Samsung Smart TV UA55AU7700
            </p>
            <ul className="list-inline product-attributes">
            <li>4K</li>
            <li>55 inch</li>
            </ul>
            <p className="product-price-regular">
            <span>19.990.000 ₫</span>
            </p>
            <p className="card-text product-price">9.990.000 ₫</p>
        </div>
        </a>
    </div>
  )
}

export default ProductItem
