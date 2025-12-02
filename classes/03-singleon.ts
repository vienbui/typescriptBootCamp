export class CourseService{

    private static INSTANCE:CourseService;

    private constructor(){
        console.log("The CourseService was initiablized");
}
    static instance() {
        if (!CourseService.INSTANCE) {
            CourseService.INSTANCE = new CourseService();
        }
        return CourseService.INSTANCE
    }
}