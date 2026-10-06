# tzofia project
בפניכם מערכת חכמה לדיווח וניטור אירועים בזמן אמת



---

##  טכנולוגיות
* **צד לקוח (Client):** React, TypeScript, Leaflet (מפות), Zustand (ניהול State מקומי), Socket.io-client.
* **צד שרת (Server):** Node.js, Express, MongoDB, Socket.io, JWT & Bcrypt, Zod(validations).

---


## מבנה תקייות




---

##  הגדרת משתני סביבה (.env)

יש ליצור קובץ `.env` בתוך תיקיית `server` ולהגדיר בו את הערכים:

```
PORT=
MONGODB_URI=
JWT_SECRET=
JWT_EXPIRES_IN=
CLIENT_ORIGIN=

```


##  הוראות הרצה

### 1. הפעלת השרת (Server)


```
cd server
npm install
npm start
```

### 2. הפעלת הלקוח(client)

```
cd client/tzofia-exam
npm install
npm run dev
```



## endpoints