import { act, renderHook } from '@testing-library/react-hooks';

import useDebounce from './useDebounce';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('should call the callback after the specified delay', () => {
    const callback = jest.fn();
    const delay = 1000;

    const { result } = renderHook(() => useDebounce({ callback, delay }));

    act(() => {
      result.current();
      result.current();
      result.current();
    });

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback if the delay has not passed', () => {
    const callback = jest.fn();
    const delay = 1000;

    const { result } = renderHook(() => useDebounce({ callback, delay }));

    act(() => {
      result.current();
    });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it('should clear timeout on unmount', () => {
    const callback = jest.fn();
    const delay = 1000;

    const { result, unmount } = renderHook(() =>
      useDebounce({ callback, delay }),
    );

    act(() => {
      result.current();
    });

    unmount();

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).not.toHaveBeenCalled();
  });
});
