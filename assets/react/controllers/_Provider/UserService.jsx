import axios from 'axios';

export function UserService() {

    const getUser = async (setUserIdentifier) => {
        try {
            const response = await axios.get('/api/user');
            setUserIdentifier(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getUser,
    }
}