import img1 from "./assets/img1.png";
import eye from "./assets/eye.png";
import like from "./assets/like.png";
import person from "./assets/person.png";

const DesignsCard = () => {
  const data = [
    {
      img: img1,
      name: "Judith Sackey",
      id: 0,
    },
    {
      img: img1,
      name: "Judith Sackey",
      id: 1,
    },
    {
      img: img1,
      name: "Judith Sackey",
      id: 2,
    },
    {
      img: img1,
      name: "Judith Sackey",
    },
    {
      img: img1,
      name: "Judith Sackey",
    },
    {
      img: img1,
      name: "Judith Sackey",
    },
    {
      img: img1,
      name: "Judith Sackey",
    },
    {
      img: img1,
      name: "Judith Sackey",
    },
    {
      img: img1,
      name: "Judith Sackey",
    },
    {
      img: img1,
      name: "Judith Sackey",
    },
    {
      img: img1,
      name: "Judith Sackey",
    },
    {
      img: img1,
      name: "Judith Sackey",
    },  
  ];

  return (
    <div className="grid my-10 px-5 md:my-20 md:px-[100px]">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div className="flex flex-col gap-5">
            <img src={img1} className="rounded-lg" alt="" />

            <div className="flex items-center justify-between mr-5">
              <div className="flex items-center gap-2 lg:gap-1">
                <img src={person} className="w-8 h-8" alt="" />
                <p className="text-[#282828] text-base leading-[22.48px] lg:text-sm">
                  Judith Sackey
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#282828] leading-[17px]">
                <div className="flex items-center gap-1">
                  <img src={eye} alt="" />
                  <p>12</p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={like} alt="" />
                  <p>12</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignsCard;
