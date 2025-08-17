import styles from './Projects.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Project() {
    return (
        <>
            <div className="row my-5"id='project'>
                <div className={`d-flex justify-content-center mb-5`}>
                            <h2 className={`${styles.aboutme}`} >
                              <i className="fas fa-laptop-code me-2 text-success"></i>  DỰ ÁN
                            </h2>
                        </div>

                {/* Hệ chuyển đổi số */}
                <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                    <div className= {`card h-100 d-flex flex-column ${styles.cardProject}`}>
                        <img
                            src="https://i.ibb.co/x8FNFzdV/Screenshot-2025-08-16-123156.png"
                            className="card-img-top"
                            alt="Hệ Chuyển Đổi Số"
                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Hệ Chuyển Đổi Số</h5>
                            <p className="card-text">
                                Ứng dụng chuyển đổi giữa các hệ số (thập phân, nhị phân, bát phân, thập lục phân).
                                <br /> Có nút đảo ngược và sao chép kết quả tiện lợi.
                            </p>
                            <a
                                href="https://nhen05.github.io/convertNumbers/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary mt-auto fw-bold "
                                
                            >
                                <i className="fas fa-arrow-right text-success me-2"></i> Xem chi tiết </a>
                        </div>
                    </div>
                </div>

                {/* Kiểm tra mật khẩu */}
                <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                    <div className= {`card h-100 d-flex flex-column ${styles.cardProject}`}>
                        <img
                            src="https://i.ibb.co/TqhFhvrD/Screenshot-2025-08-16-123314.png"
                            className="card-img-top"
                            alt="Check password"
                             style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Kiểm Tra Mật Khẩu</h5>
                            <p className="card-text">
                                Công cụ đánh giá độ mạnh mật khẩu: yếu, trung bình, mạnh.
                                <br /> Giao diện trực quan, dễ sử dụng.
                            </p>
                            <a
                                href="https://nhen05.github.io/checkpassword/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary fw-bold  mt-auto"
                            >
                                <i className="fas fa-arrow-right text-success me-2 fw-bold "></i> Xem chi tiết</a>
                        </div>
                    </div>
                </div>

                {/* Todo List */}
                <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                    <div className= {`card h-100 d-flex flex-column ${styles.cardProject}`}>
                        <img
                            src="https://i.ibb.co/bj0QMyDS/Screenshot-2025-08-16-123415.png"
                            className="card-img-top"
                            alt="Todo List App"
                             style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Todo List App</h5>
                            <p className="card-text">
                                Ứng dụng quản lý công việc: thêm, sửa, xóa.
                                <br /> Có Dark Mode, lưu dữ liệu bằng Local Storage, dễ dùng trên mọi thiết bị.
                            </p>
                            <a
                                href="https://nhen05.github.io/todoApp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary fw-bold mt-auto"
                            >
                                <i className="fas fa-arrow-right text-success me-2"></i> Xem Dự Án
                                 </a>
                        </div>
                    </div>
                </div>
                 {/* Thương Mại Điện Tử */}
                <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                    <div className= {`card h-100 d-flex flex-column ${styles.cardProject}`}>
                        <img
                            src="https://i.ibb.co/1GngTBkV/Screenshot-2025-08-17-173059.png"
                            className="card-img-top"
                            alt="Todo List App"
                             style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Trang Web Thương Mại Điện Tử </h5>
                            <p className="card-text">
                                Trang web Thương mại điện tử được phát triển theo giao diện cellphone css đăng nhập bằng goole
                                <br />Quản lý sản phẩm , giỏ hàng ,người dùng ,Voucher ,Thương Hiện
                            </p>
                            <a
                                href="https://www.youtube.com/watch?v=BOcFduuyDM0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary fw-bold mt-auto"
                            >
                                <i className="fas fa-arrow-right text-success me-2"></i> Xem Dự Án
                                 </a>
                        </div>
                    </div>
                </div>
                 {/* Web Bán Rau */}
                <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                    <div className= {`card h-100 d-flex flex-column ${styles.cardProject}`}>
                        <img
                            src="https://i.ibb.co/pjzTcYL7/Screenshot-2025-08-17-163721.png"
                            className="card-img-top"
                            alt="Todo List App"
                             style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Website Bán Rau Java Jsp</h5>
                            <p className="card-text">
                               Trang Web Bán Rau Sử Dụng Ngôn Ngữ Java Gọi Api Render Bằng Jsp.
                                <br /> Quản lý sản phẩm, giỏ hàng, thanh toán,Thêm Bài Viết.
                            </p>
                            <a
                                href="https://youtu.be/IQtaYtxy-fU?si=7WFdO3rd9Hpj_F-P"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary fw-bold mt-auto"
                            >
                                <i className="fas fa-arrow-right text-success me-2"></i> Xem Dự Án
                                 </a>
                        </div>
                    </div>
                </div>
                 {/* trang web bán file*/}
                <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
                    <div className= {`card h-100 d-flex flex-column ${styles.cardProject}`}>
                        <img
                            src="https://i.ibb.co/0VyJw6T0/z6896939196512-b6be0fc68ca41c084837c2213e811798.jpg"
                            className="card-img-top"
                            alt="Todo List App"
                             style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Trang Web Bán File Tích hợp Ai</h5>
                            <p className="card-text">
                               Trang Web Bán File Tích Hợp Ai, Sử Dụng Ngôn Ngữ javascipt và php 
                                <br />Tích Hợp Ai Phân Tích Sở Thích người Dùng, Tạo File Theo Sở Thích.
                            </p>
                            <a
                                href="https://www.youtube.com/watch?v=9KGhNUjd3qY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary fw-bold mt-auto"
                            >
                                <i className="fas fa-arrow-right text-success me-2"></i> Xem Dự Án
                                 </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}