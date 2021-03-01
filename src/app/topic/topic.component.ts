import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITopic } from '../models/interfaces';
import { TopicDialogComponent } from '../topic-dialog/topic-dialog.component';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  @Input() topic: ITopic;
  @Input() isSignedIn: boolean;

  constructor(
    private _dialog: MatDialog,
    private _topicsService: TopicsService
  ) {
    this.topic = { title: '', description: '' };
    this.isSignedIn = false;
  }

  ngOnInit(): void {}

  editTopic(topic: ITopic): void {
    const dialogRef = this._dialog.open(TopicDialogComponent, {
      minWidth: '675px',
      maxWidth: '675px',
      minHeight: '425px',
      maxHeight: '425px',
      data: topic,
    });
    dialogRef.afterClosed().subscribe((result: ITopic) => {
      if (result) {
        this._topicsService.update(result);
      }
    });
  }

  deleteTopic(topicId: any): void {
    this._topicsService.delete(topicId);
  }
}
