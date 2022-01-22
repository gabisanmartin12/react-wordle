import { BackspaceIcon } from "@heroicons/react/outline";

const KEYBOARD_DISTRIBUTION = [
  [
    { code: "KeyQ", label: "Q" },
    { code: "KeyW", label: "W" },
    { code: "KeyE", label: "E" },
    { code: "KeyR", label: "R" },
    { code: "KeyT", label: "T" },
    { code: "KeyY", label: "Y" },
    { code: "KeyU", label: "U" },
    { code: "KeyI", label: "I" },
    { code: "KeyO", label: "O" },
    { code: "KeyP", label: "P" },
  ],
  [
    { code: "KeyA", label: "A" },
    { code: "KeyS", label: "S" },
    { code: "KeyD", label: "D" },
    { code: "KeyF", label: "F" },
    { code: "KeyG", label: "G" },
    { code: "KeyH", label: "H" },
    { code: "KeyJ", label: "J" },
    { code: "KeyK", label: "K" },
    { code: "KeyL", label: "L" },
  ],
  [
    { code: "Enter", label: "ENTER" },
    { code: "KeyL", label: "Z" },
    { code: "KeyL", label: "X" },
    { code: "KeyL", label: "C" },
    { code: "KeyL", label: "V" },
    { code: "KeyL", label: "B" },
    { code: "KeyL", label: "N" },
    { code: "KeyL", label: "M" },
    { code: "Backspace", label: <BackspaceIcon className="w-8" /> },
  ],
];

const Keyboard = () => (
  <div className="py-2 flex flex-col space-y-2 justify-between">
    {KEYBOARD_DISTRIBUTION.map((row, index) => (
      <div key={`row-${index}`} className="flex space-x-2 justify-center">
        {row.map(({ code, label }) => (
          <div
            key={code}
            className="h-14 px-4 flex justify-center items-center rounded bg-gray-300 text-xs font-semibold cursor-pointer"
          >
            {label}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Keyboard;
