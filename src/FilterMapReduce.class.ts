export default abstract class FilterMapReduce {
  protected _array: number[];
  private _predicate: Function;
  private _callback: Function;

  constructor(
    array: number[] = [],
    predicate: Function = (el: number) => el > 0,
    callback: Function = (el: number, inx?: number) => el,
    ) {
    this._array = array;
    this._predicate = predicate;
    this._callback = callback;
  }

  get array(): number[] { return this._array; }

  set array(value: number[]) { this._array = value; }


  get predicate(): Function {
    return this._predicate;
  }

  set predicate(value: Function) {
    this._predicate = value;
  }

  get callback(): Function {
    return this._callback;
  }

  set callback(value: Function) {
    this._callback = value;
  }

  public run(): number {
    this.array = this.filter();
    this.postFilterEvaluation();
    this.array = this.map();
    this.postMapEvaluation();
    this.preReduceEvaluation();
    return this.reduce();
  }

  // Algorithm predefined steps
  protected filter(): number[] {
    const resultArray: number[] = [];
    this._array.forEach((num) => {
      if(this._predicate(num)) {
        resultArray.push(num);
      }
    })
    return resultArray;
  }

  protected map(): number[] {
    const resultArray = [];

    for (let i = 0; i < this.array.length; i++) {
      resultArray[i] = this._callback(this.array[i], i);
    }

    return resultArray;
  }

  // Algorithm abstract steps
  protected abstract reduce(): number

  // hooks
  protected postFilterEvaluation() {}
  protected postMapEvaluation() {}
  protected preReduceEvaluation() {}
}
