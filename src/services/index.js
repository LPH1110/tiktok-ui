import { httpRequest } from '~/utils';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: { q, type },
        });
        return res.data;
    } catch (e) {
        console.log('Error in services');
    }
};
