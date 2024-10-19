import { ForwardedRef, useEffect, useRef } from 'react';
import { TextInput } from 'react-native';

const useForwardedRef = (ref?: ForwardedRef<TextInput>) => {
  const innerRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });

  return innerRef;
};

export default useForwardedRef;
