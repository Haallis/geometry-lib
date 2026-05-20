import { ShapeType, ShapeEventMap, ShapeEvent } from "../types.js";

export abstract class Shape extends EventTarget {
  abstract readonly type: ShapeType;

  abstract getParams(): Record<string, number>;

  abstract getArea(): number;

  abstract getPerimeter(): number;

  abstract toString(): string;

  protected emitParamChange(
    param: string,
    oldValue: number,
    newValue: number,
  ): void {
    const event = new ShapeEvent("paramchange", { param, oldValue, newValue });
    this.dispatchEvent(event);
  }

  on<K extends keyof ShapeEventMap>(
    type: K,
    listener: (event: ShapeEvent<K>) => void,
  ): void {
    this.addEventListener(type, listener as EventListener);
  }

  off<K extends keyof ShapeEventMap>(
    type: K,
    listener: (event: ShapeEvent<K>) => void,
  ): void {
    this.removeEventListener(type, listener as EventListener);
  }
}

