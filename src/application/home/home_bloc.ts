import { container } from "tsyringe";
import create from "zustand";
import { ImageService } from "../../domain/image/image_service";
import { HomeState } from "./home_state";

export const useHomeBloc = create<HomeState>((set) => ({
    loading: false,
    error: undefined,
    analyzis: undefined,
    analyzeImage: async (image: File) => {
        try {
            set({ loading: true, error: undefined });
            const imageService = container.resolve<ImageService>("ImageService");
            const imageAnalysis = await imageService.analyzeImage(image);
            console.log(imageAnalysis);
            set({ loading: false, analyzis: imageAnalysis });
        } catch (error) {
            set({ loading: false, error: `Ocorreu um erro: ${error}` });
        }
    },
    clearError: () => set({ error: undefined }),
}));