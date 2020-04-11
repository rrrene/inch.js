export type CodeObject = {
  name: string;
  location: CodeObjectLocation;
  type: CodeObjectType;
  doc: string;
  metadata: CodeObjectMetadata;
};

export type CodeObjectWithRoles = CodeObject & { roles: CodeObjectRole[] };
export type CodeObjectWithRolesAndEvalutation = CodeObjectWithRoles & {
  priority: number;
  score: number;
  grade: CodeObjectGrade;
};

export const CODE_OBJECT_GRADE_NAMES = ['A', 'B', 'C', 'U'];
export type CodeObjectGrade = 'A' | 'B' | 'C' | 'U';

export type CodeObjectType = string;
export type CodeObjectMetadata = any;
export type CodeObjectRole = {
  id: string;
  metadata?: any;
  score?: number;
  potentialScore?: number;
};
export type CodeObjectLocation = {
  filename: string;
  line: number;
  column: number;
};
