import { container, Lifecycle } from "tsyringe";
import { ImageServiceImpl } from "./infrastructure/image/image_service";

export const injectDependencies = () => {
    console.log("Injecting dependencies");

    // Infrastructure
    container.register("ImageService", { useClass: ImageServiceImpl },{lifecycle:Lifecycle.Singleton});
}