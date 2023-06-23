const mapping: Record<string, string> = {
  companies: 'company',
  'end-customers': 'end_customer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
