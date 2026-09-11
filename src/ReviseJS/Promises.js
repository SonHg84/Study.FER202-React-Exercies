/*
    Đại diện cho sự hoàn thành, thất bại của một thao tác bất đồng bộ.
    Một promises bao gồm ba tráng thái sau: pending, fulfilled, rejected.
*/

const myPromise = new Promise((resolve, reject) => {
  // Giả lập một thao tác bất đồng bộ (ví dụ: gọi API, đọc file)
  setTimeout(() => {
    const success = true; // Thay đổi thành false để test trường hợp lỗi
    
    if (success) {
      resolve("Thao tác thành công! Đây là dữ liệu trả về."); // Chuyển sang trạng thái Fulfilled
    } else {
      reject("Thao tác thất bại! Không thể lấy dữ liệu."); // Chuyển sang trạng thái Rejected
    }
  }, 2000); // Đợi 2 giây
});

myPromise
    .then((result) => {
        console.log("Ket qua:", result);
    })
    .catch((reject) => {
        console.log("Loi: ", reject);
    })
    .finally(() => {
        console.log("Hoang tat qua trinh xu ly promise.");
    });

const calculatePromise = new Promise((resolve, reject) => {
  resolve(5); // Bắt đầu với số 5
});

calculatePromise
  .then((number) => {
    console.log("Bước 1:", number); // 5
    return number * 2;
  })
  .then((number) => {
    console.log("Bước 2:", number); // 10
    return number + 5;
  })
  .then((number) => {
    console.log("Kết quả cuối:", number); // 15
  });

Promise.all([myPromise, calculatePromise])
  .then((resolve) => {
    console.log(resolve);
  });