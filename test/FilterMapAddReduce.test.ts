import { describe, it } from 'mocha';
import { expect } from 'chai';
import FilterMapAddReduce from "../src/FilterMapAddReduce.class";


describe('Tests for Add especification of FilterMapReduce Template Method design', () => {
const myArrayOperator = new FilterMapAddReduce([1,2,0,3,4]);
  it ('Expect default values to be initial', () => {
    expect(myArrayOperator.array).to.be.eql([1,2,0,3,4]);
  })
  it ('Expect run method to transform array and return the add', () => {
    expect(myArrayOperator.run()).to.be.eql(10);
    // filter an map applied
    expect(myArrayOperator.array).to.be.eql([1,2,3,4]);
  })
});
