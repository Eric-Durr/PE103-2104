import FilterMapReduce from './FilterMapReduce.class';

export default class FilterMapAddReduce extends FilterMapReduce {

  protected reduce(): number {
    let result: number = 0;
    this.array.forEach((num: number) => result += num);
    return result;
  }
}
