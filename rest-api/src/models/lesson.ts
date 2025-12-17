// import { Course } from "./course";


// export class Lesson{

//     id: number;
 
//   title: string;

//   duration: string;

//   seqNo: number;

//   course: Course

//   createdAt: Date;
  
//   updatedAt: Date;

// }

import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Course } from "./course";
import {JoinColumn} from "typeorm";

@Entity({
    name: "LESSONS"
})
export class Lesson {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    duration:string;

    @Column()
    seqNo: number;

    @ManyToOne(() => Course, course => course.lessons)
    @JoinColumn({
        name: "courseId"
    })
    course: Course;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}