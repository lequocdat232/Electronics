import Link from 'next/link';
import React from 'react'

const HeaderMain = () => {
    return (
        <div className="bgcolor-main">
            <div className="container">
                <div className="row header-body flex flex-content-spacebetween">
                    <div className="col-md-3 col-9">
                        <div className="box-logo">
                            <Link className="flex flex-items-center" href="/">
                                <span></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5 col-3 box-utilities">
                        <div className="flex flex-content-spacearound">
                            <div className="box-contact">
                                <a href="tel:19006788">
                                    <b>1900 6788</b> <span>Tư vấn bán hàng</span>
                                </a>
                            </div>
                            <div className="box-location">
                                <a href="/he-thong-sieu-thi">
                                    <b>Tìm Siêu Thị</b> <span>Mở cửa: 8:00 - 21:30</span>
                                </a>
                            </div>
                            <div className="box-cart">
                                <div className="cart-badge badge-icons pull-right">
                                    <a href="/cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        <span>Giỏ hàng</span>
                                    </a>
                                    <span className="badge badge-sea rounded-x">0</span>
                                    <div className="badge-open"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 box-search">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <div className="menuhead-news flex flex-content-right">
                                    <ul className="login">
                                        <li className="nav-item">
                                            <a rel="nofollow" className="nav-link" href="/login"> Đăng nhập </a>
                                        </li>
                                        <li className="nav-item">
                                            <a rel="nofollow" className="nav-link" href="/register"> Đăng ký </a>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled">
                                        <li className="v-menu-item">
                                            <a
                                                data-id="1111"
                                                href="/thong-tin-chung/canh-bao-mao-danh-mediamart-lua-dao"
                                                title="Cảnh báo LỪA ĐẢO"
                                            >
                                                <span> Cảnh báo LỪA ĐẢO </span>
                                                <span className="menu-item-view menu-item-view-1111" style={{ display: 'none' }}></span>
                                            </a>
                                        </li>
                                        <li className="v-menu-item">
                                            <a data-id="481" href="/tu-van-tieu-dung" title="Tư vấn">
                                                <span> Tư vấn </span>
                                                <span className="menu-item-view menu-item-view-481" style={{ display: 'none' }}></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 col-md-0"></div>
                            <div className="col-11 col-md-12">
                                <form className="form-inline" action="/tag">
                                    <div className="form-group search-input">
                                        <input name="key" className="form-control" placeholder="Bạn tìm gì..." />
                                    </div>
                                    <button className="search-btn">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default HeaderMain
