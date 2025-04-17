import { 
  AppointmentSVG,
  CelebrationSVG,
  EventSVG,
  MeetingSVG,
  ReminderSVG,
  TaskSVG
} from "../components";

export type FilterKey = typeof filterKeys[number]

export const filterKeys = [
  {
    name: 'tasks',
    Icon: ({ size }: { size: number }) => <TaskSVG size={size} />,
  },
  {
    name: 'events',
    Icon: ({ size }: { size: number }) => <EventSVG size={size} />,
  },
  {
    name: 'reminders',
    Icon: ({ size }: { size: number }) => <ReminderSVG size={size} />,
  },
  {
    name: 'appointments',
    Icon: ({ size }: { size: number }) => <AppointmentSVG size={size} />,
  },
  {
    name: 'meetings',
    Icon: ({ size }: { size: number }) => <MeetingSVG size={size} />,
  },
  {
    name: 'celebrations',
    Icon: ({ size }: { size: number }) => <CelebrationSVG size={size} />,
  },
]