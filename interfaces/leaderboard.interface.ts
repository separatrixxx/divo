export interface LeaderboardInterface {
    status: string,
    result: {
        top_20: LeaderboardItemInterface[],
    }
}

export interface LeaderboardItemInterface {
    position: number,
    model_id: string,
    original_id: number,
    total_votes: number,
    voted_by_user: boolean,
}
