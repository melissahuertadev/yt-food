import { create } from 'axios';

const KEY = 'AIzaSyBi1d49Zrn-Z75zopomE2Hcvd4MEf-Tpiw';

export default create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        topicId: '/m/02wbm',
        key: KEY,
    },
    
});