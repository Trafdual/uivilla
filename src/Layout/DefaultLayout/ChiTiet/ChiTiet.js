// ChiTietPhong.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ReactStars from "react-rating-stars-component";
import "./ChiTiet.scss";
const ChiTietPhong = () => {
  const { namekhongdau } = useParams();
  const [data, setData] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const thumbnailRefs = useRef([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    fetch(`http://localhost:8080/chitietsanpham/${namekhongdau}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [namekhongdau]);

  const scrollToThumbnail = (index) => {
    const ref = thumbnailRefs.current[index];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  useEffect(() => {
    scrollToThumbnail(activeImageIndex);
  }, [activeImageIndex]);

  if (!data) return <div>Loading...</div>;
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, email, content: comment, rating };

    fetch(`http://localhost:8080/postdanhgia/${namekhongdau}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Đánh giá của bạn đã được gửi!");
        // Reset form
        setRating(0);
        setComment("");
        setName("");
        setEmail("");
        // Cập nhật lại danh sách đánh giá
        setData((prev) => ({
          ...prev,
          danhgia: [...(prev.danhgia || []), body],
        }));
      })
      .catch(console.error);
  };

  const { chitietsanpham } = data;

  return (
    <div className="villa-main">
      <div className="villa-main-branch">
        <div className="image-section">
          <div className="thumbnail-carousel">
            {chitietsanpham.img.map((image, index) => (
              <img
                key={index}
                src={`http://localhost:8080/${image}`}
                alt={`Thumbnail ${index}`}
                ref={(el) => (thumbnailRefs.current[index] = el)}
                className={`thumbnail ${
                  activeImageIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
          <div className="main-image-wrapper">
            <img
              src={`http://localhost:8080/${chitietsanpham.img[activeImageIndex]}`}
              alt="Main"
              className="main-image"
            />
            <div
              className="nav-arrow left"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === 0 ? chitietsanpham.img.length - 1 : prev - 1
                )
              }
            >
              ←
            </div>
            <div
              className="nav-arrow right"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === chitietsanpham.img.length - 1 ? 0 : prev + 1
                )
              }
            >
              →
            </div>
          </div>
        </div>
        <div className="content-section">
          <h1>{data.sanpham}</h1>
          <div dangerouslySetInnerHTML={{ __html: chitietsanpham.content }} />
        </div>
      </div>
      <div className="review-section">
        <h2>Đánh giá</h2>

        {data.danhgia?.length > 0 ? (
          data.danhgia.map((dg, index) => (
            <div key={index} className="review">
              <div>
                <strong>{dg.name}</strong> - {dg.rating} ⭐
              </div>
              <div>{dg.content}</div>
            </div>
          ))
        ) : (
          <p>Chưa có đánh giá nào.</p>
        )}

        <div className="review-form">
          <h3>Hãy là người đầu tiên nhận xét “{chitietsanpham.name}”</h3>
          <p>
            Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
            được đánh dấu *
          </p>

          <form onSubmit={handleSubmit}>
            <label>Đánh giá của bạn *</label>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={rating}
              onChange={setRating}
            />

            <label>Nhận xét của bạn *</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>

            <label>Tên *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Gửi đi</button>
          </form>
        </div>
      </div>
      {data.remainingroom?.length > 0 && (
        <div className="related-rooms">
          <h2>Xem thêm phòng</h2>
          <div className="room-list">
            {data.remainingroom.map((room, index) => (
              <div
                key={index}
                className="room-item"
                
              >
                <img
                  src={`http://localhost:8080/${room.img}`}
                  alt={room.namesanpham}
                />
                <p>{room.namesanpham}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChiTietPhong;
