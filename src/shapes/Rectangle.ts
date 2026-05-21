import { ShapeType } from "../types.js";
import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
  readonly type: ShapeType = "rectangle";

  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();
    if (width <= 0 || height <= 0) {
      throw new RangeError("Width and height must be positive numbers.");
    }
    this._width = width;
    this._height = height;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    if (value <= 0) throw new RangeError("Width must be a positive number.");
    const old = this._width;
    this._width = value;
    this.emitParamChange("width", old, value);
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    if (value <= 0) throw new RangeError("Height must be a positive number.");
    const old = this._height;
    this._height = value;
    this.emitParamChange("height", old, value);
  }

  getParams(): { width: number; height: number } {
    return { width: this._width, height: this._height };
  }

  getArea(): number {
    return this._width * this._height;
  }

  getPerimeter(): number {
    return 2 * (this._width + this._height);
  }

  toString(): string {
    return `Rectangle(${this._width} × ${this._height})`;
  }
}

