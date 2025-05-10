import TienIchItem from "../../../components/TienIch/TienIch";
import "./ListTienIch.scss";
const ListTienIch = () => {
  const facilities = [
    {
      image: "/villaimg/z6587108408001_10174311ff79fdeea3679a5c35cd81f2.jpg",
      title: "Bàn bi-a",
      description: "Bàn bi-a 6 lỗ được thiết kế theo tiêu chuẩn quốc tế.",
    },
    {
      image: "/villaimg/z6587108408001_10174311ff79fdeea3679a5c35cd81f2.jpg",
      title: "Bể bơi ngoài trời",
      description:
        "Bể bơi ngoài trời rộng 90 m2. Bao gồm 1 bể bơi cho người lớn (sâu tối đa 160 cm).",
    },
    {
      image: "/villaimg/z6587108408001_10174311ff79fdeea3679a5c35cd81f2.jpg",
      title: "Check-in lồng chim",
      description:
        "Với thiết kế siêu độc, lồng chim trên cây là một góc chill siêu xinh mà không thể bỏ qua.",
    },
    {
      image: "/villaimg/z6587108408001_10174311ff79fdeea3679a5c35cd81f2.jpg",
      title: "Check-in mặt trăng",
      description:
        "Check-in với ‘siêu trăng’ tùng khơi mà lại để không túng. Background trăm năm có một này chắc chắn sẽ khiến cho trip phải điền đảo.",
    },
    {
      image: "/villaimg/z6587108408001_10174311ff79fdeea3679a5c35cd81f2.jpg",
      title: "Khu nướng BBQ",
      description:
        "Khu nướng BBQ ngoài trời có đủ chỗ cho đoàn du khách từ 30-40 người.",
    },
    {
      image: "/villaimg/z6587108408001_10174311ff79fdeea3679a5c35cd81f2.jpg",
      title: "Vườn tùng la hàn",
      description:
        "Vườn tùng la hàn đẹp xanh tươi và thơm ngát là một góc nhỏ bạn không thể bỏ qua.",
    },
  ];

  return (
    <div className="facilities-page">
      <h1>Tiện ích sẵn có</h1>
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <TienIchItem
            key={index}
            image={facility.image}
            title={facility.title}
            description={facility.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTienIch;
