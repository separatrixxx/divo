import { ModelItem } from "../interfaces/models.interface";


export function filterModels(sort: "all" | "voted" | "not_voted", models: ModelItem[]): ModelItem[] {
    return models.filter(el => {
        if (sort === 'all') {
            return true;
        } else if (sort === 'voted') {
            return el.user_voted;
        } else if (sort === 'not_voted') {
            return !el.user_voted;
        }

        return false;
    });
}
