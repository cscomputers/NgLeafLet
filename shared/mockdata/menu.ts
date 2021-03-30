import { texts } from './texts';
/**
 * Menu data mock
 */
export class MenuMock {
  static root = [
    {
      name: 'dashboard',
      title: texts.menu.dashboard,
      faIcon: 'fa-tachometer',
      link: '/dashboard'
    },
    {
      name: 'configuration',
      title: texts.menu.configuration.configuration,
      faIcon: 'fa-cogs',
      sub: [
        {
          id: 1,
          name: 'ROLE_MAINTAIN_SIMULATION_ACTIVITY',
          title: texts.menu.configuration.simulationActivity,
          link: '/configuration/simulation-activity'
        }
      ]
    },
    {
      name: 'financeiro',
      title: texts.menu.financial.financial,
      faIcon: 'fa-calculator',
      sub: [
        {
          id: 2,
          name: 'ROLE_CONTRACT_MAINTAIN',
          title: texts.menu.financial.contract,
          link: '/financial/contract'
        },
        {
          id: 3,
          name: 'ROLE_CREDIT_ENTRY',
          title: texts.menu.financial.creditEntry,
          link: '/financial/credit-entry'
        },
        {
          id: 4,
          name: 'ROLE_BONUS_ENTRY',
          title: texts.menu.financial.bonusEntry,
          link: '/financial/bonus-entry'
        },
        {
          id: 5,
          name: 'ROLE_MANAGE_CREDITS',
          title: texts.menu.financial.manageCredits,
          link: '/financial/manage-credits'
        },
        {
          id: 6,
          name: 'ROLE_MANAGE_BONUS',
          title: texts.menu.financial.manageBonus,
          link: '/financial/manage-bonus'
        }
      ]
    },
  ];
}
