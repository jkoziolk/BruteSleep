export interface IStoreSliceState {
  localization: ILocalizationSlice;
}

export interface ILocalizationSlice {
  name: string;
  lon: string;
  lat: string;
}
