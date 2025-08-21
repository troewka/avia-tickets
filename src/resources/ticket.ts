const endpoint = 'https://679d13f487618946e6544ccc.mockapi.io/testove/v1/';
export const ticketResource = {
  getList: () => `${endpoint}/flights`,
  get: (id: string | undefined) => `${endpoint}/flights/${id}`,
};
