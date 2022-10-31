import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {Candidate} from "../../models/candidate.model";
import {CandidatesServices} from "../../services/candidates.services";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-single-candidate',
  templateUrl: './single-candidate.component.html',
  styleUrls: ['./single-candidate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCandidateComponent implements OnInit {

  loading$!: Observable<boolean>;
  candidate$!: Observable<Candidate>;

  constructor(private candidatesService: CandidatesServices,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initObservable();
  }

  private initObservable() {
    this.loading$ = this.candidatesService.loading$;
    this.candidate$ = this.route.params.pipe(
      switchMap(params => this.candidatesService.getCandidateById(+params['id']))
    )
  }

  onHire() {

  }

  onRefuse() {

  }

  onGoBack() {
    this.router.navigateByUrl('/reactive-state/candidates');
  }
}
