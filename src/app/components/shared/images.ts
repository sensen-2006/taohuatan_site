import heroImage from '../../../imports/9.png';

// 关键视觉资源统一使用本地兜底图，避免弱网或外链失效时影响答辩展示。
export const IMAGES = {
  lakeMountain: heroImage,
  huizhouArch: heroImage,
  lakeBoat: heroImage,
  bridgeVillage: heroImage,
  hiking: heroImage,
  hotel: heroImage,
  calligraphy: heroImage,
  family: heroImage,
  photography: heroImage,
  tea: heroImage,
  sunsetLake: heroImage,
  garden: heroImage,
  road: heroImage,
  tourGuide: heroImage,
} as const;
