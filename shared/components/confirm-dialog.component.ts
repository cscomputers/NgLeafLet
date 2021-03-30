import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';

export class confirmDialogModel {
  title?: string = null;
  subTitle?: string = null;
  text?: string = null;
  buttonOk?: string = null;
  buttonCancel?: string = null;
  inputPlaceholder?: string = null;
  inputTxt?: string = null;
  inputErrors?: Array<string> = null;
  mask?: any = null;

  constructor(obj?: confirmDialogModel) {
    if (obj) {
      for (let key in obj) {
        this[key] = obj[key];
      }
    }
  }
};

@Component({
  template: `
    <h1 mat-dialog-title *ngIf="data.title">{{ data.title }}</h1>
    <div mat-dialog-content>
      <h4 *ngIf="data.subTitle">{{ data.subTitle }}</h4>
      <p style="text-align:center;" *ngIf="data.text">{{ data.text }}</p>
      <mat-form-field *ngIf="data.inputPlaceholder && !data.mask">
        <input
          mdInput
          tabindex="1"
          placeholder="{{ data.inputPlaceholder }}"
          type="text"
          [(ngModel)]="data.inputTxt"
          class="form-control"
          maxlength="100">
      </mat-form-field>
      <mat-form-field *ngIf="data.inputPlaceholder && data.mask">
        <input
          mdInput
          tabindex="1"
          placeholder="{{ data.inputPlaceholder }}"
          type="text"
          [(ngModel)]="data.inputTxt"
          class="form-control"
          maxlength="100">
      </mat-form-field>
      <error-message [listErrors]="data.inputErrors"></error-message>
    </div>
    <div mat-dialog-actions class="action-flex">
      <div class="space-flex"></div>
      <button mat-raised-button color="default" *ngIf="data.buttonCancel" (click)="cancel()">
        {{ data.buttonCancel }}
      </button>
      &nbsp;&nbsp;
      <button mat-raised-button color="warn" *ngIf="data.buttonOk" (click)="ok()">
        {{ data.buttonOk }}
      </button>
      <br><br><br>
    </div>
  `
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {

  // registra um listenner de autenticacao
  private authListenner: Subscription;

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: confirmDialogModel,
              private authService: AuthService) {
  }

  ngOnInit() {
    // registra o listenner
    this.authListenner = AuthService.wasAuthenticated.subscribe( au => {
      // fecha o dialog no logoff
      if (!au) this.dialogRef.close();
    } );
  }

  ngOnDestroy() {
    // cancela o listenner ao sair
    this.authListenner.unsubscribe();
  }

  ok(): void {
    this.dialogRef.close({
      choice: 'ok',
      data: this.data
    });
  }

  cancel(): void {
    this.dialogRef.close({
      choice: 'cancel',
      data: this.data
    });
  }
}
