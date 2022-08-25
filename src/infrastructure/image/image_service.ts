import axios from "axios";
import { ImageAnalysis } from "../../domain/image/image_analysis";
import { ImageService } from "../../domain/image/image_service";

export class ImageServiceImpl implements ImageService {
    // Axios
    client = axios.create({
        baseURL: "",
    });
    analyzeImage(image: File): Promise<ImageAnalysis> {
        // TODO: implement
        throw new Error("Method not implemented.");
    }
}