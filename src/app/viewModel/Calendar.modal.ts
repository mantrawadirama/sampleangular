import { Injectable } from '@angular/core';
enum Organization {
  OrganizationA = 'Organization A',
  OrganizationB = 'Organization B',
  // Add more organizations as needed
}

// Define an interface for the returned object
interface MonthAndOrganization {
  previousMonthSelected: string;
  organization: string;
}
@Injectable({
  providedIn: 'root',
})
export class CalendarModel {
  selectedOrganization: Organization;
  currentMonth: string;
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor() {
    this.selectedOrganization = Organization.OrganizationA;
    this.currentMonth = '';
  }

  // Method to get current month and selected organization
  getCurrentMonthAndOrganizationSelected(): MonthAndOrganization {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth() + 1;

    const result: MonthAndOrganization = {
      previousMonthSelected: '',
      organization: this.selectedOrganization,
    };
    if (currentMonthIndex === 0) {
      result.previousMonthSelected = this.months[11]; // December
    } else {
      result.previousMonthSelected = this.months[currentMonthIndex - 1]; // Previous month
    }

    return result;
  }

  // Method to set the selected month to the previous month
  previousMonthSelected(): string {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();

    if (currentMonthIndex === 0) {
      return (this.currentMonth = 'December');
    } else {
      return (this.currentMonth = this.months[currentMonthIndex - 1]);
    }
  }
}
