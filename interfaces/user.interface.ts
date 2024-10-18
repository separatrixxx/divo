export interface UserInterface {
    status: string,
    result: {
        user_id: number,
        user_status: string,
        refferal_id: null,
        user_data: {},
        coins: number,
        total_available_votes: number,
        remaining_votes: number,
        potential_reward: number,
        votes_for_ref: number,
        votes_for_task: number,
        register_date: string,
        last_vote_datetime: string,
    }
}

export interface RefsInterface {
    status: string,
    result: {
        referral_info: {
            referral_count: number,
            referrals: RefItem[],
        },
        referral_link: string,
    }
}

export interface RefItem {
    id: string,
}

export interface CoinsInfoInterface {
    status: string,
    result: CoinsInfoItem[],
}

export interface CoinsInfoItem {
    event_by: string,
    procedure: string,
    timestamp: string,
    coins_amount: number,
    procedure_message: string,
}
