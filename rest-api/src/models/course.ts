import { Lesson } from "./lesson";

export class Course {

  id: number;

  seqNo: number;
 
  title: string;

  iconUrl: string;

  longDescription: string;

  category: string;

  lessons: Lesson []

  createdAt: Date;
  
  updatedAt: Date;
}