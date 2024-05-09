import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { CoinService } from '../services/coin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './coin-list.component.html',
  styleUrl: './coin-list.component.scss'
})
export class CoinListComponent implements OnInit {

  coinListDataSource = new MatTableDataSource<any>();
  displayedColumns =['name', 'symbol'];

  constructor(private coinService: CoinService, private router: Router) {}

  ngOnInit(): void {
    this.coinService.getCoinList().subscribe(coins => {
      //TODO: Add typing and pagination
      this.coinListDataSource.data = (coins as Array<any>).slice(0, 20);
    })
  }

  openCoinDetails(coinId: string) {
    this.router.navigate(['coin', coinId]);
  }
}
