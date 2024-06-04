export interface NavbarProps {
  theme?: string;
  customColors?: {
    borderColor?: string;
    bgColor?: string;
  };
}

export interface Position {
  left: number;
  width: number;
  opacity: number;
}

export interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  isActive: boolean;
}
