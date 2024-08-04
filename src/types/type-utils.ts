/**
 * 提取对象的属性值类型组成的联合类型
 */
export type ValueTypeUnion<T> = infer K extends keyof T ? T[K] : never;

/**
 * 提取对象的属性值组成的联合类型
 */
export type ValuesOf<T> = T[keyof T];
