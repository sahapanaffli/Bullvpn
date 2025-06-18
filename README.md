# Bullvpn
Automate script
ถ้าจะรันต้องติดตั้ง playwright ใน vscode ลงเครื่อง
npx playwright install
เลือก javascript

และเอาไฟล์ login.spec.js กับ variable.js มาไว้ด้วยกันใน Folder test
และรัน terminal 
npx playwright test login.spec.js --project=chromium --trace=on

*เขียนมาแค่เคสเดียวคือให้ login และเข้าไป ดาวน์โหลดfor windows และให้เช็ค ว่า header แสดงไปที่หน้า download for windows จริงไหม ถ้าจริงตอนรันจะ pass ถ้าไม่ตอนรันจะ failed
