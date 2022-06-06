export class LocationModel {
  uuid: string;
  name: string;
  children?: Array<LocationModel>;

}

export class ZoneModel extends LocationModel {}

export class CityModel extends LocationModel {}

export class CountryModel extends LocationModel {}

export const LOCATION_TREE: Array<CountryModel> = [
  {
    uuid: '1',
    name: 'Bolivia',
    children: [
      {
        uuid: '1.1',
        name: 'La Paz',
        children: [
          {
            uuid: '1.1.1',
            name: 'Zona Sur',
            children: []
          },
          {
            uuid: '1.1.2',
            name: 'Zona Norte'
          }
        ]
      },
      {
        uuid: '1.2',
        name: 'Cochabamba'
      },
      {
        uuid: '1.3',
        name: 'Santa Cruz'
      }
    ]
  },
  {
    uuid: '2',
    name: 'Colombia',
    children: [
      {
        uuid: '2.1',
        name: 'Bogotá'
      },
      {
        uuid: '2.2',
        name: 'Medellín'
      },
      {
        uuid: '2.3',
        name: 'Barranquilla'
      }
    ]
  }
];
