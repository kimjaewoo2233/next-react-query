import { MemberListAPIDTO } from "@/@types";
import { getUsers } from "@/apis/services/membersApis"
import { QueryFunctionContext, QueryKey, useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";



export const useGetMember = () => {
      
    const {
        data: memberData,
        fetchNextPage,
        hasNextPage,
        isFetching,
        status,
        refetch
    } = useInfiniteQuery({
        queryKey: ['memberList'],
        queryFn: ({ pageParam }) => getUsers({ id :pageParam.id}), // pageParam에서 id를 사용
        initialPageParam: { id: 1 }, // 첫 페이지 요청 시 사용할 id 설정
        getNextPageParam: (lastPage, allPages) => {
            // 다음 페이지 요청을 위한 파라미터 반환
            return { id: lastPage.nextCursor };
        },
        select: pageData => {
            const data = pageData?.pages.flatMap(page => page);
            return pageData.pages?.[0];
        }
    });

    const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

    const observerCallback: IntersectionObserverCallback = entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        });
    };

    useEffect(() => {
        if(!target) return;

        const observer = new IntersectionObserver(observerCallback);
        
        observer.observe(target);
        return () => observer.unobserve(target);
    }, [observerCallback, target]);

    return {
        memberData,
        fetchNextPage,
        hasNextPage,
        isFetching,
        status,
        setTarget,
        refetch
    }
}