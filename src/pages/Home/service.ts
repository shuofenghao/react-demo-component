import { request } from 'umi';

interface NoticeType {
  name: string;
}

export async function queryProjectNotice(payload): Promise<{ data: NoticeType[] }> {
  return request('/api/project/notice', { params: payload });
}
