import FilterMapReduce from './FilterMapReduce.class';

export default class FilterMapSubReduce extends FilterMapReduce {

  protected reduce(): number {
    let result: number = 0;
    this.array.forEach((num: number) => result -= num);
    return result;
  }


  protected postFilterEvaluation() {
    console.log('Filter in Add applied, inherited from parent class');
    console.log(`\t filtering positive elements, array is: ${this.array}`);
  }
  protected postMapEvaluation() {
    console.log('Map in Add applied, inherited from parent class');
    console.log(`\t copying elements, array is: ${this.array}`);
  }
  protected preReduceEvaluation() {
    console.log('Reduce should return substract of all elements');
    console.log(`\tnumerical result should be: ${this.array.reduce((acc, el) => acc - el)}`);
  }
}
