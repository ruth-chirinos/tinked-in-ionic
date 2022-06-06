import {LocationModel} from '../model/location.model';

export class LocationUtils {
  static getLocationName(locationModel: LocationModel) {
    return locationModel.name;
  }
}
