export type ShapeType = "rectangle" | "triangle" | "circle";

export interface ShapeEventMap {
  paramchange: { param: string; oldValue: number; newValue: number };
}

export class ShapeEvent<K extends keyof ShapeEventMap> extends Event {
  readonly detail: ShapeEventMap[K];

  constructor(type: K, detail: ShapeEventMap[K]) {
    super(type);
    this.detail = detail;
  }
}

