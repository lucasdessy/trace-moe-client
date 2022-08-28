import axios from "axios";
import { ImageModel } from "../../domain/image/image_model";
import { ImageService } from "../../domain/image/image_service";

export class ImageServiceImpl implements ImageService {
    // Axios
    client = axios.create({
        baseURL: "https://api.trace.moe/",
    });
    async analyzeImage(image: File): Promise<ImageModel> {
        const formData = new FormData();
        formData.append("image", image);
        const response = await this.client.post("/search", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data as ImageModel;
    }
}