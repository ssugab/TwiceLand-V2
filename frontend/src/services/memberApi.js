import { api } from './api';

export const getMembers = async (params = {}) =>
    (await api.get('/members', { params })).data.data;

export const getMember = async (slug) =>
    (await api.get(`/members/${slug}`)).data.data;