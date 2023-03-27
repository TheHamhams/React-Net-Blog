import { RegisterProps, LoginProps, PostProps } from "../Components/Forms"

// .NET
// const URL = 'https://localhost:7063'

// Java
const URL = 'http://localhost:8080/api'

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

        return response.text;
    }
};

export const home_calls = {
    get: async () => {
        const response = await fetch(`${URL}/posts/recent`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        };

        return response.json();
    }
}

export const post_calls = {
    post: async (data:PostProps) => {
        const response = await fetch(`${URL}/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        };

        return response.json()
    }

}

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

