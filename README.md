
รันใน terminal
ติดตั้ง playwright ด้วยคำสั่ง npm init playwright@latest > เลือก javascript


ที่อยู่ไฟล์จะอยู่ใน folder "tests"
ไฟล์ test จะชื่อ login.spec.js
รันใน terminal
npx playwright test login.spec.js --project=chromium --trace=on --headed

*เขียนมาแค่เคสเดียวคือให้ login และเข้าไป ดาวน์โหลดfor windows และให้เช็ค ว่า header แสดงไปที่หน้า download for windows จริงไหม ถ้าจริงตอนรันจะ pass ถ้าไม่ตอนรันจะ failed


