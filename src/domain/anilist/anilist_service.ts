import { AnilistModel } from "./anilist_model";

export interface AnilistService {
    getInfo(id: number): Promise<AnilistModel>;
}