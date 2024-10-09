import { resources } from "./i18n-config";

export type i18nResourcesType = typeof resources;

// Utility type to get the nested keys
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// Type to get all keys recursively
type FlattenObjectKeys<T> = T extends object ? NestedKeyOf<T> : never;

export type i18nResourceKeyType = FlattenObjectKeys<(typeof resources)["en-GB"]["default"]>;
