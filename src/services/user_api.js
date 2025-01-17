import api from './api';

export const user_login = async data => {
    try {
        const result = await api('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
};