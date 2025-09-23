export interface Experience {
  title: string;
  company: string;
  duration: string;
  link?: string;
  achievements: string[];
}

export interface Skills {
  frontend: string[];
  backend: string[];
  devops: string[];
  productivity: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}
