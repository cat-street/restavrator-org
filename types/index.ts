export interface MenuItem {
  name: string;
  link: string | null;
  sub?: Array<MenuItem>;
}

export interface GalleryImage {
  id: string;
  url: string;
  text?: string;
}

export interface Project {
  id: string;
  cover: string;
  title: string;
  description?: string;
  images: GalleryImage[];
}