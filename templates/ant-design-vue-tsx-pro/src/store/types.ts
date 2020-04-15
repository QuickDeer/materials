export type Language = string;

export type theme = 'dark' | 'light';

export type deviceType = 'desktop' | 'mobile' | 'tablet';

export interface RootState {
  theme: theme;
  deviceType: deviceType;
  language: Language;
  version?: string;
}

export interface menuItem {
  id: string;
  icon?: string | undefined;
  path?: string;
  children?: Array<menuItem>;
}

export interface routeItem {
  id: string;
  name: string;
  icon?: string;
  path: string;
  module?: Array<string>;
  children?: Array<routeItem>;
  public?: boolean | undefined;
  mutiTab?: boolean | undefined;
  [propsName: string]: any;
}
