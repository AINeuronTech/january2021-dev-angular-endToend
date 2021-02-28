import { Component } from '@angular/core';
import { ITopic } from './models/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { TopicDialogComponent } from './topic-dialog/topic-dialog.component';
import { TopicsService } from './topics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  topicsList: ITopic[];

  constructor(
    private _dialog: MatDialog,
    private _topicsService: TopicsService
  ) {
    this.topicsList = [];
  }

  addNewTopic(): void {
    const dialogRef = this._dialog.open(TopicDialogComponent, {
      minWidth: '475px',
      minHeight: '350px',
      data: {},
    });
    dialogRef.afterClosed().subscribe((result: ITopic) => {
      this.addTopic(result);
    });
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    this._topicsService.read().subscribe((res) => {
      this.topicsList = res.map((topics) => {
        return {
          ...topics.payload.doc.data() as {},
          id: topics.payload.doc.id,
        } as ITopic;
      });
    });
  }

  addTopic(newTopic: ITopic): void {
    this._topicsService.create(newTopic).then();
  }
}
