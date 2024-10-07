export interface ModelsInterface {
    status: string,
    result: {
        models: ModelItem[],
        page: number,
        per_page: number,
        sort_by: string,
    }
}

export interface ModelItem {
    id: string,
    random_photo: string,
    view_count: number,
}
