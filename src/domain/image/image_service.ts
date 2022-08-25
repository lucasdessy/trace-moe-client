import { ImageAnalysis } from "./image_analysis";

export interface ImageService {
    analyzeImage(image: File): Promise<ImageAnalysis>;
}