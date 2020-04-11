export type LocaleMessage = string | LocaleMessageObject;

export interface LocaleMessageObject {
  [key: string]: LocaleMessage;
}

export type Language = string;