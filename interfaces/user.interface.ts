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
        legacy_refferal_votes: number,
        votes_for_ref: number,
        votes_for_task: number,
        invited_friends_count: number,
        money_friends: number,
        register_date: string,
        last_vote_datetime: string,
        last_signed: string,
        blocked_in_stake: number,
        daily_stake_income: number,
        tapping_award_status: string | null,
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
    display_name: string,
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
