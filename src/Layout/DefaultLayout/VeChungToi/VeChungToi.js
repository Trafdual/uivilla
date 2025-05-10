import CoSoVatChat from "../../../components/CoSoVatChat/CoSoVatChat";
import TienIchSanCo from "../../../components/CoSoVatChat/TienIchSanCo";
import "./VeChungToi.scss";

const VeChungToi = () => {
  return (
    <div className="contact-page">
      <div className="header">
        <img src="/KTT08640.jpg" alt="Header Image" className="header-image" />
        <h1>Giới thiệu</h1>
      </div>
      <div className="villa-section">
        <div className="villa-image">
          <img
            src="https://socavilla.vn/wp-content/uploads/2022/06/Anh-review-socavilla-1-1024x683.jpg"
            alt="Soca Villa"
          />
        </div>
        <div className="villa-content">
          <h1>Soca Villa</h1>
          <p>
            Ấn mình giữa một không gian xanh trải dài giữa thiên nhiên hùng vĩ
            của vùng núi Bà Vì, xen kẽ nét căng tràn sức sống của thiên nhiên,
            yên tĩnh và lãng mạn, SOCA VILLA là điểm đến lý tưởng cho chuyến đi
            của bạn bè, gia đình hay nhóm.
          </p>
          <p>
            Tọa lạc trên 2200 m² với 3 phòng được thiết kế gần gũi với thiên
            nhiên, cùng những tiện ích hiện đại, công suất phục vụ tối đa 40
            khách.
          </p>
          <p>
            Mỗi phòng nghỉ tại SOCA đều có tầm nhìn ra cánh đồng cỏ xanh mướt,
            núi đồi thoảng mộng, bạn có thể ngồi thưởng trà, tản bộ dưới không
            khí mát lạnh, bình yên của một ngày mới.
          </p>
          <p>
            Tại SOCA, chúng tôi luôn lắng nghe và mang đến cho khách những trải
            nghiệm tốt nhất để kỳ nghỉ trọn vẹn. Hãy cùng gia đình, bạn bè tận
            hưởng kỳ nghỉ tuyệt vời tại Soca Villa Bà Vì nhé!
          </p>
        </div>
      </div>
      <TienIchSanCo/>
      <CoSoVatChat/>
    </div>
  );
};

export default VeChungToi;
