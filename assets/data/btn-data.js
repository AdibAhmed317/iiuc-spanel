export const graduateOption = [
  'Registration Summary',
  'Payment History',
  'Clearance Form',
  'Payment Slip',
  'Course Status',
  'Profile',
  'Result View',
  'Password',
];

export const currentOption = [
  {
    title: 'Payment History',
    route: 'home/payment-history',
  },
  {
    title: 'Payment Slip',
    route: 'home/payment-slip',
  },
  {
    title: 'Password',
    route: 'home/password',
  },
  {
    title: 'Submit Thesis/Project Proposal',
    route: 'home/submit-thesis-project-proposal',
  },
  {
    title: 'Submit Supervisor for Thesis/Project',
    route: 'home/submit-supervisor-thesis-project',
  },
  {
    title: 'Siblings',
    route: 'home/siblings',
  },
];

export const courseRegistrationOption = [
  {
    title: 'Course Registration',
    route: 'academics/course-registration',
  },
  {
    title: 'Registration Summary',
    route: 'academics/registration-summary',
  },
  {
    title: 'TER',
    route: 'academics/ter',
  },
  {
    title: 'Add/Drop',
    route: 'academics/add-drop',
  },
  {
    title: 'Course Status',
    route: 'academics/course-status',
  },
  {
    title: 'Withdraw',
    route: 'academics/withdraw',
  },
  {
    title: 'Result View',
    route: 'academics/result-view',
  },
];

export const menuItems = [
  {
    title: 'Students',
    key: 'students',
    subItems: [
      { label: 'Pre Registration', route: 'academics/pre-registration' },
      { label: 'post Registration', route: 'academics/pre-registration' },
      { label: 'Payment History', route: 'home/payment-history' },
      {
        label: 'Print Course Registration',
        route: 'academics/course-registration',
      },
      { label: 'Students Result View', route: 'academics/result-view' },
      {
        label: 'Registration Summary',
        route: 'academics/registration-summary',
      },
      { label: 'Course Status', route: 'academics/course-status' },
      { label: 'MDP Result View', route: '/students/mdp-result-view' },
    ],
  },
  {
    title: 'Application',
    key: 'application',
    subItems: [
      { label: 'Clearance Form', route: '/application/clearance-form' },
    ],
  },
  {
    title: 'IQAC',
    key: 'iqac',
    subItems: [{ label: 'Alumni Survey', route: '/iqac/alumni-survey' }],
  },
  {
    title: 'Others',
    key: 'others',
    subItems: [
      { label: 'Complain Box', route: '/others/complain-box' },
      { label: 'Recent Complain', route: '/others/recent-complain' },
    ],
  },
  {
    title: 'Setting',
    key: 'setting',
    subItems: [
      { label: 'Update Profile', route: '/settings/update-profile' },
      { label: 'Change Password', route: '/settings/change-password' },
    ],
  },
];
