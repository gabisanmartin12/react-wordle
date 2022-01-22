import { BackspaceIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { MouseEvent } from 'react';
import { Key, KeyState } from '../../types/keyboard';
import { useWordle } from '../Wordle/Wordle';

const KEYBOARD_DISTRIBUTION = [
  [
    { code: Key.Q, label: 'Q' },
    { code: Key.W, label: 'W' },
    { code: Key.E, label: 'E' },
    { code: Key.R, label: 'R' },
    { code: Key.T, label: 'T' },
    { code: Key.Y, label: 'Y' },
    { code: Key.U, label: 'U' },
    { code: Key.I, label: 'I' },
    { code: Key.O, label: 'O' },
    { code: Key.P, label: 'P' },
  ],
  [
    { code: Key.A, label: 'A' },
    { code: Key.S, label: 'S' },
    { code: Key.D, label: 'D' },
    { code: Key.F, label: 'F' },
    { code: Key.G, label: 'G' },
    { code: Key.H, label: 'H' },
    { code: Key.J, label: 'J' },
    { code: Key.K, label: 'K' },
    { code: Key.L, label: 'L' },
  ],
  [
    { code: Key.Enter, label: 'ENTER' },
    { code: Key.Z, label: 'Z' },
    { code: Key.X, label: 'X' },
    { code: Key.C, label: 'C' },
    { code: Key.V, label: 'V' },
    { code: Key.B, label: 'B' },
    { code: Key.N, label: 'N' },
    { code: Key.M, label: 'M' },
    {
      code: Key.Backspace,
      label: <BackspaceIcon className="w-8 pointer-events-none" />,
    },
  ],
];

const CLASSNAME_BY_STATE: Record<KeyState, string> = {
  [KeyState.Absent]: 'keyboard__key--absent',
  [KeyState.Correct]: 'keyboard__key--correct',
  [KeyState.Present]: 'keyboard__key--present',
};

const Keyboard = () => {
  const { keyboardState, onKeyPress } = useWordle();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.id) {
      let id = target.id as Key;
      onKeyPress(id);
    }
  };

  return (
    <div className="keyboard" onClick={handleClick}>
      {KEYBOARD_DISTRIBUTION.map((row, index) => (
        <div className="keyboard__row" key={`row-${index}`}>
          {row.map(({ code, label }) => {
            const classnames = ['keyboard__key'];
            const state = keyboardState[code];
            if (state) classnames.push(CLASSNAME_BY_STATE[state]);

            return (
              <div className={classNames(...classnames)} key={code} id={code}>
                {label}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
