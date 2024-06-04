export type NavbarProps {
  theme?: string;
  customColors?: {
    borderColor?: string;
    bgColor?: string;
  };
}

export type Position {
  left: number;
  width: number;
  opacity: number;
}

export type TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

export type CursorProps = {
  position: Position;
};
