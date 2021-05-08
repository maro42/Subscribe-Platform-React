import React, { useState, useCallback } from 'react';

function useInputState(
  defaultState: string,
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(defaultState);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setState(e.target.value);
    },
    [],
  );

  return [state, handleInputChange, setState];
}

export default useInputState;