/*
    List of features
    Sign In.
        - ID
        - Password
        - Forgot Password
        - Verification Code
    Header 
        - Avatar (profile)
        - Notice
        - Setting
    Bottom Tab
        - Home
        - Grades/Academics
        - Notice
        - Profile 
    Home
        - Upcoming class (for current day)
        - Payment History
        - Fee payment 
        - Library Access
        - Helpdesk/Support
    Grades/Academics
        - Result View
        - TER
    Profile
        - Registration No
        - ID Number
        - Overview with image
        - Contact
        - Academic 
        - Advisor
        - Syllabus
        - cgpa
        - Outstanding Balance
    Notice
        - List of all notice with notification
    Setting 
        - Update user information
    Logout


    - Login 
    - Syllabus
    - Registration
        - Show offered course
    - Application Submission
    - 
*/

import { Redirect } from 'expo-router';

const index = () => {
  const redirect = false;
  if (redirect) {
    return <Redirect href='/home' />;
  } else {
    return <Redirect href='/sign-in' />;
  }
};

export default index;
