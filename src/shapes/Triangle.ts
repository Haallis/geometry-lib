import { ShapeType } from "../types.js";
import { Shape } from "./Shape.js";

export class Triangle extends Shape {
  readonly type: ShapeType = "triangle";

  private _a: number;
  private _b: number;
  private _c: number;

  constructor(a: number, b: number, c: number) {
    super();
    Triangle.validateSides(a, b, c);
    this._a = a;
    this._b = b;
    this._c = c;
  }

  /** Side A. */
  get a(): number {
    return this._a;
  }

  set a(value: number) {
    Triangle.validateSides(value, this._b, this._c);
    const old = this._a;
    this._a = value;
    this.emitParamChange("a", old, value);
  }

  /** Side B. */
  get b(): number {
    return this._b;
  }

  set b(value: number) {
    Triangle.validateSides(this._a, value, this._c);
    const old = this._b;
    this._b = value;
    this.emitParamChange("b", old, value);
  }

  /** Side C. */
  get c(): number {
    return this._c;
  }

  set c(value: number) {
    Triangle.validateSides(this._a, this._b, value);
    const old = this._c;
    this._c = value;
    this.emitParamChange("c", old, value);
  }

  getParams(): { a: number; b: number; c: number } {
    return { a: this._a, b: this._b, c: this._c };
  }

  getArea(): number {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c));
  }

  getPerimeter(): number {
    return this._a + this._b + this._c;
  }

  toString(): string {
    return `Triangle(${this._a}, ${this._b}, ${this._c})`;
  }

  private static validateSides(a: number, b: number, c: number): void {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new RangeError("All sides must be positive numbers.");
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new RangeError("Sides do not satisfy the triangle inequality.");
    }
  }
}

