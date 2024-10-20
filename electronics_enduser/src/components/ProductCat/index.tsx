import React from 'react'
import ProductBox from '../ProductBox'

const product_cat = Array.from(Array(3).keys()) // Chỉ giả lập, khi gọi API sẽ xóa

function ProductCat() {
  return (
    <div className="row">
        <div className="col-12">
            {/* Giả lập dũ liệu, khi gọi API thì xóa */}
            {
                product_cat?.map((index) => {
                    return(
                        <ProductBox key={index} />
                    )
                })
            }  
        </div>
    </div>
  )
}

export default ProductCat
