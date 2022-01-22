import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { Key, KeyState } from '../../types/keyboard';

const Wordle = ({ children }: PropsWithChildren<{}>) => {
  const context: WordleContextType = useMemo(
    () => ({
      keyboardState: {
        [Key.G]: KeyState.Absent,
        [Key.L]: KeyState.Absent,
        [Key.P]: KeyState.Correct,
      },
    }),
    []
  );

  return (
    <WordleContext.Provider value={context}>{children}</WordleContext.Provider>
  );
};

type WordleContextType = {
  keyboardState: Partial<Record<Key, KeyState>>;
};

const WordleContext = createContext<WordleContextType>({
  keyboardState: {},
});

export const useWordle = () => {
  const context = useContext(WordleContext);
  if (!context) throw new Error('useWordle must be used under WordleContext');
  return context;
};

export default Wordle;
