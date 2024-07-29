import Button from "@/components/UI/Button/Button";

const Card = () => {
  return (
    <div className=" block overflow-hidden">
      <div className="group relative h-[350px] sm:h-[450px]">
        <img
          src="https://sun9-66.userapi.com/impf/c625422/v625422194/e5c1/7ZHWAQTl3tc.jpg?size=640x640&quality=96&sign=9611263593009a8319073a9678a736bb&c_uniq_tag=rp2QSgqDQEBx8Tpfet0uQvZq1GTQkgtwUZMNblR8mb4&type=album"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" //
        />

        <img
          src="https://i.pinimg.com/736x/40/f9/72/40f972667707b4d25ddc77ef44e64cd6.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          Няня
        </h3>

        <p className="mt-1.5 tracking-wide text-gray-900 mb-3">
          Смирнов Андрей{" "}
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Card;
