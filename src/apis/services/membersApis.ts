import { MemberDTO, MemberListAPIDTO } from "@/@types";
import { instance } from "..";

export interface MemberResponseDTO {
    data: Member[],
    nextPageCursor: string | null;
}

export interface Member {
    id: string;
    name: string;
    nickName: string;
}

export const getUsers = async ({id}:{ id: number})=> {
    try{
        const response = await instance().get<MemberListAPIDTO>('/member/all', {
            params: {
                id : id
            }
        });

        return response.data;
    }catch(error: any) {
        throw error.response.status;
    }
};
