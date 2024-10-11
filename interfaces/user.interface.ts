export interface UserInterface {
    status: string,
    result: {
        user_id: number,
        refferal_id: null,
        user_data: {},
        coins: number,
        total_available_votes: number,
        remaining_votes: number,
        potential_reward: number,
    }
}

export interface RefsInterface {
    status: string,
    result: {
        referral_info: {
            referral_count: number,
            referrals_total_coins: number,
            user_coins: number,
            referrals: RefItem[],
        },
        referral_link: string,
    }
}

export interface RefItem {
    id: string,
    balance: number,
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
