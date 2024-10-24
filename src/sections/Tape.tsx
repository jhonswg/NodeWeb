import StarIcon from "@/assets/icons/star.svg";
import { Fragment, useState, useRef, useEffect } from "react";

const words = [
  { text: "Initia", link: "https://initia.xyz/" },
  { text: "Symphony", link: "https://orchestralabs.org" },
  { text: "Empeiria", link: "https://empe.io" },
  { text: "Self Chain", link: "https://selfchain.xyz" },
  { text: "Tangle", link: "https://www.tangle.tools" },
  { text: "Avail", link: "https://www.availproject.org" },
  { text: "Cross Finance", link: "https://crossfi.org/" },
  { text: "Warden", link: "https://wardenprotocol.org/" },
  { text: "Erbie", link: "https://www.erbie.io/" },
  { text: "Shardeum", link: "https://shardeum.org/" },
  { text: "Covalent", link: "https://www.covalenthq.com/" },
];

export const TapeSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null); // 
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    if (isHovered) {
      // Ketika hover, simpan posisi scroll saat ini
      const currentScroll = containerRef.current.scrollLeft;
      setScrollPosition(currentScroll);
      containerRef.current.style.animationPlayState = "paused";
    } else {
      // Ketika tidak hover, kembalikan animasi
      containerRef.current.style.animationPlayState = "running";
    }
  }, [isHovered]);

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            ref={containerRef}
            className={`flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:60s]`}
            style={{
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((item) => (
                  <div
                    key={item.text}
                    className="inline-flex gap-4 items-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 uppercase font-extrabold text-sm transition-all duration-300 hover:text-gray-700 hover:scale-110 transform"
                    >
                      {item.text}
                    </a>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
