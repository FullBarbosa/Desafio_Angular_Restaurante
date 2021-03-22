import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() numeroMesa!: number;
  @Input() statusMesa!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  roteId(id: any): void {
    this.router.navigate([`mesa/${id}`]);
  }
}
