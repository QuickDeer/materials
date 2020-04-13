export type Language = string;

export interface RootState {
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
