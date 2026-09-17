import React from 'react';

const FlightBookingForm = () => {
  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      {/* Header / Alert Box */}
      <div className="alert alert-warning alert-dismissible fade show d-flex justify-content-between align-items-center" role="alert" style={{ backgroundColor: '#fff3cd', border: 'none' }}>
        <h4 className="mb-0 text-dark">Form đặt vé máy bay</h4>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <form>
            {/* Trường Họ tên với Input Group */}
            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">Họ tên</label>
              <div className="input-group">
                <span className="input-group-text bg-light text-muted">
                   <i className="bi bi-person"></i> {/* Yêu cầu thêm Bootstrap Icons */}
                </span>
                <input type="text" className="form-control" id="hoTen" placeholder="Họ tên" />
                <span className="input-group-text bg-light text-muted">vnđ</span>
              </div>
              <div className="form-text text-muted" style={{ fontSize: '0.8rem' }}>
                Phải nhập 5 ký tự, in hoa....
              </div>
            </div>

            {/* Trường Địa chỉ */}
            <div className="mb-3">
              <label htmlFor="diaChi" className="form-label">Địa chỉ</label>
              <input type="text" className="form-control" id="diaChi" />
              <div className="form-text text-muted" style={{ fontSize: '0.8rem' }}>
                Phải nhập 5 ký tự, in hoa....
              </div>
            </div>

            {/* Trường Đi từ & Đến (Chia cột Grid 12) */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="diTu" className="form-label">Đi từ</label>
                <select className="form-select" id="diTu">
                  <option defaultValue>Hà nội</option>
                  <option value="1">TP. Hồ Chí Minh</option>
                  <option value="2">Đà Nẵng</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="den" className="form-label">Đến</label>
                <select className="form-select" id="den">
                  <option defaultValue>Hà nội</option>
                  <option value="1">TP. Hồ Chí Minh</option>
                  <option value="2">Đà Nẵng</option>
                </select>
              </div>
            </div>

            {/* Checkbox Khứ hồi */}
            <div className="mb-4">
              <label className="form-label d-block">Chọn chiều đi (Khứ hồi)</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checkDi" />
                <label className="form-check-label" htmlFor="checkDi">Đi</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checkVe" />
                <label className="form-check-label" htmlFor="checkVe">Về</label>
              </div>
            </div>

            {/* Nút Submit */}
            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Đặt vé
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;