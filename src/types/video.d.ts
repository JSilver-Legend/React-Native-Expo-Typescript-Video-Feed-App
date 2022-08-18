declare interface IOccasion {
    id: number;
    title_en: string;
    title_ar: string;
    image_emojy: string;
    description_en: string;
    description_ar: string;
    type: string;
    order: number;
    created_at: string;
    updated_at: string;
    image_url: string;
}

declare interface ITags {
    slug: string;
    name_en: string;
    name_ar: string;
    order: number;
    featured: number;
    deleted_at: string | null;
    type: string | null;
}

declare interface IUser {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    bio: string | null;
    gender: string | null;
    instagram_link: string | null;
    tiktok_link: string | null;
    role: string;
    full_name: string;
    video_transcoding_status: string;
    country_code: string;
    email_verified_at: string;
    mobile_verified_at: string;
    birthday: string;
    created_at: string;
    updated_at: string;
    language: string;
    deleted_at: string | null;
    email_is_verified: number;
    mobile_is_verified: number;
    email_is_verified_at: string | null;
    mobile_is_verified_at: string | null;
    email_six_digit_sent_at: string | null;
    is_blocked: number | null;
    is_creator: number | null;
    avatar_url: string;
    intro_video_url: string;
    intro_video_thumbnail_url: string;
}

declare interface ITalent {
    id: number;
    slug: string;
    category_id: number;
    user_id: number;
    name_en: string;
    name_ar: string;
    bio_en: string;
    bio_ar: string;
    featured: number;
    verified: number;
    status: string;
    response_time: number;
    cost: string;
    order: number;
    recommended: number;
    cost_ios: string;
    legend: number;
    zoom_link: string | null;
    cost_business: string;
    cost_business_ios: string;
    cost_business_enabled: number;
    cost_message: string;
    cost_message_ios: string;
    chat_enabled: number;
    online: number;
    new: number;
    talent_flag_id: number;
    deleted_at: string | null;
    disable_apple_fees: number;
    followme_commission: number;
    followme_enabled: number;
    farmer_id: number | null;
    enable_audio: number;
    business_platform: string;
    same_day_video_delivery_enabled: number;
    country_id: number;
    collection_id: number;
    avatar_url: string;
    converted_cost: string;
    converted_cost_ios: string;
    converted_cost_business: string;
    converted_cost_business_ios: string;
    converted_cost_message: string;
    converted_cost_message_ios: string;
    converted_currency: string;
    talent_status_icon: string | null;
    market: string;
    support_telephone: string;
    price: string | null;
    tags: ITags[];
    user: IUser;
}

declare interface IVideo {
    id: number;
    talent_id: number;
    customer_id: number;
    order_id: number;
    from: string;
    to: string;
    status: string;
    transcoding_status: string;
    created_at: string;
    updated_at: string;
    featured: number;
    deleted_at: number | undefined;
    occasion_id: number;
    url: string;
    thumbnail: string;
    is_business: number;
    occasion: IOccasion;
    talent: ITalent;
}

declare interface ILink {
    url: string;
    label: string;
    active: boolean;
}

declare interface IResponseData {
    current_page: number;
    data: IVideo[];
    first_page_url: string;
    from: string;
    last_page: number;
    last_page_url: string;
    links: ILink[];
    next_page_url: string;
    path: string;
    per_page: string;
    prev_page_url: string;
    to: number;
    total: number;
}
