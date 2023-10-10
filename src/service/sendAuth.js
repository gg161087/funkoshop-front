export const sendAuthenticatedRequest = async (url, method = 'GET', body = null, token) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        const config = {
            method,
            headers,
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        const response = await fetch(url, config);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error de solicitud');
        }
    } catch (error) {
        console.error('Error de red:', error);
        throw error;
    }
};