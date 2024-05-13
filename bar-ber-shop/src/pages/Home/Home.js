/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Home.css";
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Navbar from "../../componets/header/navbar";

const Home = () => {
  return (
    <div style={{ marginTop: "" }}>
      <Navbar />
      <OwlCarousel className="owl-theme" nav responsive={{ 0: { items: 1 } }}>
        <div className="item">
          <img className="img" src={"/img/BB-CoverFB-1.jpg"} />
          <div className="caption">
            <a href="#" class="button2 button-primary">
              Nút Chính
            </a>
            <a href="#" class="button2 button-secondary">
              Nút Phụ
            </a>
          </div>
        </div>
      </OwlCarousel>

      <div className="container">
        <div class="p1">
          <p>
            <b>
              <strong class="text-secondary">HairSalon Chính</strong> - sự kết
              hợp giữa tên của hai anh em ruột thịt,{" "}
              <strong>Mr. Lê Xuân Chính và Mr. Nguyễn Hoàng Thái.</strong>
            </b>
            <br />
            Có truyền thống làm nghề lâu đời, cha của hai anh là một người lão
            luyện trong nghề đã hơn 40 năm, nhưng đam mê của cha vẫn chưa bao
            giờ dừng lại, dù tuổi đã cao, nhưng cha vẫn thầm lặng đứng dưới góc
            me che bóng râm phủ ngang đầu, chiếc kéo vẫn trên tay và môi cha vẫn
            luôn mỉm cười với công việc hằng ngày của mình...
          </p>
        </div>
      </div>
      <div className={"bg-slection"}>
        <div className={"container"}>
          <div className="slection">
            <div> </div>
            <div className="text">
              <span>
                Theo dõi kênh Vũ Trí Barber Shop để biết các mẹo chải chuốt,
                video giáo dục, đơn đặt hàng trước khi ra mắt sản phẩm và bất cứ
                điều gì và mọi thứ sẽ giúp bạn tự tin chải chuốt.
              </span>
            </div>
            <div className="button">
              <p class="button1">
                <Link to={"https://www.facebook.com/hairchinhsalon"}>
                  LOOKBOOK
                  <span1 style={{ fontSize: "35px" }}> 2024</span1>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-sivice">
        <div className="container">
          <div class="text1">
            <span class="uppercase">
              <span className="sevice">service</span>{" "}
              <span className="dv"> | dịch vụ</span>
            </span>

            <h2 class="calali">
              <span>bẢNG GIÁ BARBER SHOP &nbsp;Tết</span>
            </h2>
          </div>
        </div>
        <div className="bangia">
          <img src="/img/bangia.jpg" />
        </div>
      </div>

      <div className="container-pomade">
        <div className={"container"}>
          <div className="pomade">
            <div>
              <h1>pomade</h1>
              <h2>barber shop anh sơn</h2>
            </div>
            <div className="pomade-nut">
              <div className="pomade-button">
                <p>
                  <Link to={""}>Tất cả sản phẩm</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pomade-cart">
          <div className="pomade-img">
            <div className="pomade-wax">
              <img src="/img/3-1-400x400.png" alt="pomade wax" />
              <div className="icon-container">
                <IoBagAddOutline className="bag-icon" />
              </div>
            </div>
            <span>
              <Link to="">pomade gốc dầu</Link>
            </span>
          </div>

          <div className="pomade-img">
            <div className="pomade-wax">
              <img src="/img/2-1-400x400.png" alt="pomade wax" />
              <div className="icon-container">
                <IoBagAddOutline className="bag-icon" />
              </div>
            </div>
            <span>
              <Link to="">pomade gốc nước</Link>
            </span>
          </div>
          <div className="pomade-img">
            <div className="pomade-wax">
              <img src="/img/1-2-400x400.png" alt="pomade wax" />
              <div className="icon-container">
                <IoBagAddOutline className="bag-icon" />
              </div>
            </div>
            <span>
              <Link to="">clay wax</Link>
            </span>
          </div>
        </div>
      </div>

      <div className="container-acdemy">
        <div className="container">
          <div className="container-grid">
            <div className="content">
              <h2>ACADEMY BARBERSHOP</h2>

              <span className="conten-b">ĐÀO TẠO CẮT TÓC NAM</span>

              <p>
                Khóa dạy cắt tóc nam tốt nhất thành phố Hồ Chí Minh VŨ TRÍ
                ACADEMY Ngoài chuỗi hệ thống cửa hàng cắt tóc nam, Barbershop Vũ
                Trí còn phát triển thêm mảng đào tạo thợ chuyên nghiệp về cắt
                tóc nam lấy tên làVũ Trí Academy dưới sự giảng dạy của thầy Tuấn
                Anh Barber Khóa đào tạo cơ bản và nâng cao kéo dài 6 tháng. Cam
                kết ra nghề 100% Học viên được học cắt tóc giả trên đầu manơcanh
                và mỗi 2 tuần 1 lần học viên được cắt tóc thật cho trẻ em, trại
                mồ côi, trường tiểu học,… Học viên ở xa có thể ở lại kí túc xá
                của Barbershop Vũ Trí…
              </p>
              <div className="content-more">
                <Link to="https://barbershopvutri.com/dao-tao-cat-toc-nam/">
                  XEM THÊM
                </Link>
              </div>
            </div>
            <div className="video">
              <div class="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/4YARITuivfs?si=Cd4V105R_JBGSnsi"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <img src="/img/327420449_550990863750873_2606551206527194003_n.jpg" />
      </div>

      <div className="container">
        <div className="container-member">
          <div>
            <h1>MEMBER VU TRI</h1>
            <h2>Ưu Đãi Dành Cho Thành Viên Vũ Trí</h2>
          </div>
          <div className="btn-5">
            <div className="btn-member">
              <p>Xem tất cả</p>
            </div>
          </div>
        </div>
        <div className="container-grid">
          <div className="thanhvien">
            <h3>thẻ thành viên</h3>
            <img
              src={"/img/The-thanh-vien-cat-toc-barber.png"}
              style={{ width: "100%" }}
            />
          </div>
          <div className="thanhvien">
            <h3>glod member</h3>
            <img
              src={"/img/thanh-vien-vang-cat-toc-vu-tri-barber.png"}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className={"container"}>
        <div className="social">
          <div>
            <h6>đồng hành cùng người nổi tiếng</h6>
            <h2>barber shop anh sơn</h2>
          </div>
          <div className="btn">
            <div className="btn-social">
              <p>Xem tất cả</p>
            </div>
          </div>
        </div>
        <div className="olw">
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            margin={8}
            responsive={{
              0: {
                items: 2,
              },
              768: {
                items: 3,
              },
              992: {
                items: 4,
              },
            }}
          >
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
            <div>
              <img className="img" src={"/img/1.jpg"} />
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="address">
        <div>
          <h1>hệ thống chi nhánh</h1>
        </div>
        <p>
          🚗 Salon Tóc Vũ Trí 2: 42 Lê Lợi, Phường 4, Quận Bình Thạnh, Tp Hồ Chí
          Minh.
        </p>
        <hr />
        <p>
          🛵 Barber Vũ Trí 3: 128 Đinh Tiên Hoàng, Phường Đa Kao, Quận 1, Tp Hồ
          Chí Minh.
        </p>
        <hr />
        <p>
          🚲 Barber Shop Vũ Trí 4: 77 Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh,
          Quận 1, Tp Hồ Chí Minh.
        </p>
        <hr />
        <p>
          🚗 Salon Nam Vũ Trí 5: 153 Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1,
          Tp Hồ Chí Minh.
        </p>
        <hr />
        <p>
          🛵 Barber Vũ Trí 6: 210 Võ Thị Sáu, Phường 7, Quận 3, Tp Hồ Chí Minh.
        </p>
        <hr />
        <p>
          🚲 Barber Shop Vũ Trí 7: 28 Hoàng Sa, Phường Đa Kao, Quận 1, Tp Hồ Chí
          Minh.
        </p>
        <hr />
        <p>
          🚗 Salon Tóc Vũ Trí 8: 91 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận
          1, Tp Hồ Chí Minh.
        </p>
        <hr />
        <p>
          🚲 Barber Shop Vũ Trí 7: 28 Hoàng Sa, Phường Đa Kao, Quận 1, Tp Hồ Chí
          Minh.
        </p>
        <hr />
        <p>
          🚗 Salon Tóc Vũ Trí 8: 91 Nguyễn Thái Học, Phường Cầu Ông Lãnh, Quận
          1, Tp Hồ Chí Minh.
        </p>
        <hr />
        <p>
          🛵 Barber Vũ Trí 9: 55 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, Tp Hồ
          Chí Minh.
        </p>
        <hr />
        <p style={{ padding: "15px 0" }}>Holline:0967100552</p>
      </div>
    </div>
  );
};

export default Home;
