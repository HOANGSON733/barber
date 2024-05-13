import React, { useState, useEffect } from "react";
import styles from "../../styles/footer.module.css"; // Import your CSS module for styling
// import { IoChevronUpCircle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoChevronUpOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <footer className={styles["footer-wrapper"]}>
        {isVisible && (
          <div className={styles.scrollToTopButton} onClick={scrollToTop}>
            {/* <IoChevronUpCircle /> */}
            <IoChevronUpOutline className={styles.icon0} />
          </div>
        )}
        <div className={styles.media}>
          <Link to='#'><FaFacebookF className={styles.icon1} /></Link>
          <Link to="#"><IoIosMail className={styles.icon2} /></Link>
          <Link to="#"><FaInstagram className={styles.icon3} /></Link>
          <Link to="#"><FaPhoneAlt className={styles.icon4} /></Link>
          <Link to="#"><FaYoutube className={styles.icon5} /></Link>
          
        </div>
        <div className={styles.copy}>Copyright &copy; <b>barbershopanhson.com</b></div>
      </footer>
    </div>
  );
};

export default ScrollToTopButton;
