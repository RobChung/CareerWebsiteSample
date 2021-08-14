import { Injectable } from '@angular/core';
import Job from '../models/Job';

@Injectable({
    providedIn: 'root'
})
export class JobDataManagerService {

    jobsList: Job[] = [
        { id: 1, title: "Manager, Software Engineering", type: "Full Time", location: "New York City" },
        { id: 2, title: "Software Developer, IOS", type: "Full Time", location: "New York City" },
        { id: 3, title: "Machine Vision Engineer", type: "Full Time", location: "Paris" },
        { id: 4, title: "Test Engineer, Web", type: "Full Time", location: "New York City" }
    ]

    constructor() { }

    // What tasks should the service class should take care of
    // 1. Ownership of jobs data (list of all the jobs)
    // 2. Expose that jobs list to other components
    getAllJobs = (): Job[] => {
        return this.jobsList;
    }


    getJobsByCity = (desiredCity: string): Job[] => {
        // Search for jobs in a specific city and return it
        if (desiredCity === "") {
            return this.jobsList;
        }
        else {
            let results: Job[] = [];
            for (let i = 0; i < this.jobsList.length; i++) {
                if (this.jobsList[i].location === desiredCity) {
                    results.push(this.jobsList[i]);
                } else {
                    // do nothing
                }
            }
            return results;
            // return this.jobsList.filter((currJob:Job) => {
            //     if(currJob.location === desiredCity) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // })
        }
    }

    getJobById = (jobId:Number) => {
        // Search for the job within the specified ID, and return it
        let foundJob:Job = {} as Job;
        for(let i = 0; i < this.jobsList.length; i++){
            if(this.jobsList[i].id === jobId){
                foundJob = this.jobsList[i];
                break;
            }
        }
        return foundJob;
    }
}
