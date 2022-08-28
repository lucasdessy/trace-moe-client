import { container } from "tsyringe";
import create from "zustand";
import { AnilistService } from "../../domain/anilist/anilist_service";
import { ImageModelResult } from "../../domain/image/image_model";
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
            const anilistService = container.resolve<AnilistService>("AnilistService");
            const imageAnalysis = await imageService.analyzeImage(image);
            const images: ImageModelResult[] = [];
            for (const anime of imageAnalysis.result) {
                const result = await anilistService.getInfo(anime.anilist);
                if (!result.isAdult) {
                    console.log("Adding image: " + anime.anilist);
                    images.push({ ...anime, name: result.title.romaji });
                } else {
                    console.log("Skipping image: " + anime.anilist);

                }
            }
            set({ loading: false, analyzis: images });
        } catch (error) {
            console.error(error);
            set({ loading: false, error: `Ocorreu um erro: ${error}` });
        }
    },
    clearError: () => set({ error: undefined }),
}));