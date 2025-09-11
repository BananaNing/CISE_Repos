import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// 测试组件是否能正常渲染
test('renders counter component', () => {
  render(<App />);
  // 检查计数文本是否存在
  expect(screen.getByText(/Count:/i)).toBeInTheDocument();
  // 检查初始计数是否为0
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  // 检查按钮是否存在
  expect(screen.getByText(/Increment count/i)).toBeInTheDocument();
});

// 测试计数器交互功能
test('increments count when button is clicked', () => {
  render(<App />);
  const incrementButton = screen.getByText(/Increment count/i);
  
  // 点击按钮
  fireEvent.click(incrementButton);
  // 检查计数是否变为1
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});

// 分组测试
describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(5); // 断言2+2的结果应为4,此时将它改成5，看看是否会显示失败
  });
});