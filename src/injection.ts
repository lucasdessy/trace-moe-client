import { container, Lifecycle } from "tsyringe";
import { AnilistServiceImpl } from "./infrastructure/anilist/anilist_service";
import { ImageServiceImpl } from "./infrastructure/image/image_service";

export const injectDependencies = () => {
    console.log("Injecting dependencies");

    // Infrastructure
    container.register("ImageService", { useClass: ImageServiceImpl }, { lifecycle: Lifecycle.Singleton });
    container.register("AnilistService", { useClass: AnilistServiceImpl }, { lifecycle: Lifecycle.Singleton });
}