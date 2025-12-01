# 📞 Callmar Panel - Widget Management Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-4.8.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.8.6-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-1.55.0-CC6699?style=for-the-badge&logo=sass&logoColor=white)

</div>

---

## 📖 About

**Callmar Panel** is an admin dashboard for managing Callmar callback widgets. The application provides an interface for creating, configuring, and monitoring callback widgets, tracking call statistics, managing payments, and viewing analytics.

This project was developed as a **freelance assignment** where the UI was implemented based on a **Figma design mockup**.
**Note: This is a frontend-only project. No API integration is implemented.**

---

## ✨ Features

### 🎨 Widget Management

- **Create Widgets**: Add new callback widgets for websites
- **Widget Configuration**: Comprehensive settings panel with live preview
- **Multiple Layouts**: Support for different widget templates:
  - Standard layout
  - With employee photo
  - Banner style
  - Full-screen mode
- **Color Customization**: Multiple color schemes (Blue, Gray, Green, LightGreen, LightPurple, LightRed, Orange)
- **Text Customization**: Configure headings, button text, and messages
- **Timer Settings**: Configure callback countdown timer
- **Logo Upload**: Custom logo support with drag-and-drop
- **Widget Toggle**: Enable/disable widgets individually

### 📊 Statistics & Analytics

- **Call Statistics**: View detailed call metrics and analytics
- **Date Range Selection**: Filter statistics by date periods
- **Widget Filtering**: Filter statistics by specific widgets
- **Daily Reports**: View statistics by days
- **Performance Metrics**: Track widget performance

### 📞 Call Management

- **Call History**: View all callback requests and calls
- **Call Table**: Detailed table with call information
- **Date Filtering**: Filter calls by date (Today, Yesterday, Week)
- **Calendar Selection**: Custom date range selection
- **Widget Filtering**: Filter calls by widget
- **Reset Filters**: Quick filter reset functionality

### 💳 Payment & Billing

- **Payment Management**: Handle payments and billing
- **Tariff Information**: View and manage subscription plans
- **Expired Tariff Alerts**: Notifications for expired subscriptions
- **Payment History**: Track payment transactions

### ⚙️ Settings & Configuration

- **Button Settings**: Configure callback button appearance and behavior
- **Widget Settings**: Comprehensive widget customization
- **Avatar Management**: Select and manage operator avatars
- **Color Schemes**: Customize widget color palettes
- **Text Configuration**: Customize all widget text elements

### 🔐 Authentication

- **User Login**: Secure login system
- **User Registration**: Account creation functionality
- **Session Management**: Persistent user sessions

---

## 🛠 Tech Stack

### Core Technologies

<div align="center">

| Category             | Technology                                                                                                | Version |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| **Library**          | ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)                     | 18.2.0  |
| **Language**         | ![TypeScript](https://img.shields.io/badge/TypeScript-4.8.4-3178C6?logo=typescript&logoColor=white)       | 4.8.4   |
| **State Management** | ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.8.6-764ABC?logo=redux&logoColor=white)      | 1.8.6   |
| **Routing**          | ![React Router](https://img.shields.io/badge/React_Router-6.4.2-CA4245?logo=react-router&logoColor=white) | 6.4.2   |
| **Styling**          | ![SASS](https://img.shields.io/badge/SASS-1.55.0-CC6699?logo=sass&logoColor=white)                        | 1.55.0  |

</div>

### Key Libraries

<div align="center">

| Library             | Purpose                       | Version |
| ------------------- | ----------------------------- | ------- |
| **Framer Motion**   | Animations and transitions    | 7.6.5   |
| **React Slick**     | Carousel components           | 0.29.0  |
| **React Slider**    | Range sliders                 | 2.0.4   |
| **Recharts**        | Charts and data visualization | 2.1.16  |
| **React SVG**       | SVG icon rendering            | 15.1.10 |
| **React Swipeable** | Swipe gestures                | 7.0.0   |
| **Day.js**          | Date manipulation             | -       |

</div>

---

## 🔥 Redux State Management

The application uses Redux Toolkit for state management:

- **Pages State**: Current active page and navigation
- **Modals State**: Modal visibility and content
- **Colors State**: Selected color schemes
- **Avatar State**: Selected operator avatars
- **Widget State**: Widget configuration and settings
