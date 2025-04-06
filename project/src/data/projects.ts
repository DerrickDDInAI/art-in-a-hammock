// Import local images
import birdHover from '/src/assets/bird_ij_color_hsv_01_to_100.gif';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  colabLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Edge Detection",
    description: "Implementation of Sobel and Canny edge detection algorithms for identifying object boundaries in images.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    // hoverImage: "src/assets/bird_ij_color_hsv_01_to_100_hover.gif",
    hoverImage: birdHover, // Use imported image
    // hoverImage: "/bird_ij_color_hsv_01_to_100_hover.gif", // Note the leading slash (method where you move all images to public folder)
    colabLink: "https://colab.research.google.com"
  },
  {
    id: 2,
    title: "Image Segmentation",
    description: "K-means clustering based image segmentation to separate objects from their background.",
    image: "src/assets/quadruple_transfer_1_20220318.gif",
    hoverImage: "src/assets/quadruple_transfer_1_20220318_hover.gif",
    colabLink: "https://colab.research.google.com"
  },
  {
    id: 3,
    title: "Optical Flow",
    description: "Lucas-Kanade method for calculating the motion between two image frames.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&hover",
    colabLink: "https://colab.research.google.com"
  },
  {
    id: 4,
    title: "Feature Detection",
    description: "SIFT and SURF algorithms for detecting and matching keypoints between images.",
    image: "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&q=80&w=800&hover",
    colabLink: "https://colab.research.google.com"
  },
  {
    id: 5,
    title: "Image Enhancement",
    description: "Histogram equalization and adaptive filtering for improving image quality.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&hover",
    colabLink: "https://colab.research.google.com"
  },
  {
    id: 6,
    title: "Motion Detection",
    description: "Background subtraction techniques for detecting moving objects in video streams.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800&hover",
    colabLink: "https://colab.research.google.com"
  },
  {
    id: 7,
    title: "Motion Detection",
    description: "Background subtraction techniques for detecting moving objects in video streams.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800&hover",
    colabLink: "https://colab.research.google.com"
  }
];