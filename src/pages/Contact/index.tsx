import styles from './Contact.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from '../../assets/components/common/Modal';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Contact() {
    const [email, setEmail] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(false)

    const submitButton = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim() || !content.trim()) {
            toast.warning('Vui lòng nhập đầy đủ Email và Nội dung!');
            return;
        } else if (loading) {
            toast.warning('Bạn Đã Gửi Email Xin Đợi Vài Phút Để Gửi !')
            return
        }
        setLoading(true)
        emailjs.send(
            "service_1sfrvgq",
            "template_bo49857",
            {
                user_email: email,
                message: content,
            }, "G-ZvenokD_Wc7z_dR"
        )
            .then(
                () => {
                    toast.success("Gửi thành công!");
                    setEmail("");
                    setContent("");
                },
                (error) => {
                    toast.error("Gửi thất bại:", error);
                })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 6000000)
            })
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className={`row mt-5`} id='contact'>
                <div className={`d-flex justify-content-center mb-5 `}>
                    <h2 className={`fw-bold text-white ${styles.aboutme}`}>
                        <i className="fas fa-phone-alt text-success me-2"></i> LIÊN HỆ
                    </h2>
                </div>

                <div className="row mt-3 mx-3">
                    {/* Form bên trái */}
                    <div className="col-md-8">
                        <div className="card card-custom pb-4 shadow-lg">
                            <div className="card-body mt-0 mx-4">
                                <div className="text-center mb-3 pb-2 mt-3">
                                    <h4
                                        className="fw-bold  text-warning py-2 rounded"
                                        style={{ backgroundColor: '#000' }}
                                    >
                                        Gửi Thông Tin Liên Hệ
                                    </h4>
                                </div>

                                <form className="mb-0" id="formContact" onSubmit={submitButton}>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <label className="form-label fw-bold">
                                                    <i className="fas fa-envelope text-primary me-2"></i>
                                                    Email
                                                </label>
                                                <input
                                                    placeholder='Nhập Email Của Bạn'
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    id="email"
                                                    onChange={(e) => setEmail(e.target.value)} // ✅
                                                    className="form-control input-custom"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col">
                                            <label className="form-label fw-bold">
                                                <i className="fas fa-comment-dots text-primary me-2"></i>
                                                Nội Dung
                                            </label>
                                            <textarea
                                                placeholder='Nhập Nội Dung mà Bạn Muốn Gửi'
                                                className="form-control"
                                                id="content"
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)} // ✅
                                                name="content"
                                                rows={5}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="text-end">
                                        <button 
                                            title='Hãy gửi thông tin liên hệ của bạn cho mình'
                                            type="submit"
                                            className="btn btn-primary btn-rounded px-4"
                                            disabled={loading}
                                        >
                                            {loading ? "Đang gửi..." : (
                                                <>
                                                    <i className="fas fa-paper-plane me-2"></i> Gửi đi
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Mạng xã hội bên phải */}
                    <div className="col-md-4 d-flex flex-column align-items-center justify-content-center text-center">
                        <h5 className="fw-bold text-white mb-4">Liên Hệ Với Mình Qua Mạng Xã Hội</h5>
                        <div className="d-flex flex-column gap-3">
                            <a href="https://www.facebook.com/tus.sta.16" className="btn btn-outline-primary" title='Chuyển Đến Facebook Của Mình'>
                                <i className="fab fa-facebook me-2"></i> Facebook
                            </a>
                            <a href="https://www.youtube.com/@sapauu4443" className="btn btn-outline-danger" title='Chuyển Đến Youtube Của Mình'>
                                <i className="fab fa-youtube me-2"></i> Youtube
                            </a>
                            <a href="#" className="btn btn-outline-success" title='Chuyển Đến Zalo Của Mình'>
                                <i className="fas fa-comment me-2"></i> Zalo
                            </a>
                            <a href="https://github.com/Nhen05" className="btn btn-outline-dark" title='Chuyển Đến Github Của Mình'>
                                <i className="fab fa-github me-2"></i> Github
                            </a>
                            <a title='Bấm Vào Để Xem CV của mình'
                                data-bs-toggle="modal"
                                data-bs-target="#cvModal"
                                className="btn btn-outline-secondary"
                            >
                                <i className="fas fa-file-alt me-2"></i> CV
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </>
    );
}
