"use client"

import { useGetMember } from "@/queries/member/useGetMember";
import { useEffect } from "react";

export default function HomePage(){
    const {
        memberData,
        fetchNextPage,
        hasNextPage,
        isFetching,
        status,
        setTarget,
        refetch
    } = useGetMember();

    useEffect(() => {
    }, []);

    return (
        <div>   
            {memberData?.item.map((data) => (
                <div key={data.id}>
                    {data.nick_name} - {memberData.nextCursor}
                </div>
            ))}
        </div>
    )
}
