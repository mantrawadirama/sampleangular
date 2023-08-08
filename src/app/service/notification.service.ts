import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}
  confirmSave(): Promise<void> {
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
}
