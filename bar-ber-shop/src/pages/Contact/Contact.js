import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./Contact.module.css";
import { IoChevronDown } from "react-icons/io5";
import { IoReorderFour } from "react-icons/io5";
export default function Navigation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navLinksRef.current &&
        !navLinksRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle(style.open);
    }
    document.body.classList.toggle("no-scroll");
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const img = document.getElementById('logo_brand')
    if (navbar) {
      if (scrollPosition > 50) {
        navbar.style.height = "80px"; // Adjust navbar height when scrolled
        navbar.style.fontSize = "14px"; // Adjust font size when scrolled
        // navbar.style.backgroundColor="red";
        img.style.height="5rem"
        navbar.style.transition = "0.5s ease-in-out"

      } else {
        // navbar.style.backgroundColor="blue"
        navbar.style.height = "45px"; // Default navbar height
        navbar.style.fontSize = "10px"; // Default font size
        img.style.height="3rem";
        navbar.style.transition = "0.5s ease-in-out"
      }
    }
  }, [scrollPosition]);
  return (
    <>
      <nav id="navbar" className={`${style.nav1}  ${scrollPosition > 50 ? style.scrolled : ""}`}>

        <div className={style.bar}>
          <div className={style.burger} ref={burgerRef} onClick={toggleMenu}>
           <IoReorderFour /> <span>Menu</span> 
          </div>
          <div className={style.logo}>
            <Link to={"/"}>
            <img src="/img/logopnf.png" alt="" id="logo_brand" />
            </Link>
          </div>
          <div className={`${style["nav-links"]} ${isMenuOpen ? style.show : ""}`} ref={navLinksRef} >
            <ul>
              <li>
                <Link to="/">trang chủ</Link>
              </li>
              <li className={style.dropdown1}>
                <Link to="/gioithieu" className={style.dropbtn}>
                  về chúng tôi
                  <IoChevronDown />
                </Link>
                <div className={style["dropdown-content"]}>
                  <div className={style.flex}>
                    <div className={style.font}>
                      <Link href="#">
                        <b> người sáng lập</b>
                      </Link>
                      <Link href="#">đỗ quốc trí</Link>
                      <Link href="#">nguyễn hoàng sơn</Link>
                    </div>
                    <div className={style.border}></div>
                    <div className={style.font}>
                      <Link href="#">
                        {" "}
                        CÂU CHUYỆN VỀ THƯƠNG HIỆU BARBERSHOP VŨ TRÍ
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/page/savoir-faire">Bản giá</Link>
              </li>
              <li>
                <Link to="/page/savoir-faire">sản phẩm</Link>
              </li>
              <li>
                <Link to="/page/savoir-faire">chi nhánh</Link>
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
                <Link to="/page/savoir-faire">đào tạo </Link>
              </li>
              <li>
                <Link to="/page/contact">liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 style={{ margin: "1000px", color: "white" }}>
        xin ccakipadfpkfnsgop
      </h1>
    </>
  );
}
