
import { Component, Input, SimpleChange } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';
import { EquipmentDemandResp } from 'src/app/core/models/app.EquipmentDemandResp';

@Component({
  selector: 'pm-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  @Input('equipement_reserved') equipement_reserved: EquipmentDemandResp = {} as EquipmentDemandResp;
  @Input('equipement_to_reserve') equipement_to_reserve: EquipmentDemandResp = {} as EquipmentDemandResp;

  init = false;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [],
    initialDate: new Date(),
    height: '100%',
    fixedWeekCount: false,
    displayEventTime: true,
    editable: true,
    lazyFetching: false,
    nowIndicator: true,
    dateClick: this.handleDateClick.bind(this),
  };


  ngOnChanges(changes: SimpleChange): void {
    if (this.init) {
      this.updateEvents();
    }
  }

  ngAfterViewInit() {
    this.init = true;
    this.updateEvents();
  }

  updateEvents() {

    this.calendarOptions.events = [
      { title: 'Equipment Reserved', start: new Date(this.equipement_reserved.startDate), end: new Date(this.equipement_reserved.endDate), color: 'green' },
      { title: 'Equipment To Reserve', start: new Date(this.equipement_to_reserve.startDate), end: new Date(this.equipement_to_reserve.endDate), color: 'red' },
    ];
  
    
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }
}
