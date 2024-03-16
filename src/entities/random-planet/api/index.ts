import { StarDBClient } from '@/shared/api';
// import { Planet } from '@/shared/models';

const getPlanet = async (id: number) => {
  const client = new StarDBClient();
  return await client.get(`/planets/${id}/`);
};

export { getPlanet };
