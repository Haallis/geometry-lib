import { ShapeType } from "../types.js";
import { Shape } from "./Shape.js";

export class Circle extends Shape {
  readonly type: ShapeType = "circle";

  private _radius: number;

  constructor(radius: number) {
    super();
    if (radius <= 0) {
      throw new RangeError("Radius must be a positive number.");
    }
    this._radius = radius;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (value <= 0) throw new RangeError("Radius must be a positive number.");
    const old = this._radius;
    this._radius = value;
    this.emitParamChange("radius", old, value);
  }

  getDiameter(): number {
    return this._radius * 2;
  }

  getParams(): { radius: number } {
    return { radius: this._radius };
  }

  getArea(): number {
    return Math.PI * this._radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this._radius;
  }

  toString(): string {
    return `Circle(r=${this._radius})`;
  }
}

