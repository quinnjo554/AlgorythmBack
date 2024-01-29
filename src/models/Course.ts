export interface Course{
    courseid: number,
    coursename?:string | null,
    coursedescription:string,
    coursesubject:string,
    courseprogress:number,
    coursedifficulty:string,
    userid:number
}