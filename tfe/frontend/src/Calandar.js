import Calendar from 'tui-calendar';
import "tui-calendar/dist/tui-calendar.css";
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const Calendrier = () => {
    

    // var cal = new Calendar('#calendar', {
    //     defaultView: 'month' // monthly view option
    // });

    // Calendar.on('clickSchedule', function(event) {
    //     var schedule = event.schedule;
    
    //     if (lastClickSchedule) {
    //         Calendar.updateSchedule(lastClickSchedule.id, lastClickSchedule.calendarId, {
    //             isFocused: false
    //         });
    //     }
    //     Calendar.updateSchedule(schedule.id, schedule.calendarId, {
    //         isFocused: true
    //     });
    
    //     lastClickSchedule = schedule;
    //     // open detail view
    // });

      

    // var calendar = new Calendar('#calendar', {
    //     defaultView: 'month',
    //     taskView: true,
    //     template: {
    //         monthDayname: function (dayname) {
    //             return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
    //         }
    //     }
    // });

    // calendar.createSchedules([
    //     {
    //         id: '1',
    //         calendarId: '1',
    //         title: 'my schedule',
    //         category: 'time',
    //         dueDateClass: '',
    //         start: '2022-03-30T22:30:00+09:00',
    //         end: '2022-03-30T02:30:00+10:00'
    //     },
    //     {
    //         id: '2',
    //         calendarId: '1',
    //         title: 'second schedule',
    //         category: 'time',
    //         dueDateClass: '',
    //         start: '2018-01-18T17:30:00+09:00',
    //         end: '2018-01-19T17:31:00+09:00',
    //         isReadOnly: true    // schedule is read-only
    //     }
    // ]);

    //     // daily view
    // calendar.changeView('day', true);

    // // weekly view
    // calendar.changeView('week', true);

    // // monthly view with 5 weeks or 6 weeks based on the month
    // calendar.setOptions({month: {isAlways6Week: false}}, true);
    // calendar.changeView('month', true);

    // // monthly view(default 6 weeks view)
    // calendar.setOptions({month: {visibleWeeksCount: 6}}, true); // or null
    // calendar.changeView('month', true);

    // // 2 weeks monthly view
    // calendar.setOptions({month: {visibleWeeksCount: 2}}, true);
    // calendar.changeView('month', true);

    // // 3 weeks monthly view
    // calendar.setOptions({month: {visibleWeeksCount: 3}}, true);
    // calendar.changeView('month', true);

    // // narrow weekend
    // calendar.setOptions({month: {narrowWeekend: true}}, true);
    // calendar.setOptions({week: {narrowWeekend: true}}, true);
    // calendar.changeView(calendar.getViewName(), true);

    // // change start day of week(from monday)
    // calendar.setOptions({week: {startDayOfWeek: 1}}, true);
    // calendar.setOptions({month: {startDayOfWeek: 1}}, true);
    // calendar.changeView(calendar.getViewName(), true);

    // // work week
    // calendar.setOptions({week: {workweek: true}}, true);
    // calendar.setOptions({month: {workweek: true}}, true);
    // calendar.changeView(calendar.getViewName(), true);

    // var calendar = new Calendar('#calendar', {

    //     month: {
    //         daynames: daynames,
    //         moreLayerSize: {
    //             height: 'auto'
    //         },
    //         grid: {
    //             header: {
    //                 height: 34
    //             },
    //             footer: {
    //                 height: 10
    //             }
    //         },
    //         narrowWeekend: true,
    //         startDayOfWeek: 1, // monday
    //         visibleWeeksCount: 3,
    //         visibleScheduleCount: 4
    //     },
    //     week: {
    //         daynames: daynames,
    //         narrowWeekend: true,
    //         startDayOfWeek: 1 // monday
    //     }

    // var calendar = new Calendar('#calendar', {
    //     template: {
    //         milestone: function(schedule) {
    //             return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
    //         },
    //         milestoneTitle: function() {
    //             return 'Milestone';
    //         },
    //         task: function(schedule) {
    //             return '&nbsp;&nbsp;#' + schedule.title;
    //         },
    //         taskTitle: function() {
    //             return '<label><input type="checkbox" />Task</label>';
    //         },
    //         allday: function(schedule) {
    //             return schedule.title + ' <i class="fa fa-refresh"></i>';
    //         },
    //         alldayTitle: function() {
    //             return 'All Day';
    //         },
    //         time: function(schedule) {
    //             return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
    //         },
    //         monthMoreTitleDate: function(date) {
    //             date = new Date(date);
    //             return tui.util.formatDate('MM-DD', date) + '(' + daynames[date.getDay()] + ')';
    //         },
    //         monthMoreClose: function() {
    //             return '<i class="fa fa-close"></i>';
    //         },
    //         monthGridHeader: function(model) {
    //             var date = parseInt(model.date.split('-')[2], 10);
    //             var classNames = [];

    //             classNames.push(config.classname('weekday-grid-date'));
    //             if (model.isToday) {
    //                 classNames.push(config.classname('weekday-grid-date-decorator'));
    //             }

    //             return '<span class="' + classNames.join(' ') + '">' + date + '</span>';
    //         },
    //         monthGridHeaderExceed: function(hiddenSchedules) {
    //             return '<span class="calendar-more-schedules">+' + hiddenSchedules + '</span>';
    //         },

    //         monthGridFooter: function() {
    //             return '<div class="calendar-new-schedule-button">New Schedule</div>';
    //         },

    //         monthGridFooterExceed: function(hiddenSchedules) {
    //             return '<span class="calendar-footer-more-schedules">+ See ' + hiddenSchedules + ' more events</span>';
    //         },
    //         weekDayname: function(dayname) {
    //             return '<span class="calendar-week-dayname-name">' + dayname.dayName + '</span><br><span class="calendar-week-dayname-date">' + dayname.date + '</span>';
    //         },
    //         monthDayname: function(dayname) {
    //             return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
    //         },
    //         timegridDisplayPrimaryTime: function(time) {
    //             var meridiem = time.hour < 12 ? 'am' : 'pm';

    //             return time.hour + ' ' + meridiem;
    //         },
    //         timegridDisplayTime: function(time) {
    //             return time.hour + ':' + time.minutes;
    //         },
    //         goingDuration: function(model) {
    //             var goingDuration = model.goingDuration;
    //             var hour = parseInt(goingDuration / SIXTY_MINUTES, 10);
    //             var minutes = goingDuration % SIXTY_MINUTES;

    //             return 'GoingTime ' + hour + ':' + minutes;
    //         },
    //         comingDuration: function(model) {
    //             var goingDuration = model.goingDuration;
    //             var hour = parseInt(goingDuration / SIXTY_MINUTES, 10);
    //             var minutes = goingDuration % SIXTY_MINUTES;

    //             return 'ComingTime ' + hour + ':' + minutes;
    //         },
    //         popupDetailRepeat: function(model) {
    //             return model.recurrenceRule;
    //         },
    //         popupDetailBody: function(model) {
    //             return model.body;
    //         }
    //     }
    // });

    // Customize Popup
    // var cal = new Calendar('#calendar', {
    //     useCreationPopup: false,
    //     useDetailPopup: false,
    // });

    // cal.on({
    //     'clickSchedule': function(e) {
    //         console.log('clickSchedule', e);
    //     },
    //     'beforeCreateSchedule': function(e) {
    //         console.log('beforeCreateSchedule', e);
    //         // open a creation popup

    //         // If you dont' want to show any popup, just use `e.guide.clearGuideElement()`

    //         // then close guide element(blue box from dragging or clicking days)
    //         e.guide.clearGuideElement();
    //     },
    //     'beforeUpdateSchedule': function(e) {
    //         console.log('beforeUpdateSchedule', e);
    //         e.schedule.start = e.start;
    //         e.schedule.end = e.end;
    //         cal.updateSchedule(e.schedule.id, e.schedule.calendarId, e.schedule);
    //     },
    //     'beforeDeleteSchedule': function(e) {
    //         console.log('beforeDeleteSchedule', e);
    //         cal.deleteSchedule(e.schedule.id, e.schedule.calendarId);
    //     }
    // });

    // Calendrier read-only

    // var cal = new Calendar('#calendar', {
    //     isReadOnly: true
    // });

    // show multiple timezones

    // var cal = new Calendar('#calendar', {
    //     timezones: [{
    //         timezoneOffset: 540,
    //         // displayLabel: 'GMT+09:00',
    //         tooltip: 'Seoul'
    //     }, {
    //         timezoneOffset: -420,
    //         // displayLabel: 'GMT-08:00',
    //         tooltip: 'Los Angeles'
    //     }],
    //     week: {
    //         showTimezoneCollapseButton: true,
    //         timezonesCollapsed: false
    //     }
    // });

    // calendar.today();
    // calendar.prev();
    // calendar.next();

    return (
        <div>
            {/*<div id="menu">
                 <span id="menu-navi">
                    <button type="button" class="btn btn-default btn-sm move-today" data-action="move-today">Today</button>
                    <button type="button" class="btn btn-default btn-sm move-day" data-action="move-prev">
                        <i class="calendar-icon ic-arrow-line-left" data-action="move-prev"></i>
                    </button>
                    <button type="button" class="btn btn-default btn-sm move-day" data-action="move-next">
                        <i class="calendar-icon ic-arrow-line-right" data-action="move-next"></i>
                    </button>
                </span>
                <span id="renderRange" class="render-range"></span>
            </div>
²
            <div id="calendar"></div> */}
            {/* <div id="calendar" style="height: 800px;"></div> */}
        </div>
    )
}
export default Calendrier