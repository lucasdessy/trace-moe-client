import { container } from "tsyringe";
import create from "zustand";
import { ImageService } from "../../domain/image/image_service";
import { HomeState } from "./home_state";

export const useHomeBloc = create<HomeState>((set) => ({
    loading: false,
    error: undefined,
    analyzeImage: async (image: string) => {
        try {
            set({ loading: true, error: undefined });
            const imageService = container.resolve<ImageService>("ImageService");
            // const result = await imageService.analyzeImage(image);
            // delay for demo purposes
            await new Promise((resolve) => setTimeout(resolve, 2000));
            set({ error: "bruh moment error" });
            set({ loading: false });
        } catch (error) {
            set({ loading: false, error: `Ocorreu um erro: ${error}` });
        }
    },
    clearError: () => set({ error: undefined }),
}));