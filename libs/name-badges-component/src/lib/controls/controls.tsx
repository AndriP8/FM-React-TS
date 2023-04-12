import React from 'react';

export interface ControlsProps {
  name: string;
  onChange: (v: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlPanel = ({ name, onChange }: ControlsProps) => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ControlPanel;
