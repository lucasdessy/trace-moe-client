import { ImageModelResult } from "../../domain/image/image_model";

export interface HomeState {
    loading: boolean;
    error?: string;
    analyzis?: ImageModelResult[];
    analyzeImage: (image: File) => Promise<void>;
    clearError: () => void;
    clearResult: () => void;
}