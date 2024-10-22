// useForwardedRef.test.js

import { createRef } from 'react';
import { TextInput } from 'react-native';

import { renderHook } from '@testing-library/react-hooks';

import useForwardedRef from './useForwardedRef';

describe('useForwardedRef', () => {
  it('should set the forwarded ref correctly when ref is a function', () => {
    const callbackRef = jest.fn();
    const { result } = renderHook(() => useForwardedRef(callbackRef));

    expect(callbackRef).toHaveBeenCalledWith(result.current.current);
  });

  it('should set the forwarded ref correctly when ref is an object', () => {
    const refObject = createRef<TextInput>();
    const { result } = renderHook(() => useForwardedRef(refObject));

    expect(refObject.current).toBe(result.current.current);
  });

  it('should not throw an error if no ref is passed', () => {
    const { result } = renderHook(() => useForwardedRef());

    expect(result.current.current).toBe(null);
  });
});
