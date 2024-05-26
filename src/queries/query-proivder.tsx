'use client';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { error } from "console";
import { useState } from "react";



export default function QueryProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 0,
                    refetchOnWindowFocus: false,
                    retry: 0,
                    networkMode: "offlineFirst",
                    refetchOnMount: true,

                },
                mutations: {
                    networkMode: 'offlineFirst',
                    retry: 0,
                }
            },
            queryCache: new QueryCache({
                onError: (error: any) => {
                    console.error(error);
                }
            }),
            mutationCache: new MutationCache({
                onError: (error, mutation) => {
                    console.error(error);
                }
            })
        })
    });

    return (
        <QueryClientProvider client={client}>
             {children}
        </QueryClientProvider>
    )
}