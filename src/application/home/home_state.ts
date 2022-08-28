import { ImageModel } from "../../domain/image/image_model";

export interface HomeState {
    loading: boolean;
    error?: string;
    analyzis?: ImageModel;
    analyzeImage: (image: File) => Promise<void>;
    clearError: () => void;
}