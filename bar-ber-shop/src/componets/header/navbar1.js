import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar1.css';

const Navbar1 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <nav className={`navbar1 ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img src="/img/logopnf.png" width={74} height={74} alt="" />
            </Link>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to={"/"}>trang chủ</Link>
            </li>
            <li className="dropdown1">
              <Link className="dropbtn">
                về chúng tôi<i className="fa-solid fa-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <div className="flex">
                  {" "}
                  <div className="font">
                    <Link href="#">
                      <b> người sáng lập</b>
                    </Link>
                    <Link href="#">đỗ quốc trí</Link>
                    <Link href="#">nguyễn hoàng sơn</Link>
                  </div>
                  <div className="border"></div>
                  <div className="font">
                    <Link href="#">
                      {' '}
                      CÂU CHUYỆN VỀ THƯƠNG HIỆU BARBERSHOP VŨ TRÍ
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/about">bản giá</Link>
            </li>
            <li>
              <Link to="/about">sản phẩm</Link>
            </li>
            <li>
              <Link to="/about">chi nhánh</Link>
            </li>
            <li className="dropdown1">
              <Link className="dropbtn">
                Tin tức - sự kiện<i className="fa-solid fa-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <div className="flex1">
                  <div className="font">
                    <Link href="#">top các kiểu tóc nam</Link>
                    <Link href="#">chăm sóc tóc và râu</Link>
                    <Link href="#">tin tức mới về tóc nam</Link>
                    <Link href="#">video hướng dẫn tóc</Link>
                    <Link href="#">tattoo hair</Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/contact">đào tạo</Link>
            </li>
            <li>
              <Link to="/about"> liên hệ</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;