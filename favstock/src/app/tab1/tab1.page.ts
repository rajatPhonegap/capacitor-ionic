import { Component } from '@angular/core';
import {
  ActionSheet,
  ActionSheetButtonStyle,
  ShowActionsOptions,
} from '@capacitor/action-sheet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  showActions = async () => {
    console.log('yes');

    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share',
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive,
        },
      ],
    });

    console.log('Action Sheet result:', result);
  };

  showActionSheet() {
    this.showActions();
  }
}
