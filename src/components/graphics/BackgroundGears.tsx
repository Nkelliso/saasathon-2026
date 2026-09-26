import gearLarge from "@/assets/gear-large.svg";
import gearSmall from "@/assets/gear-small.svg";
import Image from "next/image";

export default function BackgroundGears() {
  const scale = 0.7;

  return (
    <div className="opacity-30 -rotate-45">
      <Image
        className="rotate-large-gear"
        src={gearLarge}
        alt={""}
        width={scale * 500}
      />
      <Image
        className="rotate-small-gear -mt-20"
        src={gearSmall}
        alt={""}
        width={scale * 500}
      />
    </div>
  );
}
