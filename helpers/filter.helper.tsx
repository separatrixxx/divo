import { ModelItem } from "../interfaces/models.interface";


export function filterModels(sort: 'all' | 'collection', models: ModelItem[]): ModelItem[] {
    return models.filter(el => {
        if (sort === 'all') {
            return !el.user_voted;
        } else {
            return el.user_voted;
        }
    });
}
