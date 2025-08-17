import styles from './Home.module.css'
import { motion } from "framer-motion";
import 'react-circular-progressbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from '../Projects';
import Contact from '../Contact';
export default function Home() {
    return (
        <>
            <div className="container" style={{ marginTop: 200 }}>
                <motion.div
                    className={`row ${styles.section1}`}
                    initial={{ opacity: 0, y: 50 }}          // ban đầu mờ + trượt xuống
                    whileInView={{ opacity: 1, y: 0 }}       // khi hiện trong viewport thì fade in + trượt lên
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}   // chạy 1 lần, khi 30% thẻ vào màn hình
                >
                    <div className={`row ${styles.section1}`} id='about'>
                        <div className={`d-flex justify-content-center mb-5`}>
                            <h2 className={`${styles.aboutme}`} >
                                <i className="fas fa-user me-2 text-primary"></i> VỀ TÔI
                            </h2>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className={`card ${styles.card1}`} style={{ width: "100%", height: "100%" }}>
                                <img src="https://i.ibb.co/Jj6YLFsR/z6444239936346-706bf15a382ce0ae0b3ff13c55d1d7c6.jpg"
                                    className={`img-top ${styles.avatar}`} alt="" />
                                <div className='card-body'>
                                    <h5 className={`card-title text-warning ${styles.animtypewriter} ${styles.line1}`}>
                                        Y NHÊN ADRONG
                                    </h5>
                                    <p className='card-text text-capitalize text-info'>
                                        Full Stack Developer
                                    </p>
                                    <strong className='card-text text-capitalize'>
                                        17/02/2005
                                    </strong>
                                    <p className='card-title fst-italic mt-1'>
                                        124 Hùng Vương Thị Xã Buôn Hồ Đak Lak.
                                    </p>
                                    <a  href='#skill'
                                        type="button"
                                        id={styles.buttonCard}
                                        className="btn btn-warning"
                                    >
                                        <i className="fas fa-info-circle me-2"></i> Tìm Hiểu Thêm
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <div className={`card ${styles.card2}`} style={{ width: '100%', height: '100%' }}>
                                <h1 className={`heading text-center mt-4`}>
                                    <i className="fas fa-graduation-cap me-2 text-info"></i>Giới Thiệu
                                </h1>
                                <div className={`card-body`}>
                                    <p className={`card-text text-capitalize ${styles.description}`}>
                                        <p>
                                            Xin chào! Mình tên là <strong>Y Nhên Adrơng</strong>, bạn cũng có thể gọi mình là
                                            <strong>Nhựt</strong>. Hiện tại mình <strong>20 tuổi</strong>, đang sinh sống và học tập
                                            tại <strong>thành phố Buôn Ma Thuột</strong>.
                                        </p>

                                        <p>
                                            Mình là sinh viên ngành <strong>Công nghệ Thông tin</strong> tại
                                            <strong>Trường Cao đẳng Bách Khoa Tây Nguyên</strong>. Trong quá trình học tập,
                                            mình đã được tiếp cận với nhiều môn học liên quan đến <em>lập trình</em>,
                                            <em>cơ sở dữ liệu</em> và <em>phát triển web</em>.
                                        </p>

                                        <p>
                                            Mình đặc biệt đam mê lĩnh vực <strong>phát triển website</strong>. Đây không chỉ là
                                            nơi mình rèn luyện kỹ năng lập trình, mà còn là nơi để mình
                                            <em>sáng tạo</em> và xây dựng ra những sản phẩm hữu ích có thể mang lại giá trị cho mọi người.
                                            Trong tương lai, mình mong muốn tiếp tục học hỏi và trau dồi thêm kiến thức để trở thành
                                            một <strong>lập trình viên chuyên nghiệp</strong>.
                                        </p>


                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={`row ${styles.section1}`}
                    initial={{ opacity: 0, y: 50 }}          // ban đầu mờ + trượt xuống
                    whileInView={{ opacity: 1, y: 0 }}       // khi hiện trong viewport thì fade in + trượt lên
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >

                    <div className={`row my-5`} id='skill'>
                        <div className={`d-flex justify-content-center mb-5`}>
                            <h2 className={`${styles.aboutme}`} >
                                <i className="fas fa-lightbulb me-2 text-warning"></i> KỸ NĂNG
                            </h2>
                        </div>

                        {/* FRONTEND */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className={`card ${styles.cardSkills}`} style={{ width: '100%' }}>
                                <h4 className={`card-title text-center text-warning ${styles.cardTypeSkill}`}>
                                    FRONT END
                                </h4>
                                <div className='card-body'>
                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-html5 me-2 text-danger"></i> HTML & CSS
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '95%' }}>
                                            95%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-bootstrap me-2 text-primary"></i> BOOTSTRAP
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '70%' }}>
                                            70%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-sass me-2 text-pink"></i> SASS
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '60%' }}>
                                            60%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fas fa-wind me-2 text-cyan"></i> TAILWIND
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '40%' }}>
                                            40%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-js me-2 text-warning"></i> JAVASCRIPT
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '90%' }}>
                                            90%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fas fa-project-diagram me-2 text-success"></i> REDUX
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '90%' }}>
                                            90%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-react me-2 text-info"></i> REACT JS
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '80%' }}>
                                            80%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BACKEND */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className={`card ${styles.cardSkills}`} style={{ width: '100%' }}>
                                <h4 className={`card-title text-center text-warning ${styles.cardTypeSkill}`}>
                                    BACKEND
                                </h4>
                                <div className='card-body'>
                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fas fa-code me-2 text-primary"></i> TYPESCRIPT
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '95%' }}>
                                            95%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-node-js me-2 text-success"></i> NODE JS
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '60%' }}>
                                            60%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-php me-2 text-indigo"></i> PHP
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '100%' }}>
                                            100%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fas fa-database me-2 text-warning"></i> CODEIGNITER 4
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '90%' }}>
                                            90%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-java me-2 text-danger"></i> JAVA
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '70%' }}>
                                            70%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fab fa-laravel me-2 text-danger"></i> LARAVEL
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '40%' }}>
                                            40%
                                        </div>
                                    </div>

                                    <p className='card-text text-capitalize mt-1 fw-bold'>
                                        <i className="fas fa-database me-2 text-primary"></i> MYSQL
                                    </p>
                                    <div className="progress" style={{ height: '18px' }}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '70%' }}>
                                            70%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    className={`row ${styles.section1}`}
                    initial={{ opacity: 0, y: 50 }}          // ban đầu mờ + trượt xuống
                    whileInView={{ opacity: 1, y: 0 }}       // khi hiện trong viewport thì fade in + trượt lên
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className={`row my-5`} id='otherSkills'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className={`card ${styles.cardSkills}`} style={{ width: '100%' }}>
                                <h4 className={`card-title text-center  text-warning ${styles.cardTypeSkill}`}>
                                    <i className="fa-solid fa-lightbulb me-2 text-warning"></i> KỸ NĂNG KHÁC
                                </h4>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>

                                            {/* Ngôn ngữ */}
                                            <strong className='card-text text-capitalize fs-4'>
                                                <i className="fa-solid fa-language me-2 text-primary"></i>
                                                Ngôn Ngữ: Tiếng Anh (A2), Tiếng Việt (Native)
                                            </strong>
                                            <br />

                                            {/* Kỹ năng mềm */}
                                            <h2 className={`my-2  text-warning ${styles.titleSkill}`}>
                                                <i className="fa-solid fa-users me-2 text-success"></i> Kỹ năng mềm (Soft Skills)
                                            </h2>
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-puzzle-piece me-2 text-info"></i>
                                                Khả năng Tự Giải Quyết Vấn Đề (Problem-Solving)
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-book-open me-2 text-secondary"></i>
                                                Tư duy Tự Học & Kiên Nhẫn
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-people-group me-2 text-primary"></i>
                                                Kỹ Năng Làm Việc Nhóm
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-clock me-2 text-warning"></i>
                                                Quản Lý Thời Gian (Time Management)
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-comments me-2 text-success"></i>
                                                Kỹ Năng Giao Tiếp (Communication)
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-bolt me-2 text-danger"></i>
                                                Thích Ứng Nhanh (Adaptability)
                                            </strong><br />

                                            {/* Tools */}
                                            <h2 className={`my-2 text-warning ${styles.titleSkill}`}>
                                                <i className="fa-solid fa-toolbox me-2 text-dark"></i> Công cụ & Tools
                                            </h2>
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-code me-2 text-info"></i> VS Code
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-brands fa-github me-2 text-dark"></i> Git & GitHub (Quản lý mã nguồn)
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-brands fa-linux me-2 text-secondary"></i> WSL & Linux Commands
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-paper-plane me-2 text-warning"></i> Postman (Kiểm thử API)
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-solid fa-pen-ruler me-2 text-primary"></i> Mockup Design (Figma / Moqups)
                                            </strong><br />
                                            <strong className={styles.cardTextOtherSkill}>
                                                <i className="fa-brands fa-microsoft me-2 text-success"></i> Visual Studio
                                            </strong>
                                        </div>

                                        {/* Chứng chỉ */}
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='d-flex justify-content-center'>
                                                <h4 className='fw-bold mb-2  text-warning'>
                                                    <i className="fa-solid fa-certificate me-2 text-warning"></i> CÁC CHỨNG CHỈ
                                                </h4>
                                            </div>
                                            <div className='card my-2' style={{ width: '100%' }}>
                                                <img
                                                    title='Chứng chỉ Ngôn Ngữ javascript Trên F8 Fullstack'
                                                    src="https://i.ibb.co/TxWjHSSM/javascript.jpg"
                                                    alt="JS"
                                                    className="card-img-top"
                                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                                />
                                            </div>
                                            <div className='card my-2' style={{ width: '100%' }}>
                                                <img
                                                    title='Chứng chỉ Wsl linux Trên F8 Fullstack'
                                                    src="https://i.ibb.co/8nFV4TWD/unbutu.jpg"
                                                    alt="Ubuntu"
                                                    className="card-img-top"
                                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    className={`row ${styles.section1}`}
                    initial={{ opacity: 0, y: 50 }}          // ban đầu mờ + trượt xuống
                    whileInView={{ opacity: 1, y: 0 }}       // khi hiện trong viewport thì fade in + trượt lên
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Projects />
                </motion.div>
                <motion.div
                    className={`row ${styles.section1}`}
                    initial={{ opacity: 0, y: 50 }}          // ban đầu mờ + trượt xuống
                    whileInView={{ opacity: 1, y: 0 }}       // khi hiện trong viewport thì fade in + trượt lên
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='row' id='education'>
                        <div className={`d-flex justify-content-center mb-5`}>
                            <h2 className={`${styles.aboutme} `} >
                                <i className="fas fa-graduation-cap me-2 text-info"></i>HỌC VẤN
                            </h2>
                        </div>

                        <div className={`col-lg-6 col-md-12 col-sm-12 `}>
                            <div className={`card ${styles.education}`}>
                                <div className='card-body'>
                                    <h2 className={`my-2 ${styles.titleSkill} text-warning`}>Học Vấn (Education)</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <i className="fas fa-university text-primary me-2"></i>
                                            Trường Cao Đẳng Bách Khoa Tây Nguyên
                                        </li>
                                    </ul>

                                    <h2 className={`my-2 ${styles.titleSkill}  text-warning`}>Các Môn Học Liên Quan</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-1"><i className="fas fa-book text-success me-2"></i> Lập trình web cơ bản: HTML, CSS, JS, Bootstrap</li>
                                        <li className="mb-1"><i className="fas fa-database text-info me-2"></i> Cơ sở dữ liệu</li>
                                        <li className="mb-1"><i className="fas fa-code text-warning me-2"></i> Lập trình web nâng cao với CodeInter 4</li>
                                        <li className="mb-1"><i className="fas fa-project-diagram text-secondary me-2"></i> Cấu trúc dữ liệu & giải thuật</li>
                                        <li className="mb-1"><i className="fas fa-object-group text-danger me-2"></i> Lập trình hướng đối tượng</li>
                                    </ul>

                                    <h2 className={`my-2 ${styles.titleSkill}  text-warning`}>Thành Tích</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-1">
                                            <i className="fas fa-award text-warning me-2"></i> Đạt Danh Hiệu Học Giỏi Năm 1
                                        </li>
                                        <li className="mb-1">
                                            <i className="fas fa-trophy text-danger me-2"></i> Đạt danh hiệu Xuất Sắc Năm 2
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={`col-lg-6 col-md-12 col-sm-12`}>
                            <div className={`card ${styles.education}`}>
                                <div className='card-body'>
                                    <h2 className={`my-2 ${styles.titleSkill} text-warning`}>Dự án cá nhân/Đồ án</h2>
                                    <ul className="list-unstyled">
                                        <li className="mb-1"><i className="fas fa-laptop-code text-primary me-2"></i> Xây dựng trang web bán sách và quản lý sách dùng PHP</li>
                                        <li className="mb-1"><i className="fas fa-desktop text-success me-2"></i> Hệ thống điều khiển máy tính từ xa dùng C# Selenium</li>
                                        <li className="mb-1"><i className="fas fa-globe text-info me-2"></i> Xây dựng trang web học online dùng PHP với PDO</li>
                                        <li className="mb-1"><i className="fas fa-shopping-cart text-warning me-2"></i> Xây dựng trang web thương mại điện tử với CodeInter 4, tích hợp Google Login và VNPAY</li>
                                        <li className="mb-1"><i className="fas fa-robot text-secondary me-2"></i> Xây dựng trang web bán file tích hợp AI để phân tích sở thích người dùng (HTML, CSS, JS, API, PHP)</li>
                                        <li className="mb-1"><i className="fas fa-list text-info me-2"></i> Todo List (HTML, CSS, JS, AlertSweet)</li>
                                        <li className="mb-1"><i className="fas fa-carrot text-success me-2"></i> Trang web bán rau và quản lý rau (Java, JSP, HTML, CSS, JS, Bootstrap)</li>
                                        <li className="mb-1"><i className="fas fa-tools text-danger me-2"></i> Visual Studio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </motion.div>
                <motion.div
                    className={`row ${styles.section1}`}
                    initial={{ opacity: 0, y: 50 }}          // ban đầu mờ + trượt xuống
                    whileInView={{ opacity: 1, y: 0 }}       // khi hiện trong viewport thì fade in + trượt lên
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Contact />
                </motion.div>
            </div>
        </>
    )
}