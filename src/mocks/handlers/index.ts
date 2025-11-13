import { http, HttpResponse } from 'msw';

/**
 * Tämä on esimerkkihandleri. Voit lisätä omat mock-API-reittisi tähän.
 * Katso lisätietoja: https://mswjs.io/docs/
 */
export const handlers = [
  // Esimerkki: Siepataan GET-pyyntö osoitteeseen /user
  http.get('/api/user', () => {
    // Palautetaan mock-data JSON-muodossa
    return HttpResponse.json({ id: 'c7b3d8e0', firstName: 'John', lastName: 'Maverick' });
  }),
];
