export type MediaAsset = {
  keyPrefix: string;
  widths: number[];
  sizes: string;
};

const MEDIA_ORIGIN = "https://minnerom-storage.s3.firstvds.ru";
const MEDIA_ROOT = "web";

const withNoEdgeSlash = (value: string) => value.replace(/^\/+|\/+$/g, "");

const mediaObjectUrl = (objectKey: string) => {
  const normalizedKey = withNoEdgeSlash(objectKey);
  return `${MEDIA_ORIGIN}/${normalizedKey}`;
};

export const heroAsset: MediaAsset = {
  keyPrefix: "home/hero/background",
  widths: [640, 960, 1280, 1600, 1920, 2560, 3200],
  sizes: "100vw",
};

const baseMediaAsset: Omit<MediaAsset, "keyPrefix"> = {
  widths: [480, 768, 1024, 1280, 1600, 1920, 2560],
  sizes: "(max-width: 720px) 92vw, (max-width: 1200px) 46vw, 520px",
};

const detailMediaAsset: Omit<MediaAsset, "keyPrefix"> = {
  widths: [768, 1024, 1280, 1600, 1920, 2560, 3200],
  sizes: "(max-width: 1200px) 92vw, 980px",
};

export const photoCardAsset = (photoKey: string): MediaAsset => ({
  keyPrefix: `photos/${withNoEdgeSlash(photoKey)}/main`,
  ...baseMediaAsset,
});

export const photoDetailAsset = (photoKey: string): MediaAsset => ({
  keyPrefix: `photos/${withNoEdgeSlash(photoKey)}/main`,
  ...detailMediaAsset,
});

export const productCardAsset = (productKey: string): MediaAsset => ({
  keyPrefix: `products/${withNoEdgeSlash(productKey)}/main`,
  ...baseMediaAsset,
});

export const productDetailAsset = (productKey: string): MediaAsset => ({
  keyPrefix: `products/${withNoEdgeSlash(productKey)}/main`,
  ...detailMediaAsset,
});

export const toResponsiveImage = (asset: MediaAsset) => {
  const normalizedPrefix = withNoEdgeSlash(asset.keyPrefix);
  const srcset = asset.widths
    .map((width) => {
      const key = `${MEDIA_ROOT}/${normalizedPrefix}-${width}.jpg`;
      return `${mediaObjectUrl(key)} ${width}w`;
    })
    .join(", ");

  const largestWidth = Math.max(...asset.widths);
  const src = mediaObjectUrl(`${MEDIA_ROOT}/${normalizedPrefix}-${largestWidth}.jpg`);

  return {
    src,
    srcset,
    sizes: asset.sizes,
  };
};
