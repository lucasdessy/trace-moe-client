import axios from "axios";
import { AnilistModel } from "../../domain/anilist/anilist_model";
import { AnilistService } from "../../domain/anilist/anilist_service";
export class AnilistServiceImpl implements AnilistService {
    client = axios.create({
        baseURL: "https://graphql.anilist.co/",
    });
    private query = `
    query ($id: Int) {
        Media(id: $id) {
            isAdult
            title {
                romaji,
            } 
        }
    }`

    async getInfo(id: number): Promise<AnilistModel> {
        console.log("AnilistServiceImpl - Getting info for id: " + id);
        var variables = {
            id: id
        };

        const response = await this.client.post("/", JSON.stringify({
            query: this.query,
            variables: variables
        }), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        return response.data.data.Media as AnilistModel;

    }
}