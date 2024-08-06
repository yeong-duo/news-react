import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount } from './counterSlice';
import { RootState } from '../../app/store';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </div>
  );
}

export default Counter;