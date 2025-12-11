export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
  className?: string;
  visible?: string; // For Bootstrap classes like "d-none d-xl-block"
}

// Regular dropdown link
export interface DropdownNavLink extends NavLink {
  items?: NavLink[];
  wideDropdown?: false;
  columns?: never;
}

// Wide dropdown with columns (for IT Solutions)
export interface WideDropdownNavLink extends NavLink {
  wideDropdown: true;
  columns: {
    title: string;
    href: string;
    links: NavLink[];
  }[];
  dropdown?: never;
}
