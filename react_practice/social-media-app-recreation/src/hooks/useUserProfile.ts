import { useQuery } from '@tanstack/react-query'
import { getUserProfileByUsername } from '../api/user'

export function useUserProfile(username?: string) {
    return useQuery({
        queryKey: ['profile', username],
        queryFn: () => getUserProfileByUsername(username ?? ''),
        enabled: Boolean(username),
    })
}
