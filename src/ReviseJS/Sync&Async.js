// =====================================================================
// BƯỚC 1: TẠO HÀM MÔ PHỎNG TÁC VỤ BẤT ĐỒNG BỘ (TRẢ VỀ PROMISE)
// =====================================================================
function fetchStudentInfo(studentId) {
  return new Promise((resolve, reject) => {
    console.log(`[Hệ thống] Đang tải thông tin cho ID: ${studentId}...`);
    
    // Dùng setTimeout để giả lập độ trễ của mạng là 2 giây
    setTimeout(() => {
      const isSuccess = true; // Huynh có thể đổi thành false để test trường hợp bị lỗi mạng
      
      if (isSuccess) {
        // Trả về dữ liệu thành công
        resolve({ 
          id: studentId, 
          name: "Hoàng Văn Sơn", 
          major: "Kỹ thuật phần mềm",
          university: "Đại học FPT"
        });
      } else {
        // Trả về lỗi
        reject("Lỗi 500: Máy chủ không phản hồi hoặc mất kết nối mạng!");
      }
    }, 2000); 
  });
}

// =====================================================================
// BƯỚC 2: CÁCH 1 - XỬ LÝ BẰNG PROMISE CHAINING (.then / .catch)
// =====================================================================
function demoPromiseChaining() {
  console.log("--- BẮT ĐẦU DEMO PROMISE CHAINING ---");
  
  fetchStudentInfo("SE12345")
    .then((student) => {
      console.log("[Thành công] Tên sinh viên:", student.name);
      console.log("[Thành công] Chuyên ngành:", student.major);
    })
    .catch((error) => {
      console.error("[Thất bại]", error);
    })
    .finally(() => {
      console.log("[Hoàn tất] Kết thúc quá trình truy vấn dữ liệu.\n");
    });
    
  // Dòng này là lệnh Sync, nó không bị chặn nên sẽ in ra NGAY LẬP TỨC 
  // trong lúc chờ dữ liệu tải về trong 2 giây.
  console.log(">> Lệnh này chạy tiếp mà không cần chờ dữ liệu tải xong! <<");
}

// =====================================================================
// BƯỚC 3: CÁCH 2 - XỬ LÝ BẰNG ASYNC / AWAIT (Gọn gàng hơn)
// =====================================================================
async function demoAsyncAwait() {
  console.log("--- BẮT ĐẦU DEMO ASYNC/AWAIT ---");
  
  try {
    // Từ khóa 'await' sẽ "tạm dừng" hàm này cho đến khi Promise có kết quả
    const student = await fetchStudentInfo("SE67890"); 
    
    console.log("[Thành công] Tên sinh viên:", student.name);
    console.log("[Thành công] Trường:", student.university);
    
  } catch (error) {
    // Nếu Promise ném ra reject, nó sẽ nhảy vào khối catch này
    console.error("[Thất bại]", error);
  } finally {
    console.log("[Hoàn tất] Kết thúc quá trình truy vấn dữ liệu.\n");
  }
}

// =====================================================================
// CHẠY THỬ (Sư huynh có thể comment 1 trong 2 dòng dưới để xem từng cái)
// =====================================================================
// demoPromiseChaining();
demoAsyncAwait();


