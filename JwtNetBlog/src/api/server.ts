import { RegisterProps, LoginProps } from "../Components/Forms"


const URL = 'https://localhost:7063'

export const register_calls = {
    post: async (data:RegisterProps) => {
        const response = await fetch(`${URL}/api/user/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server');
        };

        return response.json();
    }
};

export const auth_calls = {
    post: async (data:LoginProps) => {
        const response = await fetch(`${URL}/api/user/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        };

        console.log(response.text)
        return response.text;
    }
};