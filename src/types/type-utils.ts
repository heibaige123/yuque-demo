/**
 * 从对象中摘除指定类型后提取对象的属性值组成的联合类型
 */
export type OmitKeyUnion<T, K extends keyof T> = keyof Omit<keyof T, K>;
