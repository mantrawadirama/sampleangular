import { TestBed } from '@angular/core/testing';
import { SummaryService } from './summary.service';
import { NotificationService } from './notification.service';
import { CalendarModel } from '../viewModel/Calendar.modal';

describe('SummaryService', () => {
  let summaryService: SummaryService;
  let notificationServiceSpy: jasmine.SpyObj<NotificationService>;
  let calendarModelSpy: jasmine.SpyObj<CalendarModel>;

  beforeEach(() => {
    notificationServiceSpy = jasmine.createSpyObj('NotificationService', [
      'confirmSave',
    ]);
    calendarModelSpy = jasmine.createSpyObj('CalendarModel', [
      'getCurrentMonthAndOrganizationSelected',
    ]);

    summaryService = new SummaryService(
      calendarModelSpy,
      notificationServiceSpy
    );
  });

  it('should create', () => {
    expect(summaryService).toBeTruthy();
  });

  describe('onMonthSelectionChange', () => {
    it('should update month and organization selection when modified and confirmed', async () => {
      calendarModelSpy.getCurrentMonthAndOrganizationSelected.and.returnValue({
        previousMonthSelected: 'July',
        organization: 'My Organization',
      });
      notificationServiceSpy.confirmSave.and.resolveTo();

      summaryService.onMonthSelectionChange();

      // Verify the intended behavior of the public method
      expect(notificationServiceSpy.confirmSave).toHaveBeenCalled();
      expect(
        calendarModelSpy.getCurrentMonthAndOrganizationSelected
      ).toHaveBeenCalled();
    });

    it('should only update user selections when not modified', async () => {
      calendarModelSpy.getCurrentMonthAndOrganizationSelected.and.returnValue({
        previousMonthSelected: 'August',
        organization: 'My Organization',
      });

      summaryService.onMonthSelectionChange();

      // Verify the intended behavior of the public method
      expect(
        calendarModelSpy.getCurrentMonthAndOrganizationSelected
      ).toHaveBeenCalled();
    });

    it('should only update user selections when modification is not confirmed', async () => {
      calendarModelSpy.getCurrentMonthAndOrganizationSelected.and.returnValue({
        previousMonthSelected: 'July',
        organization: 'My Organization',
      });
      notificationServiceSpy.confirmSave.and.rejectWith(
        new Error('Confirmation failed')
      );

      summaryService.onMonthSelectionChange();

      // Verify the intended behavior of the public method
      expect(notificationServiceSpy.confirmSave).toHaveBeenCalled();
      expect(
        calendarModelSpy.getCurrentMonthAndOrganizationSelected
      ).toHaveBeenCalled();
    });
  });
});
