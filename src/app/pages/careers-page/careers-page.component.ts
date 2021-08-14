import { Component, OnInit } from '@angular/core';
import Job from 'src/app/models/Job';
import { JobDataManagerService } from 'src/app/services/job-data-manager.service';

@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.css']
})
export class CareersPageComponent implements OnInit {

jobsList:Job[] = [];

    // Use dependency injection to be able to access functions in service class
  constructor(private jobService:JobDataManagerService) { }

  // On page load, fetch jobs from Service class
  ngOnInit(): void {
    console.log(this.jobService.getAllJobs());
      this.jobsList = this.jobService.getAllJobs();
      
  }

  buttonPressed = (city:string) => {
      console.log(this.jobService.getJobsByCity(city));
      this.jobsList = this.jobService.getJobsByCity(city);
  }
}
