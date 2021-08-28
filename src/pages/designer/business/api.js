import { hgRequest } from '@libs/request';

export const getEntity = (url, option) => {
    return hgRequest(url, option);
}