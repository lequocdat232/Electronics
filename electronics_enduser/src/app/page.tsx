import BannerHome from "@/components/BannerHome";
import ProductCat from "@/components/ProductCat";
import ProductSale from "@/components/ProductSale";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="body-content bg-page">
        <div className="container">
          <div className="page-home">
            <BannerHome />
            {/* <div className="row">
              <div className="col-12">
                <div className="boxbanner-64" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="boxbanner-65 owlRespon-3" />
              </div>
            </div>
            <div className="mhome-menu" style={{ display: "none" }}>
              <ul className="list-unstyled" />
            </div>
            <div className="row">
              <div className="col-12">
                <div className="boxbanner-13" />
              </div>
            </div>
            <div className="row">
              <div className="col-12" />
            </div>
            <div className="row">
              <div className="col-12" />
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-bestseller">
                  <div className="boxbanner-4" />
                </div>
              </div>
            </div> */}
            
            <ProductSale />

            <ProductSale />

            <ProductSale />

            <ProductSale />
            
            <ProductCat />
            
            
            
        
            
            <div className="clearfix pt-3" />
            <div className="row home-newsfeatured">
              <div className="col-md-9">
                <h4 className="home-news-head">
                  TIN KHUYẾN MẠI
                  <a href="/khuyen-mai" target="_blank">
                    Xem thêm
                  </a>
                </h4>
                <div className="home-news1">
                  <div className="item news-item news-item-1">
                    <div className="img">
                      <a
                        href="/tin-khuyen-mai/sale-than-toc-gia-giam-soc-50"
                        title="Sale thần tốc – Giá giảm sốc (-50%) - Mua 1 tặng 1"
                        data-id={20342}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/images/news/sale-than-toc-gia-giam-soc--50_5adca0e3.png"
                            alt="Sale thần tốc – Giá giảm sốc (-50%) - Mua 1 tặng 1"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-20342"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/tin-khuyen-mai/sale-than-toc-gia-giam-soc-50"
                        title="Sale thần tốc – Giá giảm sốc (-50%) - Mua 1 tặng 1"
                      >
                        Sale thần tốc – Giá giảm sốc (-50%) - Mua 1 tặng 1
                      </a>
                    </div>
                  </div>
                  <div className="item news-item news-item-2">
                    <div className="img">
                      <a
                        href="/tin-khuyen-mai/uu-dai-danh-cho-khach-hang-doanh-nghiep"
                        title="Ưu đãi dành cho khách hàng doanh nghiệp tại MediaMart"
                        data-id={20380}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/thumb/images/news/uu-dai-danh-cho-khach-hang-doanh-nghiep-tai-mediamart_3f0eba9c.png"
                            alt="Ưu đãi dành cho khách hàng doanh nghiệp tại MediaMart"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-20380"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/tin-khuyen-mai/uu-dai-danh-cho-khach-hang-doanh-nghiep"
                        title="Ưu đãi dành cho khách hàng doanh nghiệp tại MediaMart"
                      >
                        Ưu đãi dành cho khách hàng doanh nghiệp tại MediaMart
                      </a>
                    </div>
                  </div>
                  <div className="item news-item news-item-3">
                    <div className="img">
                      <a
                        href="/tin-khuyen-mai/doi-diem-lay-tien-giam-gia-den-3-000-000d-danh-cho-tan-sinh-vien"
                        title="Đổi Điểm lấy Tiền - Giảm giá đến 3.000.000đ dành cho Tân Sinh Viên"
                        data-id={20186}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/thumb/images/news/doi-diem-lay-tien---giam-gia-den-3000000d-danh-cho-tan-sinh-vien_4ff000bf.png"
                            alt="Đổi Điểm lấy Tiền - Giảm giá đến 3.000.000đ dành cho Tân Sinh Viên"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-20186"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/tin-khuyen-mai/doi-diem-lay-tien-giam-gia-den-3-000-000d-danh-cho-tan-sinh-vien"
                        title="Đổi Điểm lấy Tiền - Giảm giá đến 3.000.000đ dành cho Tân Sinh Viên"
                      >
                        Đổi Điểm lấy Tiền - Giảm giá đến 3.000.000đ dành cho Tân
                        Sinh Viên
                      </a>
                    </div>
                  </div>
                  <div className="item news-item news-item-4">
                    <div className="img">
                      <a
                        href="/tin-khuyen-mai/20-10-deal-hoi-thay-loi-yeu-thuong"
                        title="20.10 Deal Hời- Thay Lời Yêu Thương: Giảm tới 50%, hàng trăm deal sốc 99K, 199K, 299K"
                        data-id={20398}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/thumb/images/news/2010-deal-hoi--thay-loi-yeu-thuong-giam-toi-50-hang-tram-deal-soc-99k-199k-299k_ca9976af.png"
                            alt="20.10 Deal Hời- Thay Lời Yêu Thương: Giảm tới 50%, hàng trăm deal sốc 99K, 199K, 299K"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-20398"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/tin-khuyen-mai/20-10-deal-hoi-thay-loi-yeu-thuong"
                        title="20.10 Deal Hời- Thay Lời Yêu Thương: Giảm tới 50%, hàng trăm deal sốc 99K, 199K, 299K"
                      >
                        20.10 Deal Hời- Thay Lời Yêu Thương: Giảm tới 50%, hàng
                        trăm deal sốc 99K, 199K, 299K
                      </a>
                    </div>
                  </div>
                  <div className="item news-item news-item-5">
                    <div className="img">
                      <a
                        href="/tin-khuyen-mai/mung-khai-truong-mediamart-nui-thanh-quang-nam"
                        title="Thứ 6, 4/10 Khai trương MediaMart Núi Thành, Quảng Nam - 10 ngày đại giảm giá, cơn lốc quà tặng (-50%)"
                        data-id={20341}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/thumb/images/news/thu-6-410-khai-truong-mediamart-nui-thanh-quang-nam---10-ngay-dai-giam-gia-con-loc-qua-t_85bf26c3.jpg"
                            alt="Thứ 6, 4/10 Khai trương MediaMart Núi Thành, Quảng Nam - 10 ngày đại giảm giá, cơn lốc quà tặng (-50%)"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-20341"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/tin-khuyen-mai/mung-khai-truong-mediamart-nui-thanh-quang-nam"
                        title="Thứ 6, 4/10 Khai trương MediaMart Núi Thành, Quảng Nam - 10 ngày đại giảm giá, cơn lốc quà tặng (-50%)"
                      >
                        Thứ 6, 4/10 Khai trương MediaMart Núi Thành, Quảng Nam -
                        10 ngày đại giảm giá, cơn lốc quà tặng (-50%)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h4 className="home-news-head home-news-head2">
                  VIDEO REVIEW
                  <a href="/video-review" target="_blank">
                    Xem thêm
                  </a>
                </h4>
                <div className="home-news2">
                  <div className="item news-item news-item-1">
                    <div className="img">
                      <a
                        href="/video-may-giat/may-giat-long-dung-10-5kg-coex-gia-tot-nhat"
                        title="Máy giặt lồng đứng 10.5kg Coex: Siêu To - Siêu Rẻ"
                        data-id={20037}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/images/news/may-giat-long-dung-105kg-coex-gia-tot-nhat_3699835f.jpeg"
                            alt="Máy giặt lồng đứng 10.5kg Coex: Siêu To - Siêu Rẻ"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-20037"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/video-may-giat/may-giat-long-dung-10-5kg-coex-gia-tot-nhat"
                        title="Máy giặt lồng đứng 10.5kg Coex: Siêu To - Siêu Rẻ"
                      >
                        Máy giặt lồng đứng 10.5kg Coex: Siêu To - Siêu Rẻ
                      </a>
                    </div>
                  </div>
                  <div className="item news-item news-item-2">
                    <div className="img">
                      <a
                        href="/video-tivi/google-tv-4k-55-inch-sony-k-55s30-trai-nghiem-phong-phu"
                        title="Google TV 4K 55 inch Sony K-55S30: Trải nghiệm phong phú"
                        data-id={19954}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/thumb/images/news/google-tv-4k-55-inch-sony-k-55s30-trai-nghiem-phong-phu_c538b3d1.png"
                            alt="Google TV 4K 55 inch Sony K-55S30: Trải nghiệm phong phú"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-19954"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/video-tivi/google-tv-4k-55-inch-sony-k-55s30-trai-nghiem-phong-phu"
                        title="Google TV 4K 55 inch Sony K-55S30: Trải nghiệm phong phú"
                      >
                        Google TV 4K 55 inch Sony K-55S30: Trải nghiệm phong phú
                      </a>
                    </div>
                  </div>
                  <div className="item news-item news-item-3">
                    <div className="img">
                      <a
                        href="/video-gia-dung/-binh-tam-nong-lanh-30-lit-roler-rwh-8117-hieu-qua-lam-nong-nhanh"
                        title="Bình tắm nóng lạnh 30 Lít Roler RWH-8117: Hiệu quả làm nóng nhanh"
                        data-id={19265}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/thumb/images/news/binh-tam-nong-lanh-30-lit-roler-rwh-8117-hieu-qua-lam-nong-nhanh_e03b71d9.png"
                            alt="Bình tắm nóng lạnh 30 Lít Roler RWH-8117: Hiệu quả làm nóng nhanh"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-19265"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/video-gia-dung/-binh-tam-nong-lanh-30-lit-roler-rwh-8117-hieu-qua-lam-nong-nhanh"
                        title="Bình tắm nóng lạnh 30 Lít Roler RWH-8117: Hiệu quả làm nóng nhanh"
                      >
                        Bình tắm nóng lạnh 30 Lít Roler RWH-8117: Hiệu quả làm
                        nóng nhanh
                      </a>
                    </div>
                  </div>
                  <div className="item news-item news-item-4">
                    <div className="img">
                      <a
                        href="/video-may-giat/may-giat-coex-inverter-10-5kg-fw-11cw1412gb-khac-biet-nang-tam-chat-luong"
                        title="Máy giặt Coex Inverter 10,5kg FW-11CW1412GB: Khác biệt nâng tầm chất lượng"
                        data-id={19260}
                      >
                        <picture>
                          <Image
                            src="https://cdn.mediamart.vn/thumb/images/news/may-giat-coex-inverter-105kg-fw-11cw1412gb-khac-biet-nang-tam-chat-luong_ea1ebacc.png"
                            alt="Máy giặt Coex Inverter 10,5kg FW-11CW1412GB: Khác biệt nâng tầm chất lượng"
                            priority
                            width={300}
                            height={300}
                          />
                          <span
                            className="news-item-view news-item-view-19260"
                            style={{ display: "none" }}
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="name">
                      <a
                        href="/video-may-giat/may-giat-coex-inverter-10-5kg-fw-11cw1412gb-khac-biet-nang-tam-chat-luong"
                        title="Máy giặt Coex Inverter 10,5kg FW-11CW1412GB: Khác biệt nâng tầm chất lượng"
                      >
                        Máy giặt Coex Inverter 10,5kg FW-11CW1412GB: Khác biệt
                        nâng tầm chất lượng
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <div className="clearfix"></div>
    </>
  );
}
