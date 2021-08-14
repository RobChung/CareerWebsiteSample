import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Job from 'src/app/models/Job';
import { JobDataManagerService } from 'src/app/services/job-data-manager.service';
import { Location } from "@angular/common";
@Component({
    selector: 'app-job-details-page',
    templateUrl: './job-details-page.component.html',
    styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

    job:Job = {} as Job; // Default set to empty job object
    // Inject services needed to use required functions, eg functions for Location
    constructor(private route: ActivatedRoute, private jobService:JobDataManagerService, private location:Location) { }

    ngOnInit(): void {
        // Make sure to import ParamMap
        this.route.paramMap.subscribe(
            (params: ParamMap) => {
                const jobId = Number(params.get("id")); // params.get will return string, so cast
                console.log(`The job ID is: ${jobId}`);
                console.log(this.jobService.getJobById(jobId));
                this.job = this.jobService.getJobById(jobId);
            }
        )
    }

    goBack = () => {
        this.location.back();
    }
}
