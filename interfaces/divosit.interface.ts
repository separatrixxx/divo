export interface DivositIData {
    active: DivositInterface,
    completed: DivositInterface,
}

export interface DivositInterface {
    status: string,
    result: {
        active_stakes?: DivositItem[],
        history?: DivositItem[],
        locked_balance?: number,
    }
}

export interface DivositItem {
    amount: number,
    status: string,
    end_date: number,
    stake_id: string,
    start_date: number,
    daily_reward: number,
    total_reward: number,
    duration_days: number,
    completed_date?: number,
    payment_timestamps: number[],
}
