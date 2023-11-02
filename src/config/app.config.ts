interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menus', 'Make a reservation', 'Edit personal information'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage menus',
    'Manage bookings',
    'Manage employee information',
    'Manage table information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4070bf97-19fd-4c93-bb97-df4079baa93e',
};
