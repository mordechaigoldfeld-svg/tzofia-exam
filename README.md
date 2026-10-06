# tzofia project
בפניכם מערכת חכמה לדיווח וניטור אירועים בזמן אמת
המערכת מחולקת לפי רמות הרשאה

### מנהל:
רשאי לעשות הכל שזה להוסיף למחוק או לעדכן אירוע כמו כן יכול גם להוסיף משתמשים חדשים

### חייל כללי
יכול להוסיף לעדכן ולמחוק כלל האירועים  בכלל הגזרות

### חייל זירה
יכול להסיף לעכן ולמחוק ולראות רק אירועים שבזירה שלו



---

##  טכנולוגיות
* **צד לקוח (Client):** React, TypeScript, Leaflet (מפות), Zustand (ניהול State מקומי), Socket.io-client.
* **צד שרת (Server):** Node.js, Express, MongoDB, Socket.io, JWT & Bcrypt, Zod(validations).

---
# database

הוחלט להשתמש עם מסד נתונים מסוג לא רלציוני כי אין איזה קשר ישיר בין הטבלאות(אפשרי להשתמש עם רלציוני אך לא נהוג)

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

# endpoints

## alerts

* POST/register

* POST/login

* Get/me

* DELETE/users/:Id

* GET/users"


## users

* POST/auth/register

* POST/auth/login

* GET/auth/me

* DELETE/auth/users/:Id

* GET/auth/users


# error

{success:false/true,message}

* 200 sucess
* 201 sucess created
* 404 not found
* 403 frobiden
* 400 bad requset
* 500 server error

## מבנה תקייות

* server
```
|   .env
|   .env.example
|   .gitignore
|   package-lock.json
|   package.json
|   server.js
|   structure.txt
|   
+---CONTROLER
|       alertCntrl.js
|       userCntrl.js
|       
+---DAL
|       alertDal.js
|       usersDal.js
|       
+---DB
|       mongo_config.js
|       
+---MIDDLEWEAR
|       alertMiddle.js
|       authMiddle.js
|       userMiddle.js
|       
+---Models
|       alertModles.js
|       userModels.js
|       
+---node_modules
|   |   .package-lock.json
|   |   
 
+---ROUTES
|       alertRoute.js
|       userRouter.js
|       
+---SERVICE
|       alertService.js
|       userService.js
|       
\---UTILS
        alertSchemas.js
        createError.js
        password_config.js
        token_confi.js
        userSchema.js
```
* client
```
\---src
    |   App.css
    |   App.tsx
    |   index.css
    |   main.tsx
    |   
    +---api
    |       alertApi.ts
    |       usersApi.ts
    |       
    +---assets
    |       hero.png
    |       react.svg
    |       vite.svg
    |       
    +---components
    |   +---alertDetail
    |   |       AlertDetail.tsx
    |   |       
    |   +---alertMap
    |   |       AlertsMap.tsx
    |   |       
    |   +---createAlert
    |   |       CreateAlert.css
    |   |       CreateAlert.tsx
    |   |       
    |   +---createUser
    |   |       CreateUser.tsx
    |   |       
    |   \---userDetails
    |           UserDetail.tsx
    |           
    +---pages
    |   +---login
    |   |       Login.tsx
    |   |       
    |   +---map
    |   |       Map.css
    |   |       Map.tsx
    |   |       
    |   +---protected
    |   |       Protected.tsx
    |   |       
    |   \---register
    |           Register.css
    |           Register.tsx
    |           
    +---store
    |       useUserStore.ts
    |       
    +---types
    |       alertType.ts
    |       userTypes.ts
    |       
    \---utils
            axios_config.ts
            

```
