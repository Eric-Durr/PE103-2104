import { describe, it } from 'mocha';
import { expect } from 'chai';
import FilterMapSubReduce from '../src/FilterMapSubReduce.class';

describe('Tests for Sub especification of FilterMapReduce Template Method design', () => {
  const myArrayOperator = new FilterMapSubReduce([1,2,0,3,4]);
  it ('Expect default values to be initial', () => {
    expect(myArrayOperator.array).to.be.eql([1,2,0,3,4]);
  })
  it ('Expect run method to transform array and return the add', () => {
    expect(myArrayOperator.run()).to.be.eql(-10);
    // filter an map applied
    expect(myArrayOperator.array).to.be.eql([1,2,3,4]);
  })
});

describe('Tests for Sub especification of FilterMapReduce but map callback is poxer of index', () => {
  const myArrayOperator = new FilterMapSubReduce([1,2,0,3,4]);
  myArrayOperator.callback = (el: number, inx: number) => el ** inx;

  it ('Expect default values to be initial', () => {
    expect(myArrayOperator.array).to.be.eql([1,2,0,3,4]);
  })
  it ('Expect run method to transform array and return the add', () => {
    expect(myArrayOperator.run()).to.be.eql(-76);
    // filter an map applied
    expect(myArrayOperator.array).to.be.eql([1,2,9,64]);
  })
});
