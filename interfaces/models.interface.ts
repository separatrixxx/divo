export type Sort = 'popularity' | 'random';

export interface ModelsInterface {
    status: string,
    result: {
        models: ModelItem[],
        page: number,
        per_page: number,
        sort_by: Sort,
    }
}

export interface ModelItem {
    id: string,
    random_photo: string,
    view_count?: number,
    user_voted: boolean,
}

export interface ModelByIdInterface {
    status: string,
    result: ModelByIdItem,
}

export interface ModelByIdItem {
    id: string,
    original_id: number,
    photo_urls: string[],
    voted_users_count: number,
    default_award: number,
    view_count: number,
}
