// components/CustomImage.tsx
import { getPublicAbsoluteURL } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

interface CustomImageProps extends Omit<ImageProps, "width" | "height"> {
  width?: number;
  height?: number;
  aspectRatio?: "square" | "video" | "banner" | "auto"; // Common aspect ratios
}

const defaultSizes = {
  square: { width: 500, height: 500 }, // 1:1
  video: { width: 800, height: 450 }, // 16:9
  banner: { width: 1200, height: 400 }, // 3:1
  auto: { width: 800, height: 600 }, // 4:3 (common for web)
};

const responsiveSizes = {
  sm: { width: 640, height: 360 }, // Mobile
  md: { width: 768, height: 432 }, // Tablet
  lg: { width: 1024, height: 576 }, // Desktop
  xl: { width: 1280, height: 720 }, // Large desktop
  full: { width: 1920, height: 1080 }, // Full HD
};

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio = "auto",
  fill = false,
  className = "",
  priority = false,
  quality = 85,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}) => {
  // Determine the dimensions
  let finalWidth = width;
  let finalHeight = height;

  // If no dimensions provided, use defaults based on aspect ratio
  if (!width && !height && !fill) {
    const defaults = defaultSizes[aspectRatio];
    finalWidth = defaults.width;
    finalHeight = defaults.height;
  }

  // If only width is provided, calculate height based on common aspect ratios
  if (width && !height && !fill) {
    switch (aspectRatio) {
      case "square":
        finalHeight = width;
        break;
      case "video":
        finalHeight = Math.round((width * 9) / 16); // 16:9
        break;
      case "banner":
        finalHeight = Math.round(width / 3); // 3:1
        break;
      case "auto":
      default:
        finalHeight = Math.round((width * 3) / 4); // 4:3
        break;
    }
  }

  // If only height is provided, calculate width based on common aspect ratios
  if (!width && height && !fill) {
    switch (aspectRatio) {
      case "square":
        finalWidth = height;
        break;
      case "video":
        finalWidth = Math.round((height * 16) / 9); // 16:9
        break;
      case "banner":
        finalWidth = Math.round(height * 3); // 3:1
        break;
      case "auto":
      default:
        finalWidth = Math.round((height * 4) / 3); // 4:3
        break;
    }
  }

  // If using fill prop, width and height should be undefined
  if (fill) {
    finalWidth = undefined;
    finalHeight = undefined;
  }

  return (
    <Image
      src={getPublicAbsoluteURL(src.toString())}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      fill={fill}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
      {...props}
    />
  );
};

export default CustomImage;
