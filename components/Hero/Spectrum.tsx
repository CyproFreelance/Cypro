import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function Spectrum() {
  return (
    <div className="flex flex-col items-center justify-center px-14 py-10">
      <h3 className="text-[#FF4D00] text-xl">Business Branding</h3>
      <h1 className="relative bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-12 text-4xl text-center from-[#ffffff] to-[rgba(255,255,255,0.42)]">
        Full Spectrum Branding
      </h1>

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

interface SkeletonProps {
  imageUrl: string; // Define imageUrl prop as string type
}

const Skeleton: React.FC<SkeletonProps> = ({ imageUrl }) => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-[#0B0B0B] relative">
    <div className="absolute inset-0 flex items-center justify-center">
      <Image src={imageUrl} alt="" layout="fill" objectFit="cover" objectPosition="top" />
    </div>
  </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton imageUrl='/image 13.svg' />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton imageUrl='image 12.svg'/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton imageUrl='image 11.svg'/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton imageUrl='image 14.svg'/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  // Repeat the above object structure for each item
];