import {MAX_PAGE_SIZE} from "./12-module-imports"

export {};

export type Course = {
    title: string;
    subtitle: string;
    lessonCount: number;
}

export const PAGE_SIZE = 100;

const pagesize = PAGE_SIZE;

export const COURSE ={
    title: "Typescript Modules",
    subtitle: "Learn about modules in Typescript",
    lessonCount: 10

}