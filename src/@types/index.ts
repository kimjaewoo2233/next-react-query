

export interface MemberDTO {
    id: string;
    email: string;
    password: string;
    thumbnail: string;
    login_type: string;
    created_at: string;
    updated_at: string;
    nick_name: string;
    uid: number;
}

export interface MemberListAPIDTO {
    item: MemberDTO[];
    nextCursor: number;
}