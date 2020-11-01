import { Article } from "../entities";

export const ARTICLES_LIST: Article[] = [
  {
    id: "79df83a8-0da7-4e33-bc46-1a46f9ef1e2e",
    header: "Header 1",
    content: "lorem ipsum content 1",
    articleImages: [
      {
        imageAlt: "ImageAlt 1",
        imageUrl: "ImageUrl 1",
      },
    ],
    isVisible: true,
  },
  {
    id: "6283e5cc-fec8-4393-9139-6dcea72af67c",
    header: "Header 2",
    content: "lorem ipsum content 2",
    articleImages: [
      {
        imageAlt: "ImageAlt 2",
        imageUrl: "ImageUrl 2",
      },
    ],
    isVisible: true,
  },
  {
    id: "7826bb5a-1979-4c1e-878a-cc00ab2e0e8a",
    header: "Header 3",
    content: "lorem ipsum content 3",
    articleImages: [
      {
        imageAlt: "ImageAlt 3",
        imageUrl: "ImageUrl 3",
      },
    ],
    isVisible: false,
  },
];
