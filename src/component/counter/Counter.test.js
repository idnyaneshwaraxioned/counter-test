import Counter from "./Counter";
import {render,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("header render with correct test",()=>{
  const component = render(<Counter/>);
  const headerElem = component.getByTestId('header');
  expect(headerElem.textContent).toBe("REACT COUNTER");
  // expect(headerElem).toBeTruthy()
})

test("Counter must start with 0",()=>{
  const {getByTestId} = render(<Counter/>);
  const countElem = getByTestId('counter');
  expect(countElem.textContent).toBe("0");
})

test("Button text must be +",()=>{
  const {getByTestId} = render(<Counter/>);
  const btnInc = getByTestId('btnInc');
  expect(btnInc.textContent).toBe("+");
  fireEvent.click(btnInc)
})

test("Button text must be -",()=>{
  const {getByTestId} = render(<Counter/>);
  const btnDec = getByTestId('btnDec');
  expect(btnDec.textContent).toBe("-");
})

test("Increase counter by value 1",()=>{
  const {getByTestId} = render(<Counter/>);
  const btnInc = getByTestId('btnInc');
  const countElem = getByTestId('counter');
  expect(countElem.textContent).toBe("0");
  fireEvent.click(btnInc);
  fireEvent.click(btnInc);
  fireEvent.click(btnInc);
  expect(countElem.textContent).toBe("3");
})
