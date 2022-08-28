import { ImageModel } from "./image_model";

export interface ImageService {
    analyzeImage(image: File): Promise<ImageModel>;
}