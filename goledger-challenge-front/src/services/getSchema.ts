import api from "./api"

export type GetSchemaResponse = {
  description: string;
  dynamic: boolean;
  label: string;
  tag: string;
  writers: null | string[];
}

export const getSchemas = async (): Promise<GetSchemaResponse[]> => {
  const response = await api.get('/query/getSchema');
  return response.data as GetSchemaResponse[]
}