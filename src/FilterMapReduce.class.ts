export default abstract class FilterMapReduce {
  protected _array: number[];

  constructor(array: number[] = []) {
    this._array = array;
  }


  get array(): number[] { return this._array; }

  set array(value: number[]) { this._array = value; }

  public run(): number {
    this.array = this.filter();
    this.postFilterEvaluation();
    this.array = this.map();
    this.postMapEvaluation();
    this.preReduceEvaluation();
    return this.reduce();
  }

  // Algorithm predefined steps
  protected filter(predicate: Function = (el: number) => el > 0 ): number[] {
    const resultArray: number[] = [];
    this._array.forEach((num) => {
      if(predicate(num)) {
        resultArray.push(num);
      }
    })
    return resultArray;
  }

  protected map(callback: Function = (el: number, inx?: number) => el): number[] {
    const resultArray = [];

    for (let i = 0; i < this.array.length; i++) {
      resultArray[i] = callback(this.array[i], i);
    }

    return resultArray;
  }

  // Algorithm abstract steps
  protected abstract reduce(): number

  // hooks
  public postFilterEvaluation() {}
  public postMapEvaluation() {}
  public preReduceEvaluation() {}
}
