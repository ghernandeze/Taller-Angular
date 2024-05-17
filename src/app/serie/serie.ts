export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    poster: string;
    description: string;

    public constructor(id: number, name: string, channel: string, seasons: number, poster: string, description: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.poster = poster;
        this.description = description;
    }
}

