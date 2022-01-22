import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { Key, KeyState } from '../../types/keyboard';

const Wordle = ({ children }: PropsWithChildren<{}>) => {
  const context: WordleContextType = useMemo(
    () => ({
      keyboardState: {
        [Key.G]: KeyState.Absent,
        [Key.L]: KeyState.Correct,
        [Key.P]: KeyState.Present,
      },
      onKeyPress: (key: Key) => console.log(key),
    }),
    []
  );

  return (
    <WordleContext.Provider value={context}>{children}</WordleContext.Provider>
  );
};

type WordleContextType = {
  keyboardState: Partial<Record<Key, KeyState>>;
  onKeyPress: (key: Key) => void;
};

const WordleContext = createContext<WordleContextType>({
  keyboardState: {},
  onKeyPress: () => null,
});

export const useWordle = () => {
  const context = useContext(WordleContext);
  if (!context) throw new Error('useWordle must be used under WordleContext');
  return context;
};

export default Wordle;
