# WhatsApp Integration with WasenderAPI

## Overview
This project integrates WhatsApp messaging using WasenderAPI to allow users to send contact messages directly to your WhatsApp number.

## Features
- ✅ WhatsApp contact button (floating)
- ✅ Contact form modal
- ✅ Direct WhatsApp message sending
- ✅ Form validation
- ✅ Success/Error handling
- ✅ Responsive design

## API Configuration
The component uses the following API configuration:

```javascript
const API_KEY = '9fb852bd081005dd7ab7154a322369d925a0ad3bed4817224b48a01de7d767e5'
const API_URL = 'https://www.wasenderapi.com/api/send-message'
```

## API Endpoint
```
POST https://www.wasenderapi.com/api/send-message
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "to": "966501234567",
  "text": "Hello from WasenderAPI!"
}
```

## Message Format
The system automatically formats messages with line breaks as:
```
كيف أحوالك [الاسم الأول] [الاسم الأخير]؟

تم إرسال طلب منك للتواصل، كيف استطيع مساعدتك؟
```

## Anti-Spam Protection
- **One message per phone number per day**
- **Automatic reset after 24 hours**
- **Prevents message flooding**
- **User-friendly error messages**

## Phone Number Validation
- Must start with country code (966 for Saudi Arabia)
- Example: 966501234567
- No spaces or special characters

## Usage
1. User clicks WhatsApp button
2. Fills contact form (First Name, Last Name, Phone)
3. System validates phone number
4. Sends WhatsApp message via API
5. Shows success/error message
6. Automatically closes modal on success

## Error Handling
- Network errors
- API errors
- Invalid phone numbers
- Form validation errors

## Styling
- Green WhatsApp theme
- Pulse animation on button
- Hover effects
- Responsive modal design
- RTL support for Arabic

## Security
- API key is stored in component (consider moving to environment variables)
- Phone number validation
- Form sanitization

## Future Improvements
- Move API key to environment variables
- Add rate limiting
- Add message templates
- Add contact history
- Add admin dashboard
