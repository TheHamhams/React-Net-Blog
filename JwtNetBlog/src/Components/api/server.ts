import { RegisterProps } from "../Forms"

const URL = 'https://localhost:7063'

export const register_calls = {
    post: async (data:RegisterProps) => {

        const response = await fetch('https://localhost:7063/api/user/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return response.json()
    }
}