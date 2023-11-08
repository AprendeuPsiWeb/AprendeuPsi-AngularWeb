import { Component } from '@angular/core';
import { MockDatabaseService } from '../../mock-database.service';

interface mockData {
  id: number;
  photo: string;
  name: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  sliceOptions = {
    start: 0,
    end: 100 as number | undefined,
    default: 100,
  };

  data: any[];

  constructor(private mockDatabaseService: MockDatabaseService) {
    this.data = this.mockDatabaseService.getAllData();
  }

  expandText = 'Ver mais';

  onExpandText(evt: any): void {
    this.sliceOptions.end =
      this.sliceOptions.end === this.sliceOptions.default
        ? undefined
        : this.sliceOptions.default;

    this.expandText = this.expandText === 'Ver mais' ? 'Ver menos' : 'Ver mais';
  }
}
