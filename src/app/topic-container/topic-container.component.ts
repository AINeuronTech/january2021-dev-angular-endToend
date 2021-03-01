import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITopic } from '../models/interfaces';
import { TopicDialogComponent } from '../topic-dialog/topic-dialog.component';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topic-container',
  templateUrl: './topic-container.component.html',
  styleUrls: ['./topic-container.component.scss'],
})
export class TopicContainerComponent implements OnInit {
  topicsList: ITopic[];
  isSignedIn = false;

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

    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  getTopics(): void {
    this._topicsService.read().subscribe((res) => {
      this.topicsList = res.map((topics) => {
        return {
          ...(topics.payload.doc.data() as {}),
          id: topics.payload.doc.id,
        } as ITopic;
      });
    });
  }

  addTopic(newTopic: ITopic): void {
    this._topicsService.create(newTopic).then();
  }
}
