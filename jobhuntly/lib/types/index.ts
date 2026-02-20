export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  logo: string;
  type: "Full-Time" | "Part-Time" | "Remote" | "Internship" | "Contract";
  categories: {
    label: string;
    color: "yellow" | "green" | "red" | "purple" | "blue";
  }[];
  applied: number;
  capacity: number;
  datePosted: Date;
  salary: number;
  level: string;
}

export interface FilterOption {
  label: string;
  count: number;
  value: string;
}

export interface FilterGroup {
  label: string;
  key: "type" | "categories" | "level" | "salary";
  options: FilterOption[];
}