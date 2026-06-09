function validateCorporateForm(event) {
    // ป้องกันการรีเฟรชหน้าจออัตโนมัติ
    event.preventDefault(); 
    
    // ดึงข้อมูล Element สำคัญ
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // ดึงส่วนแจ้งเตือนข้อผิดพลาด
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let isFormValid = true;

    // --- จุดที่ 1: ตรวจสอบความถูกต้องของ ชื่อ-นามสกุล ---
    if (fullName.value.trim() === "") {
        fullName.classList.add('invalid');
        nameError.style.display = 'block';
        isFormValid = false;
    } else {
        fullName.classList.remove('invalid');
        nameError.style.display = 'none';
    }

    // --- จุดที่ 2: ตรวจสอบความถูกต้องของ โครงสร้างอีเมลองค์กร ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('invalid');
        emailError.style.display = 'block';
        isFormValid = false;
    } else {
        email.classList.remove('invalid');
        emailError.style.display = 'none';
    }

    // --- จุดที่ 3: ตรวจสอบความปลอดภัยรหัสผ่าน (ขั้นต่ำ 6 ตัวอักษรตามมาตรฐานองค์กร) ---
    if (password.value.length < 6) {
        password.classList.add('invalid');
        passwordError.style.display = 'block';
        isFormValid = false;
    } else {
        password.classList.remove('invalid');
        passwordError.style.display = 'none';
    }

    // --- การตอบสนองเมื่อระบบตรวจสอบผ่านทั้งหมด ---
    if (isFormValid) {
        const careerSelect = document.getElementById('career');
        const selectedCareerName = careerSelect.options[careerSelect.selectedIndex].text;
        
        // แสดงโมดอลเสมือนหรือแจ้งเตือนแบบเป็นทางการ
        alert(`🔒 ระบบยืนยันตนสำเร็จ\n---------------------------------------\nชื่อผู้บันทึก: ${fullName.value}\nสังกัดสายงาน: ${selectedCareerName}\n\nระบบกำลังนำท่านเข้าสู่ Secure Portal ภายในสถาบัน...`);
        
        // สั่งเคลียร์ค่าในฟอร์มเพื่อความปลอดภัย
        document.getElementById('corporateForm').reset();
    }

    return isFormValid;
}