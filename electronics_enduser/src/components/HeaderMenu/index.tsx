'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const HeaderMenu = () => {
    const [ isShowCat, setIsShowCat] = useState(false)
    const toggleShowCat = () => {
        setIsShowCat(!isShowCat)
    }

    return (
        <div className="bgheader-menu">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-0">
                        <div className="box-nav">
                            <div className="main-nav navbar navbar-expand-lg navbar-default navbar-inverse">
                                <button
                                    className="navbar-toggler navbar-toggler-always"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarMain"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="true"
                                    aria-label="Toggle navigation"
                                    onClick = { toggleShowCat }
                                >
                                    <span className="navbar-toggler-icon"></span>
                                    <b>Danh Mục<span> Sản Phẩm</span></b>
                                    <i></i>
                                </button>
                                <div className={`navbar-collapse navbar-lg collapse ${isShowCat ? ('show') : '' }`} id="navbarMain">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown">
                                                <Image  src="https://cdn.mediamart.vn/images/menu/tivi-loa---am-thanh_51500480.png" alt="Tivi, Loa Âm Thanh" width={21} height={30} priority  />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/tivi">Tivi</a>, <a href="/loa-sale">Loa - Dàn Âm Thanh</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="260" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Thương Hiệu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-260" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="692" className="nav-link-2" href="/tivi-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tivi Coex</span>
                                                                <span className="menu-item-view menu-item-view-692" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="262" className="nav-link-2" href="/tivi-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Samsung
                                                                <span className="menu-item-view menu-item-view-262" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="261" className="nav-link-2" href="/tivi-sony">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Sony
                                                                <span className="menu-item-view menu-item-view-261" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="263" className="nav-link-2" href="/tivi-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi LG
                                                                <span className="menu-item-view menu-item-view-263" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="265" className="nav-link-2" href="/tivi-tcl">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi TCL
                                                                <span className="menu-item-view menu-item-view-265" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="264" className="nav-link-2" href="/tivi-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Sharp
                                                                <span className="menu-item-view menu-item-view-264" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="270" className="nav-link-2" href="/tivi-skyworth">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Skyworth
                                                                <span className="menu-item-view menu-item-view-270" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="754" className="nav-link-2" href="https://mediamart.vn/tivi-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Casper
                                                                <span className="menu-item-view menu-item-view-754" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="616" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Chọn TV</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-616" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="617" className="nav-link-2" href="/tivi?e=model-moi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Model Mới
                                                                <span className="menu-item-view menu-item-view-617" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="618" className="nav-link-2" href="/tivi?p=duoi-5-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi dưới 5 Triệu
                                                                <span className="menu-item-view menu-item-view-618" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="619" className="nav-link-2" href="/tivi?p=tu-5-7-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 5 - 7 Triệu
                                                                <span className="menu-item-view menu-item-view-619" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="620" className="nav-link-2" href="/tivi?p=tu-7-10-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 7 - 10 Triệu
                                                                <span className="menu-item-view menu-item-view-620" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="621" className="nav-link-2" href="/tivi?p=tu-10-15-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 10 - 15 Triệu
                                                                <span className="menu-item-view menu-item-view-621" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="622" className="nav-link-2" href="/tivi?p=tu-15-20-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 15 - 20 Triệu
                                                                <span className="menu-item-view menu-item-view-622" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="623" className="nav-link-2" href="/tivi?p=tren-20-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi trên 20 Triệu
                                                                <span className="menu-item-view menu-item-view-623" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="895" className="nav-link-2" href="/phu-kien-dien-tu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện điện tử
                                                                <span className="menu-item-view menu-item-view-895" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="606" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Loại Tivi</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-606" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="607" className="nav-link-2" href="/tivi?f=tv-8k">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi 8K
                                                                <span className="menu-item-view menu-item-view-607" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="608" className="nav-link-2" href="/tivi?f=tv-4k">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi 4K
                                                                <span className="menu-item-view menu-item-view-608" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="609" className="nav-link-2" href="/tivi-samsung?f=qled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Samsung QLED TV
                                                                <span className="menu-item-view menu-item-view-609" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="610" className="nav-link-2" href="/tivi-sony?f=oled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sony OLED TV
                                                                <span className="menu-item-view menu-item-view-610" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="611" className="nav-link-2" href="/tivi-lg?f=oled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                LG OLED TV
                                                                <span className="menu-item-view menu-item-view-611" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="612" className="nav-link-2" href="/tivi?f=android-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Android TV
                                                                <span className="menu-item-view menu-item-view-612" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="613" className="nav-link-2" href="/tivi?f=smart-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Smart TV
                                                                <span className="menu-item-view menu-item-view-613" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/t-lnh-t-dong-t-mat_eb9bda60.png" width={21} height={30} alt="Tủ lạnh,Tủ đông,Tủ mát" priority />
                                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/tu-lanh">Tủ lạnh</a>, <a href="/tu-dong">Tủ đông</a>, <a href="/tu-lam-mat">Tủ mát</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="287" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-lanh">
                                                        <span>Tủ Lạnh</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-287" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="296" className="nav-link-2" href="/tu-lanh-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ lạnh Coex</span>
                                                                <span className="menu-item-view menu-item-view-296" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="288" className="nav-link-2" href="/tu-lanh-hitachi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Hitachi
                                                                <span className="menu-item-view menu-item-view-288" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="289" className="nav-link-2" href="/tu-lanh-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Panasonic
                                                                <span className="menu-item-view menu-item-view-289" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="290" className="nav-link-2" href="/tu-lanh-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Electrolux
                                                                <span className="menu-item-view menu-item-view-290" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="291" className="nav-link-2" href="/tu-lanh-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh LG
                                                                <span className="menu-item-view menu-item-view-291" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="293" className="nav-link-2" href="/tu-lanh-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Sharp
                                                                <span className="menu-item-view menu-item-view-293" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="292" className="nav-link-2" href="/tu-lanh-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Samsung
                                                                <span className="menu-item-view menu-item-view-292" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="294" className="nav-link-2" href="/tu-lanh-toshiba">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Toshiba
                                                                <span className="menu-item-view menu-item-view-294" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="295" className="nav-link-2" href="/tu-lanh-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh AQUA
                                                                <span className="menu-item-view menu-item-view-295" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="297" className="nav-link-2" href="/tu-lanh-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Midea
                                                                <span className="menu-item-view menu-item-view-297" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="298" className="nav-link-2" href="/tu-lanh-mitsubishi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Mitsubishi
                                                                <span className="menu-item-view menu-item-view-298" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="299" className="nav-link-2" href="/tu-lanh-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Casper
                                                                <span className="menu-item-view menu-item-view-299" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="300" className="nav-link-2" href="/tu-lanh">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ lạnh
                                                                <span className="menu-item-view menu-item-view-300" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="674" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Kiểu Tủ Lạnh</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-674" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="675" className="nav-link-2" href="/tu-lanh-side-by-side">
                                                                <i className="nav-link-2-icon"></i>
                                                                Side by side
                                                                <span className="menu-item-view menu-item-view-675" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="677" className="nav-link-2" href="/tu-lanh?f=4-cua">
                                                                <i className="nav-link-2-icon"></i>
                                                                4 cửa
                                                                <span className="menu-item-view menu-item-view-677" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="678" className="nav-link-2" href="/tu-lanh?f=6-cua">
                                                                <i className="nav-link-2-icon"></i>
                                                                6 cửa
                                                                <span className="menu-item-view menu-item-view-678" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="676" className="nav-link-2" href="/tu-lanh?f=mini">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Mini
                                                                <span className="menu-item-view menu-item-view-676" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1113" className="nav-link-2" href="/tu-lanh?f=tu-lanh-bespoke&amp;a=20684">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Bespoke
                                                                <span className="menu-item-view menu-item-view-1113" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="424" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-dong">
                                                        <span>Tủ Đông</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-424" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="1106" className="nav-link-2" href="/tu-dong-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ đông Coex</span>
                                                                <span className="menu-item-view menu-item-view-1106" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="425" className="nav-link-2" href="/tu-dong-sanaky">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông Sanaky
                                                                <span className="menu-item-view menu-item-view-425" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="426" className="nav-link-2" href="/tu-dong-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông LG
                                                                <span className="menu-item-view menu-item-view-426" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="427" className="nav-link-2" href="/tu-dong-kangaroo">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông Kangaroo
                                                                <span className="menu-item-view menu-item-view-427" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="428" className="nav-link-2" href="/tu-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ đông
                                                                <span className="menu-item-view menu-item-view-428" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="429" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-lam-mat">
                                                        <span>Tủ Mát</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-429" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="430" className="nav-link-2" href="/tu-lam-mat-alaska">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Alaska
                                                                <span className="menu-item-view menu-item-view-430" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="432" className="nav-link-2" href="/tu-lam-mat-sanaky">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Sanaky
                                                                <span className="menu-item-view menu-item-view-432" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="433" className="nav-link-2" href="/tu-lam-mat-kangaroo">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Kangaroo
                                                                <span className="menu-item-view menu-item-view-433" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="434" className="nav-link-2" href="/tu-lam-mat">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ mát
                                                                <span className="menu-item-view menu-item-view-434" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="698" className="nav-link-2" href="/chan-de-may-giat?f=tu-lanh&amp;a=11249">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện tủ lạnh
                                                                <span className="menu-item-view menu-item-view-698" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="697" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-ruou">
                                                        <span>Tủ Rượu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-697" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="1105" className="nav-link-2" href="/tu-ruou-roler">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ rượu Roler</span>
                                                                <span className="menu-item-view menu-item-view-1105" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="925" className="nav-link-2" href="/tu-ruou-alaska">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ rượu Alaska
                                                                <span className="menu-item-view menu-item-view-925" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="926" className="nav-link-2" href="/tu-ruou-kadeka">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ rượu Kadeka
                                                                <span className="menu-item-view menu-item-view-926" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/may-git-may-sy-qun-ao_b8027e4e.png" width={21} height={30} alt="Máy giặt, Máy sấy quần áo" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/may-giat">Máy giặt</a>, <a href="/may-say-quan-ao">Máy sấy quần áo</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="273" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-giat">
                                                        <span>Máy Giặt</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-273" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="282" className="nav-link-2" href="/may-giat-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Máy giặt Coex</span>
                                                                <span className="menu-item-view menu-item-view-282" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="274" className="nav-link-2" href="/may-giat-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt LG
                                                                <span className="menu-item-view menu-item-view-274" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="275" className="nav-link-2" href="/may-giat-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Electrolux
                                                                <span className="menu-item-view menu-item-view-275" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="276" className="nav-link-2" href="/may-giat-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Panasonic
                                                                <span className="menu-item-view menu-item-view-276" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="277" className="nav-link-2" href="/may-giat-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Samsung
                                                                <span className="menu-item-view menu-item-view-277" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="278" className="nav-link-2" href="/may-giat-toshiba">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Toshiba
                                                                <span className="menu-item-view menu-item-view-278" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="928" className="nav-link-2" href="/may-giat-hitachi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Hitachi
                                                                <span className="menu-item-view menu-item-view-928" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="279" className="nav-link-2" href="/may-giat-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Sharp
                                                                <span className="menu-item-view menu-item-view-279" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="280" className="nav-link-2" href="/may-giat-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt AQUA
                                                                <span className="menu-item-view menu-item-view-280" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="281" className="nav-link-2" href="/may-giat-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Midea
                                                                <span className="menu-item-view menu-item-view-281" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="285" className="nav-link-2" href="/may-giat-galanz">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Galanz
                                                                <span className="menu-item-view menu-item-view-285" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="414" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-say-quan-ao">
                                                        <span>Máy Sấy Quần Áo</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-414" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="893" className="nav-link-2" href="/may-say-quan-ao-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Máy sấy quần áo Coex</span>
                                                                <span className="menu-item-view menu-item-view-893" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="419" className="nav-link-2" href="/may-say-quan-ao-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Electrolux
                                                                <span className="menu-item-view menu-item-view-419" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="420" className="nav-link-2" href="/may-say-quan-ao-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo LG
                                                                <span className="menu-item-view menu-item-view-420" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="418" className="nav-link-2" href="/may-say-quan-ao-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Samsung
                                                                <span className="menu-item-view menu-item-view-418" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1112" className="nav-link-2" href="/may-say-quan-ao-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Panasonic
                                                                <span className="menu-item-view menu-item-view-1112" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="422" className="nav-link-2" href="/may-say-quan-ao-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo AQUA
                                                                <span className="menu-item-view menu-item-view-422" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="417" className="nav-link-2" href="/may-say-quan-ao-galanz">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Galanz
                                                                <span className="menu-item-view menu-item-view-417" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="423" className="nav-link-2" href="/may-say-quan-ao">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả máy sấy
                                                                <span className="menu-item-view menu-item-view-423" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="896" className="nav-link-2" href="/chan-de-may-giat?f=may-giat" >                                                          <i className="nav-link-2-icon"></i>
                                                                Phụ kiện Máy giặt, máy sấy
                                                                <span className="menu-item-view menu-item-view-896" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1091" className="nav-link-2" href="/tu-giat-say">
                                                                <i className="nav-link-2-icon"></i>
                                                                <strong>TỦ GIẶT SẤY</strong>
                                                                <span className="menu-item-view menu-item-view-1091" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="747" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Công Nghệ Sấy</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-747" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="746" className="nav-link-2" href="/may-say-quan-ao?f=say-thong-hoi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy thông hơi
                                                                <span className="menu-item-view menu-item-view-746" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="748" className="nav-link-2" href="/may-say-quan-ao?f=say-ngung-tu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy ngưng tụ
                                                                <span className="menu-item-view menu-item-view-748" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="749" className="nav-link-2" href="/may-say-quan-ao?f=say-bom-nhiet">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy bơm nhiệt
                                                                <span className="menu-item-view menu-item-view-749" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="750" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Khối Lượng Sấy</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-750" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="751" className="nav-link-2" href="/may-say-quan-ao?f=tren-7-nguoi-tren-10-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Trên 10KG
                                                                <span className="menu-item-view menu-item-view-751" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="753" className="nav-link-2" href="/may-say-quan-ao?f=tu-3-5-nguoi-8-9-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Từ 8 - 10KG
                                                                <span className="menu-item-view menu-item-view-753" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="752" className="nav-link-2" href="/may-say-quan-ao?f=tu-2-3-nguoi-duoi-8-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Dưới 8KG
                                                                <span className="menu-item-view menu-item-view-752" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/dieu-hoa-nhiet-do_cbd1f97a.png" width={21} height={30} alt="Điều hòa nhiệt độ" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/dieu-hoa-nhiet-do"><span style={{ color: '#ff0000' }}>Điều hòa nhiệt độ</span></a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="258" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Thương Hiệu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-258" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="243" className="nav-link-2" href="/dieu-hoa-nhiet-do-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Panasonic
                                                                <span className="menu-item-view menu-item-view-243" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="244" className="nav-link-2" href="/dieu-hoa-nhiet-do-daikin">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Daikin
                                                                <span className="menu-item-view menu-item-view-244" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="245" className="nav-link-2" href="/dieu-hoa-nhiet-do-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Casper
                                                                <span className="menu-item-view menu-item-view-245" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="246" className="nav-link-2" href="/dieu-hoa-nhiet-do-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa LG
                                                                <span className="menu-item-view menu-item-view-246" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="247" className="nav-link-2" href="/dieu-hoa-nhiet-do-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Samsung
                                                                <span className="menu-item-view menu-item-view-247" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="248" className="nav-link-2" href="/dieu-hoa-nhiet-do-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Midea
                                                                <span className="menu-item-view menu-item-view-248" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="249" className="nav-link-2" href="/dieu-hoa-nhiet-do-gree">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Gree
                                                                <span className="menu-item-view menu-item-view-249" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="250" className="nav-link-2" href="/dieu-hoa-nhiet-do-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Sharp
                                                                <span className="menu-item-view menu-item-view-250" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="914" className="nav-link-2" href="/dieu-hoa-nhiet-do-funiki">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Funiki
                                                                <span className="menu-item-view menu-item-view-914" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="255" className="nav-link-2" href="/dieu-hoa-nhiet-do-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa AQUA
                                                                <span className="menu-item-view menu-item-view-255" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="406" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Kiểu Điều Hòa</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-406" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="409" className="nav-link-2" href="/dieu-hoa-nhiet-do">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa treo tường
                                                                <span className="menu-item-view menu-item-view-409" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="407" className="nav-link-2" href="/dieu-hoa-tu-dung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa tủ đứng
                                                                <span className="menu-item-view menu-item-view-407" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="408" className="nav-link-2" href="/dieu-hoa-am-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa âm trần
                                                                <span className="menu-item-view menu-item-view-408" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="413" className="nav-link-2" href="/dieu-hoa-di-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa di động
                                                                <span className="menu-item-view menu-item-view-413" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="410" className="nav-link-2" href="/dieu-hoa-ap-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa nối ống gió
                                                                <span className="menu-item-view menu-item-view-410" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="411" className="nav-link-2" href="/dieu-hoa-multi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Multi
                                                                                                                                <span className="menu-item-view menu-item-view-411" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="727" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Điều Hòa</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-727" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="728" className="nav-link-2" href="/dieu-hoa-nhiet-do?e=tra-gop-0">
                                                                <i className="nav-link-2-icon"></i>
                                                                Trả góp 0 - 0.5%
                                                                <span className="menu-item-view menu-item-view-728" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="730" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=%E2%89%A4-9000-btu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 9000BTU
                                                                <span className="menu-item-view menu-item-view-730" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="731" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=%E2%89%A4-12000-btu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 12000BTU
                                                                <span className="menu-item-view menu-item-view-731" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="732" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=1-chieu-inverter&amp;a=9975">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 1 chiều Inverter
                                                                <span className="menu-item-view menu-item-view-732" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="733" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=2-chieu-inverter">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 2 chiều Inverter
                                                                <span className="menu-item-view menu-item-view-733" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="734" className="nav-link-2" href="/dieu-hoa-nhiet-do?p=duoi-7-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa dưới 7 triệu
                                                                <span className="menu-item-view menu-item-view-734" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="897" className="nav-link-2" href="/tin-tuc/ho-tro-mua-hang/bang-bao-gia-vat-tu-cong-lap-dat-dieu-hoa.htm">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện điều hòa
                                                                <span className="menu-item-view menu-item-view-897" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/span-stylecolor0033ffimportantqut-mat-cac-loispan_25b68c61.png" width={21} height={30} alt="Quạt mát, Quạt điều hòa" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/quat-cac-loai">Quạt mát</a>, <a href="/quat-dieu-hoa">Quạt điều hòa</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="935" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quat-cac-loai">
                                                        <span>Quạt mát</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-935" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="941" className="nav-link-2" href="/quat-cay">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt cây
                                                                <span className="menu-item-view menu-item-view-941" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="944" className="nav-link-2" href="/quat-ban">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt bàn, quạt lửng
                                                                <span className="menu-item-view menu-item-view-944" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="974" className="nav-link-2" href="/quat-hop-quat-tan">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tản
                                                                <span className="menu-item-view menu-item-view-974" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="975" className="nav-link-2" href="/quat-thap">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tháp
                                                                <span className="menu-item-view menu-item-view-975" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="979" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quat">
                                                        <span>Quạt khác</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-979" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="978" className="nav-link-2" href="/quat-dieu-hoa">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Quạt điều hòa</span>
                                                                <span className="menu-item-view menu-item-view-978" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1107" className="nav-link-2" href="/dieu-hoa-di-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa di động
                                                                <span className="menu-item-view menu-item-view-1107" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="936" className="nav-link-2" href="/quat-sac">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tích điện
                                                                <span className="menu-item-view menu-item-view-936" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="976" className="nav-link-2" href="/quat-cong-nghiep">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt công nghiệp
                                                                <span className="menu-item-view menu-item-view-976" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="942" className="nav-link-2" href="/quat-treo-tuong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt treo tường
                                                                <span className="menu-item-view menu-item-view-942" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="943" className="nav-link-2" href="/quat-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt trần
                                                                <span className="menu-item-view menu-item-view-943" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="977" className="nav-link-2" href="/quat-thong-gio-hut">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt thông gió
                                                                <span className="menu-item-view menu-item-view-977" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1110" className="nav-link-2" href="/quat-dao-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt đảo trần
                                                                <span className="menu-item-view menu-item-view-1110" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1109" className="nav-link-2" href="/quat-quy-quat-san">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt sàn
                                                                <span className="menu-item-view menu-item-view-1109" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="934" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quatsuoi">
                                                        <span>Sưởi các loại</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-934" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="971" className="nav-link-2" href="/quatsuoi?f=suoi-nha-tam">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi nhà tắm
                                                                <span className="menu-item-view menu-item-view-971" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="972" className="nav-link-2" href="/quatsuoi?f=suoi-halogen&amp;a=5588">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Halogen
                                                                <span className="menu-item-view menu-item-view-972" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1079" className="nav-link-2" href="/quatsuoi?f=suoi-gom-suoi-thap">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Gốm, Sưởi tháp
                                                                <span className="menu-item-view menu-item-view-1079" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1080" className="nav-link-2" href="/quatsuoi?f=suoi-hong-ngoai&amp;a=5593">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi hồng ngoại
                                                                <span className="menu-item-view menu-item-view-1080" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1092" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=may-suoi-dau&amp;a=5590">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sưởi dầu
                                                                <span className="menu-item-view menu-item-view-1092" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1093" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-2-chieu&amp;a=5592">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi 2 chiều
                                                                <span className="menu-item-view menu-item-view-1093" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1094" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-carbon&amp;a=5594">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Carbon
                                                                <span className="menu-item-view menu-item-view-1094" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1095" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-doi-luu&amp;a=5595">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Đối Lưu
                                                                <span className="menu-item-view menu-item-view-1095" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1096" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=chan-suoi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Chăn sưởi
                                                                <span className="menu-item-view menu-item-view-1096" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/span-stylecolor07aff2importantmay-xay-ep-pha-chspan_9f5f9ff0.png" width={21} height={30} alt="Máy xay, ép, pha chế" priority />
                                                <span className="nav-link-text">
                                                    <span>Máy xay, ép, pha chế</span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="980" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-ep-vat-trai-cay">
                                                        <span>Máy ép hoa quả</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-980" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="981" className="nav-link-2" href="/may-ep-vat-trai-cay?f=may-ep-nhanh">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy ép nhanh
                                                                <span className="menu-item-view menu-item-view-981" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="982" className="nav-link-2" href="/may-ep-vat-trai-cay?f=may-ep-cham">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy ép chậm
                                                                <span className="menu-item-view menu-item-view-982" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="983" className="nav-link-2" href="/may-vat-cam">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy vắt cam
                                                                <span className="menu-item-view menu-item-view-983" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="984" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-xay-sinh-to">
                                                        <span>Máy xay sinh tố</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-984" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="305" className="nav-link-2" href="/may-xay-sinh-to">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay sinh tố
                                                                <span className="menu-item-view menu-item-view-305" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="985" className="nav-link-2" href="/may-xay-sinh-to?f=xay-da-nang">
                                                                <i className="nav-link-2-icon"></i>
                                                                May xay đa năng
                                                                <span className="menu-item-view menu-item-view-985" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="986" className="nav-link-2" href="/may-xay-sinh-to?f=xay-sinh-to-cam-tay">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay cầm tay
                                                                <span className="menu-item-view menu-item-view-986" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="987" className="nav-link-2" href="/may-xay-nau">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy làm sữa hạt
                                                                <span className="menu-item-view menu-item-view-987" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="988" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/xay-ep-pha-che">
                                                        <span>Máy xay</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-988" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="989" className="nav-link-2" href="/may-pha-ca-phe">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy pha café
                                                                <span className="menu-item-view menu-item-view-989" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="990" className="nav-link-2" href="/may-danh-trung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy đánh trứng
                                                                <span className="menu-item-view menu-item-view-990" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="991" className="nav-link-2" href="/may-xay-thit">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay thịt
                                                                <span className="menu-item-view menu-item-view-991" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown">
                                                <Image  src="https://cdn.mediamart.vn/images/menu/tivi-loa---am-thanh_51500480.png" alt="Tivi, Loa Âm Thanh" width={21} height={30} priority  />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/tivi">Tivi</a>, <a href="/loa-sale">Loa - Dàn Âm Thanh</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="260" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Thương Hiệu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-260" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="692" className="nav-link-2" href="/tivi-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tivi Coex</span>
                                                                <span className="menu-item-view menu-item-view-692" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="262" className="nav-link-2" href="/tivi-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Samsung
                                                                <span className="menu-item-view menu-item-view-262" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="261" className="nav-link-2" href="/tivi-sony">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Sony
                                                                <span className="menu-item-view menu-item-view-261" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="263" className="nav-link-2" href="/tivi-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi LG
                                                                <span className="menu-item-view menu-item-view-263" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="265" className="nav-link-2" href="/tivi-tcl">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi TCL
                                                                <span className="menu-item-view menu-item-view-265" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="264" className="nav-link-2" href="/tivi-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Sharp
                                                                <span className="menu-item-view menu-item-view-264" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="270" className="nav-link-2" href="/tivi-skyworth">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Skyworth
                                                                <span className="menu-item-view menu-item-view-270" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="754" className="nav-link-2" href="https://mediamart.vn/tivi-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Casper
                                                                <span className="menu-item-view menu-item-view-754" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="616" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Chọn TV</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-616" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="617" className="nav-link-2" href="/tivi?e=model-moi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Model Mới
                                                                <span className="menu-item-view menu-item-view-617" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="618" className="nav-link-2" href="/tivi?p=duoi-5-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi dưới 5 Triệu
                                                                <span className="menu-item-view menu-item-view-618" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="619" className="nav-link-2" href="/tivi?p=tu-5-7-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 5 - 7 Triệu
                                                                <span className="menu-item-view menu-item-view-619" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="620" className="nav-link-2" href="/tivi?p=tu-7-10-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 7 - 10 Triệu
                                                                <span className="menu-item-view menu-item-view-620" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="621" className="nav-link-2" href="/tivi?p=tu-10-15-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 10 - 15 Triệu
                                                                <span className="menu-item-view menu-item-view-621" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="622" className="nav-link-2" href="/tivi?p=tu-15-20-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 15 - 20 Triệu
                                                                <span className="menu-item-view menu-item-view-622" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="623" className="nav-link-2" href="/tivi?p=tren-20-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi trên 20 Triệu
                                                                <span className="menu-item-view menu-item-view-623" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="895" className="nav-link-2" href="/phu-kien-dien-tu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện điện tử
                                                                <span className="menu-item-view menu-item-view-895" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="606" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Loại Tivi</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-606" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="607" className="nav-link-2" href="/tivi?f=tv-8k">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi 8K
                                                                <span className="menu-item-view menu-item-view-607" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="608" className="nav-link-2" href="/tivi?f=tv-4k">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi 4K
                                                                <span className="menu-item-view menu-item-view-608" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="609" className="nav-link-2" href="/tivi-samsung?f=qled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Samsung QLED TV
                                                                <span className="menu-item-view menu-item-view-609" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="610" className="nav-link-2" href="/tivi-sony?f=oled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sony OLED TV
                                                                <span className="menu-item-view menu-item-view-610" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="611" className="nav-link-2" href="/tivi-lg?f=oled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                LG OLED TV
                                                                <span className="menu-item-view menu-item-view-611" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="612" className="nav-link-2" href="/tivi?f=android-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Android TV
                                                                <span className="menu-item-view menu-item-view-612" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="613" className="nav-link-2" href="/tivi?f=smart-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Smart TV
                                                                <span className="menu-item-view menu-item-view-613" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/t-lnh-t-dong-t-mat_eb9bda60.png" width={21} height={30} alt="Tủ lạnh,Tủ đông,Tủ mát" priority />
                                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/tu-lanh">Tủ lạnh</a>, <a href="/tu-dong">Tủ đông</a>, <a href="/tu-lam-mat">Tủ mát</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="287" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-lanh">
                                                        <span>Tủ Lạnh</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-287" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="296" className="nav-link-2" href="/tu-lanh-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ lạnh Coex</span>
                                                                <span className="menu-item-view menu-item-view-296" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="288" className="nav-link-2" href="/tu-lanh-hitachi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Hitachi
                                                                <span className="menu-item-view menu-item-view-288" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="289" className="nav-link-2" href="/tu-lanh-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Panasonic
                                                                <span className="menu-item-view menu-item-view-289" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="290" className="nav-link-2" href="/tu-lanh-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Electrolux
                                                                <span className="menu-item-view menu-item-view-290" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="291" className="nav-link-2" href="/tu-lanh-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh LG
                                                                <span className="menu-item-view menu-item-view-291" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="293" className="nav-link-2" href="/tu-lanh-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Sharp
                                                                <span className="menu-item-view menu-item-view-293" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="292" className="nav-link-2" href="/tu-lanh-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Samsung
                                                                <span className="menu-item-view menu-item-view-292" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="294" className="nav-link-2" href="/tu-lanh-toshiba">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Toshiba
                                                                <span className="menu-item-view menu-item-view-294" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="295" className="nav-link-2" href="/tu-lanh-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh AQUA
                                                                <span className="menu-item-view menu-item-view-295" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="297" className="nav-link-2" href="/tu-lanh-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Midea
                                                                <span className="menu-item-view menu-item-view-297" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="298" className="nav-link-2" href="/tu-lanh-mitsubishi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Mitsubishi
                                                                <span className="menu-item-view menu-item-view-298" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="299" className="nav-link-2" href="/tu-lanh-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Casper
                                                                <span className="menu-item-view menu-item-view-299" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="300" className="nav-link-2" href="/tu-lanh">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ lạnh
                                                                <span className="menu-item-view menu-item-view-300" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="674" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Kiểu Tủ Lạnh</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-674" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="675" className="nav-link-2" href="/tu-lanh-side-by-side">
                                                                <i className="nav-link-2-icon"></i>
                                                                Side by side
                                                                <span className="menu-item-view menu-item-view-675" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="677" className="nav-link-2" href="/tu-lanh?f=4-cua">
                                                                <i className="nav-link-2-icon"></i>
                                                                4 cửa
                                                                <span className="menu-item-view menu-item-view-677" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="678" className="nav-link-2" href="/tu-lanh?f=6-cua">
                                                                <i className="nav-link-2-icon"></i>
                                                                6 cửa
                                                                <span className="menu-item-view menu-item-view-678" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="676" className="nav-link-2" href="/tu-lanh?f=mini">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Mini
                                                                <span className="menu-item-view menu-item-view-676" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1113" className="nav-link-2" href="/tu-lanh?f=tu-lanh-bespoke&amp;a=20684">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Bespoke
                                                                <span className="menu-item-view menu-item-view-1113" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="424" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-dong">
                                                        <span>Tủ Đông</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-424" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="1106" className="nav-link-2" href="/tu-dong-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ đông Coex</span>
                                                                <span className="menu-item-view menu-item-view-1106" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="425" className="nav-link-2" href="/tu-dong-sanaky">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông Sanaky
                                                                <span className="menu-item-view menu-item-view-425" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="426" className="nav-link-2" href="/tu-dong-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông LG
                                                                <span className="menu-item-view menu-item-view-426" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="427" className="nav-link-2" href="/tu-dong-kangaroo">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông Kangaroo
                                                                <span className="menu-item-view menu-item-view-427" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="428" className="nav-link-2" href="/tu-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ đông
                                                                <span className="menu-item-view menu-item-view-428" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="429" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-lam-mat">
                                                        <span>Tủ Mát</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-429" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="430" className="nav-link-2" href="/tu-lam-mat-alaska">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Alaska
                                                                <span className="menu-item-view menu-item-view-430" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="432" className="nav-link-2" href="/tu-lam-mat-sanaky">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Sanaky
                                                                <span className="menu-item-view menu-item-view-432" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="433" className="nav-link-2" href="/tu-lam-mat-kangaroo">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Kangaroo
                                                                <span className="menu-item-view menu-item-view-433" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="434" className="nav-link-2" href="/tu-lam-mat">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ mát
                                                                <span className="menu-item-view menu-item-view-434" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="698" className="nav-link-2" href="/chan-de-may-giat?f=tu-lanh&amp;a=11249">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện tủ lạnh
                                                                <span className="menu-item-view menu-item-view-698" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="697" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-ruou">
                                                        <span>Tủ Rượu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-697" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="1105" className="nav-link-2" href="/tu-ruou-roler">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ rượu Roler</span>
                                                                <span className="menu-item-view menu-item-view-1105" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="925" className="nav-link-2" href="/tu-ruou-alaska">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ rượu Alaska
                                                                <span className="menu-item-view menu-item-view-925" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="926" className="nav-link-2" href="/tu-ruou-kadeka">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ rượu Kadeka
                                                                <span className="menu-item-view menu-item-view-926" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/may-git-may-sy-qun-ao_b8027e4e.png" width={21} height={30} alt="Máy giặt, Máy sấy quần áo" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/may-giat">Máy giặt</a>, <a href="/may-say-quan-ao">Máy sấy quần áo</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="273" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-giat">
                                                        <span>Máy Giặt</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-273" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="282" className="nav-link-2" href="/may-giat-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Máy giặt Coex</span>
                                                                <span className="menu-item-view menu-item-view-282" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="274" className="nav-link-2" href="/may-giat-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt LG
                                                                <span className="menu-item-view menu-item-view-274" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="275" className="nav-link-2" href="/may-giat-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Electrolux
                                                                <span className="menu-item-view menu-item-view-275" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="276" className="nav-link-2" href="/may-giat-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Panasonic
                                                                <span className="menu-item-view menu-item-view-276" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="277" className="nav-link-2" href="/may-giat-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Samsung
                                                                <span className="menu-item-view menu-item-view-277" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="278" className="nav-link-2" href="/may-giat-toshiba">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Toshiba
                                                                <span className="menu-item-view menu-item-view-278" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="928" className="nav-link-2" href="/may-giat-hitachi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Hitachi
                                                                <span className="menu-item-view menu-item-view-928" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="279" className="nav-link-2" href="/may-giat-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Sharp
                                                                <span className="menu-item-view menu-item-view-279" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="280" className="nav-link-2" href="/may-giat-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt AQUA
                                                                <span className="menu-item-view menu-item-view-280" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="281" className="nav-link-2" href="/may-giat-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Midea
                                                                <span className="menu-item-view menu-item-view-281" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="285" className="nav-link-2" href="/may-giat-galanz">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Galanz
                                                                <span className="menu-item-view menu-item-view-285" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="414" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-say-quan-ao">
                                                        <span>Máy Sấy Quần Áo</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-414" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="893" className="nav-link-2" href="/may-say-quan-ao-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Máy sấy quần áo Coex</span>
                                                                <span className="menu-item-view menu-item-view-893" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="419" className="nav-link-2" href="/may-say-quan-ao-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Electrolux
                                                                <span className="menu-item-view menu-item-view-419" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="420" className="nav-link-2" href="/may-say-quan-ao-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo LG
                                                                <span className="menu-item-view menu-item-view-420" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="418" className="nav-link-2" href="/may-say-quan-ao-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Samsung
                                                                <span className="menu-item-view menu-item-view-418" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1112" className="nav-link-2" href="/may-say-quan-ao-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Panasonic
                                                                <span className="menu-item-view menu-item-view-1112" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="422" className="nav-link-2" href="/may-say-quan-ao-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo AQUA
                                                                <span className="menu-item-view menu-item-view-422" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="417" className="nav-link-2" href="/may-say-quan-ao-galanz">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Galanz
                                                                <span className="menu-item-view menu-item-view-417" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="423" className="nav-link-2" href="/may-say-quan-ao">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả máy sấy
                                                                <span className="menu-item-view menu-item-view-423" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="896" className="nav-link-2" href="/chan-de-may-giat?f=may-giat" >                                                          <i className="nav-link-2-icon"></i>
                                                                Phụ kiện Máy giặt, máy sấy
                                                                <span className="menu-item-view menu-item-view-896" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1091" className="nav-link-2" href="/tu-giat-say">
                                                                <i className="nav-link-2-icon"></i>
                                                                <strong>TỦ GIẶT SẤY</strong>
                                                                <span className="menu-item-view menu-item-view-1091" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="747" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Công Nghệ Sấy</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-747" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="746" className="nav-link-2" href="/may-say-quan-ao?f=say-thong-hoi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy thông hơi
                                                                <span className="menu-item-view menu-item-view-746" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="748" className="nav-link-2" href="/may-say-quan-ao?f=say-ngung-tu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy ngưng tụ
                                                                <span className="menu-item-view menu-item-view-748" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="749" className="nav-link-2" href="/may-say-quan-ao?f=say-bom-nhiet">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy bơm nhiệt
                                                                <span className="menu-item-view menu-item-view-749" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="750" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Khối Lượng Sấy</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-750" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="751" className="nav-link-2" href="/may-say-quan-ao?f=tren-7-nguoi-tren-10-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Trên 10KG
                                                                <span className="menu-item-view menu-item-view-751" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="753" className="nav-link-2" href="/may-say-quan-ao?f=tu-3-5-nguoi-8-9-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Từ 8 - 10KG
                                                                <span className="menu-item-view menu-item-view-753" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="752" className="nav-link-2" href="/may-say-quan-ao?f=tu-2-3-nguoi-duoi-8-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Dưới 8KG
                                                                <span className="menu-item-view menu-item-view-752" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/dieu-hoa-nhiet-do_cbd1f97a.png" width={21} height={30} alt="Điều hòa nhiệt độ" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/dieu-hoa-nhiet-do"><span style={{ color: '#ff0000' }}>Điều hòa nhiệt độ</span></a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="258" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Thương Hiệu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-258" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="243" className="nav-link-2" href="/dieu-hoa-nhiet-do-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Panasonic
                                                                <span className="menu-item-view menu-item-view-243" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="244" className="nav-link-2" href="/dieu-hoa-nhiet-do-daikin">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Daikin
                                                                <span className="menu-item-view menu-item-view-244" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="245" className="nav-link-2" href="/dieu-hoa-nhiet-do-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Casper
                                                                <span className="menu-item-view menu-item-view-245" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="246" className="nav-link-2" href="/dieu-hoa-nhiet-do-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa LG
                                                                <span className="menu-item-view menu-item-view-246" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="247" className="nav-link-2" href="/dieu-hoa-nhiet-do-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Samsung
                                                                <span className="menu-item-view menu-item-view-247" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="248" className="nav-link-2" href="/dieu-hoa-nhiet-do-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Midea
                                                                <span className="menu-item-view menu-item-view-248" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="249" className="nav-link-2" href="/dieu-hoa-nhiet-do-gree">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Gree
                                                                <span className="menu-item-view menu-item-view-249" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="250" className="nav-link-2" href="/dieu-hoa-nhiet-do-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Sharp
                                                                <span className="menu-item-view menu-item-view-250" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="914" className="nav-link-2" href="/dieu-hoa-nhiet-do-funiki">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Funiki
                                                                <span className="menu-item-view menu-item-view-914" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="255" className="nav-link-2" href="/dieu-hoa-nhiet-do-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa AQUA
                                                                <span className="menu-item-view menu-item-view-255" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="406" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Kiểu Điều Hòa</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-406" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="409" className="nav-link-2" href="/dieu-hoa-nhiet-do">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa treo tường
                                                                <span className="menu-item-view menu-item-view-409" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="407" className="nav-link-2" href="/dieu-hoa-tu-dung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa tủ đứng
                                                                <span className="menu-item-view menu-item-view-407" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="408" className="nav-link-2" href="/dieu-hoa-am-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa âm trần
                                                                <span className="menu-item-view menu-item-view-408" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="413" className="nav-link-2" href="/dieu-hoa-di-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa di động
                                                                <span className="menu-item-view menu-item-view-413" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="410" className="nav-link-2" href="/dieu-hoa-ap-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa nối ống gió
                                                                <span className="menu-item-view menu-item-view-410" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="411" className="nav-link-2" href="/dieu-hoa-multi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Multi
                                                                                                                                <span className="menu-item-view menu-item-view-411" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="727" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Điều Hòa</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-727" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="728" className="nav-link-2" href="/dieu-hoa-nhiet-do?e=tra-gop-0">
                                                                <i className="nav-link-2-icon"></i>
                                                                Trả góp 0 - 0.5%
                                                                <span className="menu-item-view menu-item-view-728" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="730" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=%E2%89%A4-9000-btu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 9000BTU
                                                                <span className="menu-item-view menu-item-view-730" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="731" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=%E2%89%A4-12000-btu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 12000BTU
                                                                <span className="menu-item-view menu-item-view-731" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="732" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=1-chieu-inverter&amp;a=9975">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 1 chiều Inverter
                                                                <span className="menu-item-view menu-item-view-732" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="733" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=2-chieu-inverter">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 2 chiều Inverter
                                                                <span className="menu-item-view menu-item-view-733" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="734" className="nav-link-2" href="/dieu-hoa-nhiet-do?p=duoi-7-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa dưới 7 triệu
                                                                <span className="menu-item-view menu-item-view-734" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="897" className="nav-link-2" href="/tin-tuc/ho-tro-mua-hang/bang-bao-gia-vat-tu-cong-lap-dat-dieu-hoa.htm">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện điều hòa
                                                                <span className="menu-item-view menu-item-view-897" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/span-stylecolor0033ffimportantqut-mat-cac-loispan_25b68c61.png" width={21} height={30} alt="Quạt mát, Quạt điều hòa" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/quat-cac-loai">Quạt mát</a>, <a href="/quat-dieu-hoa">Quạt điều hòa</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="935" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quat-cac-loai">
                                                        <span>Quạt mát</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-935" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="941" className="nav-link-2" href="/quat-cay">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt cây
                                                                <span className="menu-item-view menu-item-view-941" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="944" className="nav-link-2" href="/quat-ban">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt bàn, quạt lửng
                                                                <span className="menu-item-view menu-item-view-944" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="974" className="nav-link-2" href="/quat-hop-quat-tan">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tản
                                                                <span className="menu-item-view menu-item-view-974" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="975" className="nav-link-2" href="/quat-thap">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tháp
                                                                <span className="menu-item-view menu-item-view-975" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="979" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quat">
                                                        <span>Quạt khác</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-979" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="978" className="nav-link-2" href="/quat-dieu-hoa">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Quạt điều hòa</span>
                                                                <span className="menu-item-view menu-item-view-978" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1107" className="nav-link-2" href="/dieu-hoa-di-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa di động
                                                                <span className="menu-item-view menu-item-view-1107" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="936" className="nav-link-2" href="/quat-sac">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tích điện
                                                                <span className="menu-item-view menu-item-view-936" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="976" className="nav-link-2" href="/quat-cong-nghiep">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt công nghiệp
                                                                <span className="menu-item-view menu-item-view-976" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="942" className="nav-link-2" href="/quat-treo-tuong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt treo tường
                                                                <span className="menu-item-view menu-item-view-942" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="943" className="nav-link-2" href="/quat-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt trần
                                                                <span className="menu-item-view menu-item-view-943" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="977" className="nav-link-2" href="/quat-thong-gio-hut">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt thông gió
                                                                <span className="menu-item-view menu-item-view-977" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1110" className="nav-link-2" href="/quat-dao-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt đảo trần
                                                                <span className="menu-item-view menu-item-view-1110" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1109" className="nav-link-2" href="/quat-quy-quat-san">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt sàn
                                                                <span className="menu-item-view menu-item-view-1109" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="934" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quatsuoi">
                                                        <span>Sưởi các loại</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-934" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="971" className="nav-link-2" href="/quatsuoi?f=suoi-nha-tam">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi nhà tắm
                                                                <span className="menu-item-view menu-item-view-971" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="972" className="nav-link-2" href="/quatsuoi?f=suoi-halogen&amp;a=5588">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Halogen
                                                                <span className="menu-item-view menu-item-view-972" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1079" className="nav-link-2" href="/quatsuoi?f=suoi-gom-suoi-thap">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Gốm, Sưởi tháp
                                                                <span className="menu-item-view menu-item-view-1079" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1080" className="nav-link-2" href="/quatsuoi?f=suoi-hong-ngoai&amp;a=5593">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi hồng ngoại
                                                                <span className="menu-item-view menu-item-view-1080" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1092" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=may-suoi-dau&amp;a=5590">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sưởi dầu
                                                                <span className="menu-item-view menu-item-view-1092" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1093" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-2-chieu&amp;a=5592">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi 2 chiều
                                                                <span className="menu-item-view menu-item-view-1093" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1094" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-carbon&amp;a=5594">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Carbon
                                                                <span className="menu-item-view menu-item-view-1094" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1095" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-doi-luu&amp;a=5595">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Đối Lưu
                                                                <span className="menu-item-view menu-item-view-1095" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1096" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=chan-suoi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Chăn sưởi
                                                                <span className="menu-item-view menu-item-view-1096" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/span-stylecolor07aff2importantmay-xay-ep-pha-chspan_9f5f9ff0.png" width={21} height={30} alt="Máy xay, ép, pha chế" priority />
                                                <span className="nav-link-text">
                                                    <span>Máy xay, ép, pha chế</span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="980" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-ep-vat-trai-cay">
                                                        <span>Máy ép hoa quả</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-980" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="981" className="nav-link-2" href="/may-ep-vat-trai-cay?f=may-ep-nhanh">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy ép nhanh
                                                                <span className="menu-item-view menu-item-view-981" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="982" className="nav-link-2" href="/may-ep-vat-trai-cay?f=may-ep-cham">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy ép chậm
                                                                <span className="menu-item-view menu-item-view-982" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="983" className="nav-link-2" href="/may-vat-cam">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy vắt cam
                                                                <span className="menu-item-view menu-item-view-983" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="984" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-xay-sinh-to">
                                                        <span>Máy xay sinh tố</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-984" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="305" className="nav-link-2" href="/may-xay-sinh-to">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay sinh tố
                                                                <span className="menu-item-view menu-item-view-305" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="985" className="nav-link-2" href="/may-xay-sinh-to?f=xay-da-nang">
                                                                <i className="nav-link-2-icon"></i>
                                                                May xay đa năng
                                                                <span className="menu-item-view menu-item-view-985" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="986" className="nav-link-2" href="/may-xay-sinh-to?f=xay-sinh-to-cam-tay">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay cầm tay
                                                                <span className="menu-item-view menu-item-view-986" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="987" className="nav-link-2" href="/may-xay-nau">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy làm sữa hạt
                                                                <span className="menu-item-view menu-item-view-987" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="988" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/xay-ep-pha-che">
                                                        <span>Máy xay</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-988" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="989" className="nav-link-2" href="/may-pha-ca-phe">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy pha café
                                                                <span className="menu-item-view menu-item-view-989" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="990" className="nav-link-2" href="/may-danh-trung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy đánh trứng
                                                                <span className="menu-item-view menu-item-view-990" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="991" className="nav-link-2" href="/may-xay-thit">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay thịt
                                                                <span className="menu-item-view menu-item-view-991" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown">
                                                <Image  src="https://cdn.mediamart.vn/images/menu/tivi-loa---am-thanh_51500480.png" alt="Tivi, Loa Âm Thanh" width={21} height={30} priority  />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/tivi">Tivi</a>, <a href="/loa-sale">Loa - Dàn Âm Thanh</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="260" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Thương Hiệu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-260" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="692" className="nav-link-2" href="/tivi-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tivi Coex</span>
                                                                <span className="menu-item-view menu-item-view-692" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="262" className="nav-link-2" href="/tivi-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Samsung
                                                                <span className="menu-item-view menu-item-view-262" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="261" className="nav-link-2" href="/tivi-sony">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Sony
                                                                <span className="menu-item-view menu-item-view-261" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="263" className="nav-link-2" href="/tivi-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi LG
                                                                <span className="menu-item-view menu-item-view-263" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="265" className="nav-link-2" href="/tivi-tcl">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi TCL
                                                                <span className="menu-item-view menu-item-view-265" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="264" className="nav-link-2" href="/tivi-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Sharp
                                                                <span className="menu-item-view menu-item-view-264" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="270" className="nav-link-2" href="/tivi-skyworth">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Skyworth
                                                                <span className="menu-item-view menu-item-view-270" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="754" className="nav-link-2" href="https://mediamart.vn/tivi-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi Casper
                                                                <span className="menu-item-view menu-item-view-754" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="616" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Chọn TV</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-616" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="617" className="nav-link-2" href="/tivi?e=model-moi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Model Mới
                                                                <span className="menu-item-view menu-item-view-617" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="618" className="nav-link-2" href="/tivi?p=duoi-5-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi dưới 5 Triệu
                                                                <span className="menu-item-view menu-item-view-618" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="619" className="nav-link-2" href="/tivi?p=tu-5-7-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 5 - 7 Triệu
                                                                <span className="menu-item-view menu-item-view-619" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="620" className="nav-link-2" href="/tivi?p=tu-7-10-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 7 - 10 Triệu
                                                                <span className="menu-item-view menu-item-view-620" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="621" className="nav-link-2" href="/tivi?p=tu-10-15-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 10 - 15 Triệu
                                                                <span className="menu-item-view menu-item-view-621" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="622" className="nav-link-2" href="/tivi?p=tu-15-20-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi từ 15 - 20 Triệu
                                                                <span className="menu-item-view menu-item-view-622" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="623" className="nav-link-2" href="/tivi?p=tren-20-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi trên 20 Triệu
                                                                <span className="menu-item-view menu-item-view-623" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="895" className="nav-link-2" href="/phu-kien-dien-tu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện điện tử
                                                                <span className="menu-item-view menu-item-view-895" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="606" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tivi">
                                                        <span>Loại Tivi</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-606" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="607" className="nav-link-2" href="/tivi?f=tv-8k">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi 8K
                                                                <span className="menu-item-view menu-item-view-607" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="608" className="nav-link-2" href="/tivi?f=tv-4k">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tivi 4K
                                                                <span className="menu-item-view menu-item-view-608" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="609" className="nav-link-2" href="/tivi-samsung?f=qled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Samsung QLED TV
                                                                <span className="menu-item-view menu-item-view-609" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="610" className="nav-link-2" href="/tivi-sony?f=oled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sony OLED TV
                                                                <span className="menu-item-view menu-item-view-610" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="611" className="nav-link-2" href="/tivi-lg?f=oled-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                LG OLED TV
                                                                <span className="menu-item-view menu-item-view-611" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="612" className="nav-link-2" href="/tivi?f=android-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Android TV
                                                                <span className="menu-item-view menu-item-view-612" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="613" className="nav-link-2" href="/tivi?f=smart-tv">
                                                                <i className="nav-link-2-icon"></i>
                                                                Smart TV
                                                                <span className="menu-item-view menu-item-view-613" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/t-lnh-t-dong-t-mat_eb9bda60.png" width={21} height={30} alt="Tủ lạnh,Tủ đông,Tủ mát" priority />
                                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/tu-lanh">Tủ lạnh</a>, <a href="/tu-dong">Tủ đông</a>, <a href="/tu-lam-mat">Tủ mát</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="287" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-lanh">
                                                        <span>Tủ Lạnh</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-287" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="296" className="nav-link-2" href="/tu-lanh-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ lạnh Coex</span>
                                                                <span className="menu-item-view menu-item-view-296" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="288" className="nav-link-2" href="/tu-lanh-hitachi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Hitachi
                                                                <span className="menu-item-view menu-item-view-288" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="289" className="nav-link-2" href="/tu-lanh-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Panasonic
                                                                <span className="menu-item-view menu-item-view-289" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="290" className="nav-link-2" href="/tu-lanh-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Electrolux
                                                                <span className="menu-item-view menu-item-view-290" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="291" className="nav-link-2" href="/tu-lanh-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh LG
                                                                <span className="menu-item-view menu-item-view-291" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="293" className="nav-link-2" href="/tu-lanh-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Sharp
                                                                <span className="menu-item-view menu-item-view-293" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="292" className="nav-link-2" href="/tu-lanh-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Samsung
                                                                <span className="menu-item-view menu-item-view-292" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="294" className="nav-link-2" href="/tu-lanh-toshiba">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Toshiba
                                                                <span className="menu-item-view menu-item-view-294" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="295" className="nav-link-2" href="/tu-lanh-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh AQUA
                                                                <span className="menu-item-view menu-item-view-295" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="297" className="nav-link-2" href="/tu-lanh-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Midea
                                                                <span className="menu-item-view menu-item-view-297" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="298" className="nav-link-2" href="/tu-lanh-mitsubishi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Mitsubishi
                                                                <span className="menu-item-view menu-item-view-298" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="299" className="nav-link-2" href="/tu-lanh-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Casper
                                                                <span className="menu-item-view menu-item-view-299" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="300" className="nav-link-2" href="/tu-lanh">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ lạnh
                                                                <span className="menu-item-view menu-item-view-300" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="674" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Kiểu Tủ Lạnh</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-674" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="675" className="nav-link-2" href="/tu-lanh-side-by-side">
                                                                <i className="nav-link-2-icon"></i>
                                                                Side by side
                                                                <span className="menu-item-view menu-item-view-675" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="677" className="nav-link-2" href="/tu-lanh?f=4-cua">
                                                                <i className="nav-link-2-icon"></i>
                                                                4 cửa
                                                                <span className="menu-item-view menu-item-view-677" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="678" className="nav-link-2" href="/tu-lanh?f=6-cua">
                                                                <i className="nav-link-2-icon"></i>
                                                                6 cửa
                                                                <span className="menu-item-view menu-item-view-678" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="676" className="nav-link-2" href="/tu-lanh?f=mini">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Mini
                                                                <span className="menu-item-view menu-item-view-676" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1113" className="nav-link-2" href="/tu-lanh?f=tu-lanh-bespoke&amp;a=20684">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ lạnh Bespoke
                                                                <span className="menu-item-view menu-item-view-1113" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="424" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-dong">
                                                        <span>Tủ Đông</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-424" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="1106" className="nav-link-2" href="/tu-dong-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ đông Coex</span>
                                                                <span className="menu-item-view menu-item-view-1106" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="425" className="nav-link-2" href="/tu-dong-sanaky">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông Sanaky
                                                                <span className="menu-item-view menu-item-view-425" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="426" className="nav-link-2" href="/tu-dong-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông LG
                                                                <span className="menu-item-view menu-item-view-426" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="427" className="nav-link-2" href="/tu-dong-kangaroo">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ đông Kangaroo
                                                                <span className="menu-item-view menu-item-view-427" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="428" className="nav-link-2" href="/tu-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ đông
                                                                <span className="menu-item-view menu-item-view-428" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="429" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-lam-mat">
                                                        <span>Tủ Mát</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-429" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="430" className="nav-link-2" href="/tu-lam-mat-alaska">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Alaska
                                                                <span className="menu-item-view menu-item-view-430" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="432" className="nav-link-2" href="/tu-lam-mat-sanaky">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Sanaky
                                                                <span className="menu-item-view menu-item-view-432" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="433" className="nav-link-2" href="/tu-lam-mat-kangaroo">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ mát Kangaroo
                                                                <span className="menu-item-view menu-item-view-433" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="434" className="nav-link-2" href="/tu-lam-mat">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả tủ mát
                                                                <span className="menu-item-view menu-item-view-434" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="698" className="nav-link-2" href="/chan-de-may-giat?f=tu-lanh&amp;a=11249">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện tủ lạnh
                                                                <span className="menu-item-view menu-item-view-698" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="697" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/tu-ruou">
                                                        <span>Tủ Rượu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-697" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="1105" className="nav-link-2" href="/tu-ruou-roler">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Tủ rượu Roler</span>
                                                                <span className="menu-item-view menu-item-view-1105" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="925" className="nav-link-2" href="/tu-ruou-alaska">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ rượu Alaska
                                                                <span className="menu-item-view menu-item-view-925" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="926" className="nav-link-2" href="/tu-ruou-kadeka">
                                                                <i className="nav-link-2-icon"></i>
                                                                Tủ rượu Kadeka
                                                                <span className="menu-item-view menu-item-view-926" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/may-git-may-sy-qun-ao_b8027e4e.png" width={21} height={30} alt="Máy giặt, Máy sấy quần áo" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/may-giat">Máy giặt</a>, <a href="/may-say-quan-ao">Máy sấy quần áo</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="273" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-giat">
                                                        <span>Máy Giặt</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-273" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="282" className="nav-link-2" href="/may-giat-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Máy giặt Coex</span>
                                                                <span className="menu-item-view menu-item-view-282" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="274" className="nav-link-2" href="/may-giat-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt LG
                                                                <span className="menu-item-view menu-item-view-274" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="275" className="nav-link-2" href="/may-giat-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Electrolux
                                                                <span className="menu-item-view menu-item-view-275" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="276" className="nav-link-2" href="/may-giat-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Panasonic
                                                                <span className="menu-item-view menu-item-view-276" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="277" className="nav-link-2" href="/may-giat-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Samsung
                                                                <span className="menu-item-view menu-item-view-277" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="278" className="nav-link-2" href="/may-giat-toshiba">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Toshiba
                                                                <span className="menu-item-view menu-item-view-278" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="928" className="nav-link-2" href="/may-giat-hitachi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Hitachi
                                                                <span className="menu-item-view menu-item-view-928" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="279" className="nav-link-2" href="/may-giat-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Sharp
                                                                <span className="menu-item-view menu-item-view-279" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="280" className="nav-link-2" href="/may-giat-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt AQUA
                                                                <span className="menu-item-view menu-item-view-280" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="281" className="nav-link-2" href="/may-giat-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Midea
                                                                <span className="menu-item-view menu-item-view-281" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="285" className="nav-link-2" href="/may-giat-galanz">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy giặt Galanz
                                                                <span className="menu-item-view menu-item-view-285" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="414" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-say-quan-ao">
                                                        <span>Máy Sấy Quần Áo</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-414" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="893" className="nav-link-2" href="/may-say-quan-ao-coex">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Máy sấy quần áo Coex</span>
                                                                <span className="menu-item-view menu-item-view-893" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="419" className="nav-link-2" href="/may-say-quan-ao-electrolux">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Electrolux
                                                                <span className="menu-item-view menu-item-view-419" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="420" className="nav-link-2" href="/may-say-quan-ao-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo LG
                                                                <span className="menu-item-view menu-item-view-420" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="418" className="nav-link-2" href="/may-say-quan-ao-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Samsung
                                                                <span className="menu-item-view menu-item-view-418" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1112" className="nav-link-2" href="/may-say-quan-ao-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Panasonic
                                                                <span className="menu-item-view menu-item-view-1112" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="422" className="nav-link-2" href="/may-say-quan-ao-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo AQUA
                                                                <span className="menu-item-view menu-item-view-422" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="417" className="nav-link-2" href="/may-say-quan-ao-galanz">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sấy quần áo Galanz
                                                                <span className="menu-item-view menu-item-view-417" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="423" className="nav-link-2" href="/may-say-quan-ao">
                                                                <i className="nav-link-2-icon"></i>
                                                                Xem tất cả máy sấy
                                                                <span className="menu-item-view menu-item-view-423" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="896" className="nav-link-2" href="/chan-de-may-giat?f=may-giat" >                                                          <i className="nav-link-2-icon"></i>
                                                                Phụ kiện Máy giặt, máy sấy
                                                                <span className="menu-item-view menu-item-view-896" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1091" className="nav-link-2" href="/tu-giat-say">
                                                                <i className="nav-link-2-icon"></i>
                                                                <strong>TỦ GIẶT SẤY</strong>
                                                                <span className="menu-item-view menu-item-view-1091" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="747" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Công Nghệ Sấy</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-747" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="746" className="nav-link-2" href="/may-say-quan-ao?f=say-thong-hoi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy thông hơi
                                                                <span className="menu-item-view menu-item-view-746" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="748" className="nav-link-2" href="/may-say-quan-ao?f=say-ngung-tu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy ngưng tụ
                                                                <span className="menu-item-view menu-item-view-748" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="749" className="nav-link-2" href="/may-say-quan-ao?f=say-bom-nhiet">
                                                                <i className="nav-link-2-icon"></i>
                                                                Công nghệ sấy bơm nhiệt
                                                                <span className="menu-item-view menu-item-view-749" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="750" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <span>Khối Lượng Sấy</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-750" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="751" className="nav-link-2" href="/may-say-quan-ao?f=tren-7-nguoi-tren-10-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Trên 10KG
                                                                <span className="menu-item-view menu-item-view-751" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="753" className="nav-link-2" href="/may-say-quan-ao?f=tu-3-5-nguoi-8-9-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Từ 8 - 10KG
                                                                <span className="menu-item-view menu-item-view-753" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="752" className="nav-link-2" href="/may-say-quan-ao?f=tu-2-3-nguoi-duoi-8-kg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Dưới 8KG
                                                                <span className="menu-item-view menu-item-view-752" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/dieu-hoa-nhiet-do_cbd1f97a.png" width={21} height={30} alt="Điều hòa nhiệt độ" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/dieu-hoa-nhiet-do"><span style={{ color: '#ff0000' }}>Điều hòa nhiệt độ</span></a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="258" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Thương Hiệu</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-258" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="243" className="nav-link-2" href="/dieu-hoa-nhiet-do-panasonic">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Panasonic
                                                                <span className="menu-item-view menu-item-view-243" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="244" className="nav-link-2" href="/dieu-hoa-nhiet-do-daikin">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Daikin
                                                                <span className="menu-item-view menu-item-view-244" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="245" className="nav-link-2" href="/dieu-hoa-nhiet-do-casper">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Casper
                                                                <span className="menu-item-view menu-item-view-245" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="246" className="nav-link-2" href="/dieu-hoa-nhiet-do-lg">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa LG
                                                                <span className="menu-item-view menu-item-view-246" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="247" className="nav-link-2" href="/dieu-hoa-nhiet-do-samsung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Samsung
                                                                <span className="menu-item-view menu-item-view-247" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="248" className="nav-link-2" href="/dieu-hoa-nhiet-do-midea">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Midea
                                                                <span className="menu-item-view menu-item-view-248" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="249" className="nav-link-2" href="/dieu-hoa-nhiet-do-gree">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Gree
                                                                <span className="menu-item-view menu-item-view-249" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="250" className="nav-link-2" href="/dieu-hoa-nhiet-do-sharp">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Sharp
                                                                <span className="menu-item-view menu-item-view-250" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="914" className="nav-link-2" href="/dieu-hoa-nhiet-do-funiki">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Funiki
                                                                <span className="menu-item-view menu-item-view-914" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="255" className="nav-link-2" href="/dieu-hoa-nhiet-do-aqua">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa AQUA
                                                                <span className="menu-item-view menu-item-view-255" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="406" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Kiểu Điều Hòa</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-406" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="409" className="nav-link-2" href="/dieu-hoa-nhiet-do">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa treo tường
                                                                <span className="menu-item-view menu-item-view-409" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="407" className="nav-link-2" href="/dieu-hoa-tu-dung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa tủ đứng
                                                                <span className="menu-item-view menu-item-view-407" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="408" className="nav-link-2" href="/dieu-hoa-am-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa âm trần
                                                                <span className="menu-item-view menu-item-view-408" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="413" className="nav-link-2" href="/dieu-hoa-di-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa di động
                                                                <span className="menu-item-view menu-item-view-413" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="410" className="nav-link-2" href="/dieu-hoa-ap-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa nối ống gió
                                                                <span className="menu-item-view menu-item-view-410" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="411" className="nav-link-2" href="/dieu-hoa-multi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa Multi
                                                                                                                                <span className="menu-item-view menu-item-view-411" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="727" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/dieu-hoa-nhiet-do">
                                                        <span>Điều Hòa</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-727" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="728" className="nav-link-2" href="/dieu-hoa-nhiet-do?e=tra-gop-0">
                                                                <i className="nav-link-2-icon"></i>
                                                                Trả góp 0 - 0.5%
                                                                <span className="menu-item-view menu-item-view-728" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="730" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=%E2%89%A4-9000-btu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 9000BTU
                                                                <span className="menu-item-view menu-item-view-730" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="731" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=%E2%89%A4-12000-btu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 12000BTU
                                                                <span className="menu-item-view menu-item-view-731" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="732" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=1-chieu-inverter&amp;a=9975">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 1 chiều Inverter
                                                                <span className="menu-item-view menu-item-view-732" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="733" className="nav-link-2" href="/dieu-hoa-nhiet-do?f=2-chieu-inverter">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa 2 chiều Inverter
                                                                <span className="menu-item-view menu-item-view-733" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="734" className="nav-link-2" href="/dieu-hoa-nhiet-do?p=duoi-7-trieu">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa dưới 7 triệu
                                                                <span className="menu-item-view menu-item-view-734" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="897" className="nav-link-2" href="/tin-tuc/ho-tro-mua-hang/bang-bao-gia-vat-tu-cong-lap-dat-dieu-hoa.htm">
                                                                <i className="nav-link-2-icon"></i>
                                                                Phụ kiện điều hòa
                                                                <span className="menu-item-view menu-item-view-897" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/span-stylecolor0033ffimportantqut-mat-cac-loispan_25b68c61.png" width={21} height={30} alt="Quạt mát, Quạt điều hòa" priority />
                                                <span className="nav-link-text">
                                                    <span>
                                                        <a href="/quat-cac-loai">Quạt mát</a>, <a href="/quat-dieu-hoa">Quạt điều hòa</a>
                                                    </span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="935" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quat-cac-loai">
                                                        <span>Quạt mát</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-935" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="941" className="nav-link-2" href="/quat-cay">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt cây
                                                                <span className="menu-item-view menu-item-view-941" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="944" className="nav-link-2" href="/quat-ban">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt bàn, quạt lửng
                                                                <span className="menu-item-view menu-item-view-944" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="974" className="nav-link-2" href="/quat-hop-quat-tan">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tản
                                                                <span className="menu-item-view menu-item-view-974" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="975" className="nav-link-2" href="/quat-thap">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tháp
                                                                <span className="menu-item-view menu-item-view-975" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="979" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quat">
                                                        <span>Quạt khác</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-979" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="978" className="nav-link-2" href="/quat-dieu-hoa">
                                                                <i className="nav-link-2-icon"></i>
                                                                <span style={{ color: '#ff0000' }}>Quạt điều hòa</span>
                                                                <span className="menu-item-view menu-item-view-978" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1107" className="nav-link-2" href="/dieu-hoa-di-dong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Điều hòa di động
                                                                <span className="menu-item-view menu-item-view-1107" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="936" className="nav-link-2" href="/quat-sac">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt tích điện
                                                                <span className="menu-item-view menu-item-view-936" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="976" className="nav-link-2" href="/quat-cong-nghiep">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt công nghiệp
                                                                <span className="menu-item-view menu-item-view-976" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="942" className="nav-link-2" href="/quat-treo-tuong">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt treo tường
                                                                <span className="menu-item-view menu-item-view-942" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="943" className="nav-link-2" href="/quat-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt trần
                                                                <span className="menu-item-view menu-item-view-943" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="977" className="nav-link-2" href="/quat-thong-gio-hut">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt thông gió
                                                                <span className="menu-item-view menu-item-view-977" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1110" className="nav-link-2" href="/quat-dao-tran">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt đảo trần
                                                                <span className="menu-item-view menu-item-view-1110" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1109" className="nav-link-2" href="/quat-quy-quat-san">
                                                                <i className="nav-link-2-icon"></i>
                                                                Quạt sàn
                                                                <span className="menu-item-view menu-item-view-1109" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="934" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/quatsuoi">
                                                        <span>Sưởi các loại</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-934" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="971" className="nav-link-2" href="/quatsuoi?f=suoi-nha-tam">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi nhà tắm
                                                                <span className="menu-item-view menu-item-view-971" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="972" className="nav-link-2" href="/quatsuoi?f=suoi-halogen&amp;a=5588">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Halogen
                                                                <span className="menu-item-view menu-item-view-972" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1079" className="nav-link-2" href="/quatsuoi?f=suoi-gom-suoi-thap">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Gốm, Sưởi tháp
                                                                <span className="menu-item-view menu-item-view-1079" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1080" className="nav-link-2" href="/quatsuoi?f=suoi-hong-ngoai&amp;a=5593">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi hồng ngoại
                                                                <span className="menu-item-view menu-item-view-1080" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1092" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=may-suoi-dau&amp;a=5590">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy sưởi dầu
                                                                <span className="menu-item-view menu-item-view-1092" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1093" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-2-chieu&amp;a=5592">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi 2 chiều
                                                                <span className="menu-item-view menu-item-view-1093" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1094" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-carbon&amp;a=5594">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Carbon
                                                                <span className="menu-item-view menu-item-view-1094" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1095" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=suoi-doi-luu&amp;a=5595">
                                                                <i className="nav-link-2-icon"></i>
                                                                Sưởi Đối Lưu
                                                                <span className="menu-item-view menu-item-view-1095" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="1096" className="nav-link-2" href="https://mediamart.vn/quatsuoi?f=chan-suoi">
                                                                <i className="nav-link-2-icon"></i>
                                                                Chăn sưởi
                                                                <span className="menu-item-view menu-item-view-1096" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle" data-toggle="dropdown" >
                                                <Image src="https://cdn.mediamart.vn/images/menu/span-stylecolor07aff2importantmay-xay-ep-pha-chspan_9f5f9ff0.png" width={21} height={30} alt="Máy xay, ép, pha chế" priority />
                                                <span className="nav-link-text">
                                                    <span>Máy xay, ép, pha chế</span>
                                                </span>
                                            </span>
                                            <ul className="dropdown-menu dropdown-menu-1">
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="980" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-ep-vat-trai-cay">
                                                        <span>Máy ép hoa quả</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-980" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="981" className="nav-link-2" href="/may-ep-vat-trai-cay?f=may-ep-nhanh">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy ép nhanh
                                                                <span className="menu-item-view menu-item-view-981" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="982" className="nav-link-2" href="/may-ep-vat-trai-cay?f=may-ep-cham">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy ép chậm
                                                                <span className="menu-item-view menu-item-view-982" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="983" className="nav-link-2" href="/may-vat-cam">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy vắt cam
                                                                <span className="menu-item-view menu-item-view-983" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="984" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/may-xay-sinh-to">
                                                        <span>Máy xay sinh tố</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-984" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="305" className="nav-link-2" href="/may-xay-sinh-to">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay sinh tố
                                                                <span className="menu-item-view menu-item-view-305" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="985" className="nav-link-2" href="/may-xay-sinh-to?f=xay-da-nang">
                                                                <i className="nav-link-2-icon"></i>
                                                                May xay đa năng
                                                                <span className="menu-item-view menu-item-view-985" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="986" className="nav-link-2" href="/may-xay-sinh-to?f=xay-sinh-to-cam-tay">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay cầm tay
                                                                <span className="menu-item-view menu-item-view-986" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="987" className="nav-link-2" href="/may-xay-nau">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy làm sữa hạt
                                                                <span className="menu-item-view menu-item-view-987" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="v-menu-item nav-item-1 dropdown-submenu">
                                                    <a data-id="988" className="nav-link-1 dropdown-toggle" data-toggle="dropdown" href="/xay-ep-pha-che">
                                                        <span>Máy xay</span>
                                                        <i></i>
                                                        <span className="menu-item-view menu-item-view-988" style={{ display: 'none' }}></span>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-2">
                                                        <li className="v-menu-item">
                                                            <a data-id="989" className="nav-link-2" href="/may-pha-ca-phe">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy pha café
                                                                <span className="menu-item-view menu-item-view-989" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="990" className="nav-link-2" href="/may-danh-trung">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy đánh trứng
                                                                <span className="menu-item-view menu-item-view-990" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                        <li className="v-menu-item">
                                                            <a data-id="991" className="nav-link-2" href="/may-xay-thit">
                                                                <i className="nav-link-2-icon"></i>
                                                                Máy xay thịt
                                                                <span className="menu-item-view menu-item-view-991" style={{ display: 'none' }}></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-0">
                        <div className="box-nav-promotion">
                            <ul className="list-unstyled">
                                <li className="v-menu-item">
                                    <a data-id={779} href="/tivi" title="Tivi">
                                        <span>Tivi</span>
                                        <span className="menu-item-view menu-item-view-779" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                                <li className="v-menu-item">
                                    <a data-id={780} href="/tu-lanh" title="Tủ lạnh">
                                        <span>Tủ lạnh</span>
                                        <span className="menu-item-view menu-item-view-780" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                                <li className="v-menu-item">
                                    <a data-id={783} href="/may-giat" title="Máy giặt">
                                        <span><span style={{ color: '#ff0000' }}>Máy giặt</span></span>
                                        <span className="menu-item-view menu-item-view-783" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                                <li className="v-menu-item">
                                    <a data-id={899} href="https://mediamart.vn/binh-tam-nong-lanh" title="Bình nóng lạnh">
                                        <span>Bình nóng lạnh</span>
                                        <span className="menu-item-view menu-item-view-899" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                                <li className="v-menu-item">
                                    <a data-id={787} href="https://mediamart.vn/apple-iphone-16-series" title="Apple iPhone 16 Series">
                                        <span><span style={{ color: '#ff0000' }}>iPhone 16 Series</span></span>
                                        <span className="menu-item-view menu-item-view-787" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                                <li className="v-menu-item">
                                    <a data-id={784} href="/laptop" title="Laptop">
                                        <span>Laptop</span>
                                        <span className="menu-item-view menu-item-view-784" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                                <li className="v-menu-item">
                                    <a data-id={791} href="/tin-khuyen-mai" title="Tin tức">
                                        <span><span style={{ color: '#ff0000' }}>Tin tức</span></span>
                                        <span className="menu-item-view menu-item-view-791" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                                <li className="v-menu-item">
                                    <a data-id={788} href="/20-10-sale" title="Siêu Sale từ 100K">
                                        <span><span style={{ color: '#ff0000' }}>⚡️20.10 Deal Hời từ 99K</span></span>
                                        <span className="menu-item-view menu-item-view-788" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                                <li className="v-menu-item">
                                    <a data-id={790} href="/quat-dieu-hoa" title="Quạt Điều hòa">
                                        <span><span style={{ color: '#ff0000' }}>Quạt Điều hòa</span></span>
                                        <span className="menu-item-view menu-item-view-790" style={{ display: 'none' }}></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;
