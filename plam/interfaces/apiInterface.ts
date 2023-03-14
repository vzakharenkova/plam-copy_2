export interface SingleTypeResponce<T> {
  id: 1;
  attributes: T;
}

interface ApiImgFormatDescription {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
}

export interface ApiImgData {
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: {
    small: ApiImgFormatDescription;
    thumbnail: ApiImgFormatDescription;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | string;
  createdAt: string;
  updatedAt: string;
}

export interface HomepageData {
  title: string;
  keywords: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  main_heading: string;
  about_heading: string;
  about_text_content: string;
  projects_heading: string;
  contacts_heading: string;
  contacts_text_content: string;
  about_img: {
    data: { id: number; attributes: ApiImgData } | null;
  };
  projects_imgs: {
    data: { id: number; attributes: ApiImgData }[] | null;
  };
}
