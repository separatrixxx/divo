export interface ModelsInterface {
    status: string,
    result: {
        models: ModelItem[],
        page: number,
        per_page: number,
        sort_by: 'popularity' | 'random',
    }
}

export interface ModelItem {
    id: string,
    random_photo: string,
    view_count?: number,
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
