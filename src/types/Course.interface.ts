export interface Course {
  id: number;
  language: string;
  progress: number;
  vocabulary: Array<{
    id: number;
    question: string;
    answer: string;
  }>;
}
