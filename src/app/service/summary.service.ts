import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  private month: string;

  constructor(private vm: any, private noticationService: NotificationService) {
    this.month = ''; // Initialize month as needed
  }
  private modified(): boolean {
    return true;
  }

  private save(): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve(); // Resolve the promise after successful save
    });
  }

  private updateCurrentMonthAndOrganizationSelection(): void {
    // Implement the logic to update current month and organization selection
  }

  private updateUserSelections(): void {
    // Implement the logic to update user selections
  }
  onMonthSelectionChange = () => {
    let userSelections = this.vm.getCurrentMonthAndOrganizationSelected();

    if (
      this.modified() &&
      userSelections.previousMonthSelected !== this.month
    ) {
      this.noticationService
        .confirmSave()

        .then(() => {
          save().then(() => {
            const updatedMonth = 'August';
            this.month = updatedMonth;

            this.updateCurrentMonthAndOrganizationSelection();
          });
        }, this.updateUserSelections);
    } else {
      this.updateUserSelections();
    }
  };
}
function save(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Simulate some asynchronous confirmation process
    setTimeout(() => {
      const confirmed = true; // Replace with your actual confirmation logic

      if (confirmed) {
        resolve(); // If confirmed, resolve the promise
      } else {
        reject(new Error('Save confirmation failed')); // If not confirmed, reject the promise
      }
    }, 1000); // Simulating a 1-second delay
  });
}
