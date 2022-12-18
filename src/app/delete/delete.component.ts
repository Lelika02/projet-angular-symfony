import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCancel(): void{
    this.router.navigate(['voitures']);
  }

}
