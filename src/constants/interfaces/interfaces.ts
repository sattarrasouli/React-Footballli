export interface IData {
    favorites: any;
    all: League[];
    pinned: any[];
    live: any[];
}

interface League {
    fixtures: Fixture[];
    logo: string;
    id: string;
    api_id: string;
    name: string;
    season: string;
}

interface Fixture {
    home: Team;
    away: Team;
    id: string;
    api_id: string;
    status: string;
    elapsed: number | null;
    start_time: string;
    home_goals: number | null;
    away_goals: number | null;
    home_penalty_goals: any;
    away_penalty_goals: any;
    live_url: string | null;
    archive_url: string | null;
}

interface Team {
    logo: string;
    id: number;
    api_id: number;
    name: string;
    is_favorite: boolean | null;
}
